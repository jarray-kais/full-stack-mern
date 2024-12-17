import express from 'express';
import dotenv from 'dotenv';
import dbconnect from './config/mongoose.config.js';
import router from './routes/book.routes.js';
dotenv.config()
const app = express();
app.use(express.json());
dbconnect()


app.use('/api', router);



const PORT = process.env.PORT
app.listen(PORT , ()=> console.log(`listening on port : ${PORT}`))