import { Request, Response } from 'express';

import Candidate from '../models/candidate.model';

import mongoose from 'mongoose';

export const GetUser = async (req: Request, res: Response) => {
      const { encryp_key_sha256 } = req.body;
      console.log(req.body);

      const id = new mongoose.Types.ObjectId(encryp_key_sha256);

      try {
            const user = await Candidate.findById({ _id: id });
            console.log(user);
            if (user) {
                  const user_detail = {
                        name: user.name,
                        gender: user.gender,
                        phone_number: user.phone_number,
                        email: user.email,
                        college: user.college_details,
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
