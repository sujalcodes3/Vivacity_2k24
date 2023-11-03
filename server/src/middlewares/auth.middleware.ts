import Candidate from '../models/candidate.model';
import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';


import dotenv from 'dotenv';

dotenv.config();

interface CustomRequest extends Request {
    token: string | JwtPayload
}

export const RouteProtector = (req: Request, res: Response) => {
      const token = req.cookies.token;

      if (!token) {
            return res.json({ message: 'False' });
      }

      
};
