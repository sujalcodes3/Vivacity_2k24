import express, { Express } from 'express';
import cors from 'cors';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRouter from './routes/authroute';
import userRouter from './routes/userRoute';
import eventrouter from './routes/eventroute';

import { RouteProtector } from './middlewares/auth.middleware';

const app: Express = express();

dotenv.config({
      path: './.env',
});

app.use(express.urlencoded({ extended: true }));
/*app.use(
      cors({
            //origin: {'http://localhost:5173',}
	origin : "https://vivacity-2k24-o8s3.vercel.app/",
	optionsSuccessStatus : 200
      }),
);*/

app.use(cors());

app.use(express.json());
app.use(cookieParser());

mongoose.set('strictQuery', false);

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/register',eventrouter);
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
