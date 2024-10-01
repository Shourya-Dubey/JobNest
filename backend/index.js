import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config({});
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http//localhost:5173',
    Credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8081;

//api
app.use("/api/v1/user", userRoute);


app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running at PORT ${PORT}`);
})