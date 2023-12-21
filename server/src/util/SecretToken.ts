import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export function createSecretToken(id: string) {
      return jwt.sign({ id }, process.env.SECRET_TOKEN as string, {
            expiresIn: 3 * 24 * 60 * 60,
      });
}
