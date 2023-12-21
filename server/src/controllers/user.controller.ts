import e, { Request, Response } from 'express';

import Candidate from '../models/candidate.model';

export const GetUser = async (req: Request, res: Response) => {
      const { email } = req.body;

      try {
            const user = await Candidate.findOne({ email: email });
            if (user) {
                  const user_detail = {
                        name: user.name,
                        gender: user.gender,
                        phone_number: user.phone_number,
                        email: user.email,
                        college: user.college_details.name,
                        referral_code: user.referral_id,
                        referred_candidates: user.referred_candidates,
                  };
                  res.status(201).json(user_detail);
            } else {
                  res.status(300).json({ message: 'User not found' });
            }
      } catch (error) {
            res.status(500).json({
                  error: error,
            });
      }
};
