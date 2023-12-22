import { Request, Response } from 'express';

import bcrypt from 'bcryptjs';

import Candidate from '../models/candidate.model';

import { createSecretToken } from '../util/SecretToken';
import { generateRandomString, candidateValid } from '../util/helper';

export const signUp = async (req: Request, res: Response) => {
      const generatedRef = await generateRandomString(6);
      let { personaldetails, collegedetails } = req.body;
      const Valid = await candidateValid(
            personaldetails.Email,
            personaldetails.Phone,
      );

      if (Valid[0] && Valid[1]) {
            try {
                  const candidate = await Candidate.create({
                        name: personaldetails.Name,
                        email: personaldetails.Email,
                        password: personaldetails.ConfirmPass,
                        phone_number: personaldetails.Phone,
                        referral_id: generatedRef,
                        gender: personaldetails.Gender,
                        college_details: collegedetails,
                  });
                  const token = createSecretToken(candidate._id.toString());
                  res.cookie('token', token, {
                        httpOnly: false,
                  });
                  res.status(201).json({
                        message: 'User Signed in successfully',
                        success: true,
                        candidate,
                  });
            } catch (err) {
                  res.status(500).json({
                        error: err,
                  });
            }
      } else {
            if (!Valid[0] && !Valid[1]) {
                  res.status(409).json({
                        error: 'Email and Phone number already registered',
                        message: 'The email address and phone number provided is already associated with an existing user account.',
                  });                  
            } else if (!Valid[0]) {
                  res.status(409).json({
                        error: 'Email already registered',
                        message: 'The email address provided is already associated with an existing user account.',
                  });
            } else {
                  res.status(409).json({
                        error: 'Phone number already registered',
                        message: 'The phone number provided is already associated with an existing user account.',
                  });
            }
      }
};

export const Login = async (req: Request, res: Response) => {
      try {
            const { email, password } = req.body;

            const user = await Candidate.findOne({
                  email: email,
            });
            if (!user) {
                  return res.status(401).json({
                        message: 'Invalid Credentials',
                        success: false,
                  });
            }
            const auth: boolean = await bcrypt.compare(password, user.password);
            if (!auth) {
                  return res.status(401).json({
                        message: 'Invalid Credentials',
                        success: false,
                  });
            }
            const token = createSecretToken(user._id.toString());

            res.status(201).json({
                  message: 'User Signed in successfully',
                  success: true,
                  token,
                  id: user._id,
            });
      } catch (error) {
            console.log(error);
      }
};
