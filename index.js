import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import mongoose from 'mongoose';
import { userController } from './controller/userController.js';
import { projectController } from './controller/projectController.js';
import { expController } from './controller/expController.js';
import { otherController } from './controller/otherController.js';

dotenv.config();
const sv = express();
sv.use(express.json());
sv.use(morgan("combined"));
sv.use("/index", (req, res) => res.status(200).send("Hello mindx!"));
sv.use('/users', userController)
sv.use('/projects', projectController)
sv.use('/exp', expController)
sv.use('/others', otherController)

mongoose.connect(process.env.MONGODB).then(()=>sv.listen(process.env.PORT , ()=> console.log(`server port ${process.env.PORT} is running !!!`)))