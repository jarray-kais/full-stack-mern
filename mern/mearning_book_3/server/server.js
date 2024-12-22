import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbconnect from "./config/mongoose.config.js";
import router from "./routes/book.routes.js";
import {
    normalizeErrors,
    notFoundHandler,
    globalErrorHandler,
} from "./util/ErrorExtractor.js";
dotenv.config();
const app = express();
app.use(express.json());
dbconnect();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api", router);

app.use(normalizeErrors);
app.use(notFoundHandler);
app.use(globalErrorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
