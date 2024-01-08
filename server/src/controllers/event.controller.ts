import normalUser from '../models/register.model';
import { Request, Response } from 'express';
import Candidate from '../models/candidate.model';

import { UserValid } from '../util/helper';

export const RegisterUser = async (req: Request, res: Response) => {
      let { personaldetails, eventdetails } = req.body;
      const CA = await Candidate.findOne({
            referral_id: personaldetails.referralCode,
      });

      if (personaldetails.referralCode !== '' && !CA) {
            return res.status(404).json({
                  message: 'No CA with this referral Code Found',
                  success: 'false',
            });
      }

      //   console.log(personaldetails.name);

      const Valid = await UserValid(
            personaldetails.email, // frontend pe case validate kr lena yaha se
            personaldetails.mobile, // same
      );

      if (Valid[0] && Valid[1]) {
            try {
                  const user = await normalUser.create({
                        name: personaldetails.name,
                        email: personaldetails.email,
                        mobile: personaldetails.mobile,
                        referralCode: personaldetails.referralCode,
                        university: personaldetails.university,
                        participant: personaldetails.participant,
                        eventInfo: eventdetails,
                  });

                  if (personaldetails.referralCode !== '') {
                        // if (!CA) {
                        // }
                        await Candidate.findByIdAndUpdate(CA?._id, {
                              $push: { referred_candidates: user.name },
                        });
                  }

                  res.status(201).json({
                        message: 'User Registered successfully',
                        success: true,
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
