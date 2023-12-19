import express, { Express } from 'express';

import bodyParser from 'body-parser';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';

import authRouter from './routes/authroute';
import userRouter from './routes/userRoute';
import { RouteProtector } from './middlewares/auth.middleware';

const app: Express = express();

dotenv.config();

mongoose.set('strictQuery', false);

app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/user',userRouter);
app.use('/', RouteProtector);

async function run() {
      const mongouri: string | undefined = process.env.MONGO_URI;
      await connect(`${mongouri}`);
      console.log('DB active');
      app.listen(3000, () => {
            console.log('Server active on port|3000');
      });
}

run().catch(err => console.log(err));
