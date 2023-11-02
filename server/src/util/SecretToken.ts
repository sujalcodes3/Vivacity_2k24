import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export function createSecretToken(id: string) {
      return jwt.sign({ id }, process.env.TOKEN_KEY as string, {
            expiresIn: 3 * 24 * 60 * 60,
      });
}
