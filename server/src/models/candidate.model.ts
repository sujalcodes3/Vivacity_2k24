import { Schema, model } from 'mongoose';

import bcrypt from 'bcryptjs';

interface CollegeDetails {
      state: string;
      district: string;
      name: string;
      degree: string;
      isSociety: string,
      society: string
}

interface Candidate {
      name: string;
      email: string;
      password: string;
      phone_number: number;
      referral_id: string;
      gender: string;
      college_details: CollegeDetails;
      referred_candidates: string[];
}

const candidateSchema = new Schema<Candidate>({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      phone_number: { type: Number, required: true, unique: true },
      referral_id: { type: String, required: true, unique: true },
      gender: {
            type: String,
            enum: ['MALE', 'FEMALE', 'OTHERS'],
            required: true,
      },
      college_details: { type: Object, required: true },
      referred_candidates: [{ type: Array<String> }],
});

candidateSchema.pre('save', async function () {
      this.password = await bcrypt.hash(this.password, 12);
});

const Candidate = model<Candidate>('Candidate', candidateSchema);

export default Candidate;
