import Candidate from '../models/candidate.model';
import normalUser from '../models/register.model';
export async function generateRandomString(length: number): Promise<String> {
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

export async function candidateValid(
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

export async function UserValid(
      email: string,
      phone_number: number,
): Promise<boolean[]> {
      const emailValid = await normalUser.findOne({
            email: email,
      });
      const phoneValid = await normalUser.findOne({
            mobile: phone_number,
      });
      return [!Boolean(emailValid), !Boolean(phoneValid)];
}
