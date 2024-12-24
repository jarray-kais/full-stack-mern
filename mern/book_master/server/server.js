import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import dbconnect from "./config/mongoose.config.js";
import router from "./routes/book.routes.js";
import {
  normalizeErrors,
  notFoundHandler,
  globalErrorHandler,
} from "./util/ErrorExtractor.js";
dotenv.config();
const app = express();
app.use(express.json() , helmet() , cors());

dbconnect();


app.use("/api", router);

/* const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
} */


app.use(normalizeErrors);
app.use(notFoundHandler);
app.use(globalErrorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
