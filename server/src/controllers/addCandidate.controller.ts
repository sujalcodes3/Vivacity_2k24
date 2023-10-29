import { Request, Response } from 'express';

import Candidate from '../models/candidate.model';
export const addCandidate = async (req: Request, res: Response) => {
      const generatedRef = generateRandomString(6);
      let { name, email, password, phone_number, gender, college_details } =
            req.body;
      const Valid = await candidateValid(email, phone_number);
      console.log(Valid);
      if (Valid[0] && Valid[1]) {
            const candidate = new Candidate({
                  name: name,
                  email: email,
                  password: password,
                  phone_number: phone_number,
                  referral_id: generatedRef,
                  gender: gender,
                  college_details: college_details,
            });
            try {
                  const response = await candidate.save();
                  if (response) {
                        res.status(201).json({
                              message: 'Entered Candidate',
                              candidate: candidate,
                        });
                  }
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
async function generateRandomString(length: number): Promise<String> {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      let result = '';

      for (let i = 0; i < length / 2; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
      }
      for (let i = 0; i < length / 2; i++) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            result += numbers.charAt(randomIndex);
      }
      const refPresent = await Candidate.findOne({
            referral_id: result,
      });
      if (refPresent) {
            generateRandomString(6);
      }
      return result;
}

async function candidateValid(
      email: string,
      phone_number: number,
): Promise<boolean[]> {
      const emailValid = await Candidate.findOne({
            email: email,
      });
      const phoneValid = await Candidate.findOne({
            phone_number: phone_number,
      });
      return [!Boolean(emailValid), !Boolean(phoneValid)];
}
