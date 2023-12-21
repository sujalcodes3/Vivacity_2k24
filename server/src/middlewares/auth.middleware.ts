import Candidate from '../models/candidate.model';
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export async function RouteProtector(
      req: Request,
      res: Response,
      next: NextFunction,
) {
      console.log(req.headers);
      if (req.headers && req.headers.authorization) {
            const authHeader = req.headers.authorization.split(' ');
            let decoded;
            try {
                  decoded = jwt.verify(
                        authHeader[1],
                        process.env.SECRET_TOKEN as string,
                  ) as JwtPayload;
            } catch (err) {
                  return res.status(401).json({
                        message: 'Unauthorized',
                        success: false,
                  });
            }
            const candidate: Candidate | null = await Candidate.findOne({
                  _id: decoded?.id,
            });

            if (candidate) {
                  next();
            } else {
                  return res.status(401).json({
                        success: false,
                        message: 'Unauthorized, the candidate does not exist',
                  });
            }
      } else {
            return res.status(500).json({
                  message: 'No authorization header',
                  success: false,
            }); // internal server error.
      }
}
