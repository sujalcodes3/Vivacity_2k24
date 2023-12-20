import Candidate from '../models/candidate.model';
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

export async function RouteProtector(req: Request, res: Response, next : NextFunction) {
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
            const authHeader = req.headers.authorization.split(' ')[1];
            let decoded;
            console.log(authHeader)
            try {
                  decoded = await jwt.verify(
                        authHeader,
                        process.env.SECRET_TOKEN as string,
                  ) as JwtPayload;
                  console.log(decoded)
            } catch (err) {
                  return res.status(401).json({
                        message: 'Unauthorized',
                        success: false,
                  });
            }
            const candidate: Candidate | null = await Candidate.findOne({
                  _id: decoded.id,
            });

            if (candidate) {
                        res.status(200).json({
                        success: true,
                        message: `Welcome ${candidate.name}, you are authorized`,
                  });
                  return next();
            } else {
                  return res.status(401).json({
                        success: false,
                        message: 'Unauthorized, the candidate does not exist',
                  });
            }
      } else {
            return res
                  .status(500)
                  .json({ message: 'No authorization header', success: false }); // internal server error.
      }
}
