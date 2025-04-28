import 'dotenv/config';

import express from "express";
import mongoose from "mongoose";
import userRoute from './Routes/userRoute';

const app = express()
const port = 3001;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI || '').then(()=>console.log("Mongo connected")).catch(err=>console.log("Mongo connection failed: " + err));

app.use('/user', userRoute);

app.listen(port, ()=>{console.log(`server running: http://localhost:${port}`)});