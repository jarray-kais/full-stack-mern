import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbconnect from './config/mongoose.config.js';

dotenv.config()

const app = express()
app.use(express.json(), cors());

dbconnect()


const PORT = process.env.PORT
app.listen(PORT , ()=>console.log(`listening on port : ${PORT}`))