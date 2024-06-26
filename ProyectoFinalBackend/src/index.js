import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.routes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/",router);

app.listen(process.env.PORT);
console.log(`Servidor activo en: http://localhost:${process.env.PORT}`);
