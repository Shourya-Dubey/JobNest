import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import connectDB from "./utils/db.js";

//routes
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
import jobRoute from './routes/job.route.js';
import applicationRoute from './routes/application.route.js';
import path from "path";

dotenv.config();

//connect DB
connectDB();
const PORT = process.env.PORT || 8081;
const app = express();

const _dirname = path.resolve();


//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
  origin: "https://jobportal-backend-1uq5.onrender.com",
  credentials: true,
};
app.use(cors(corsOptions));

//api's routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")))
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})


app.listen(PORT, ()=>{
  console.log(`Server running at PORT ${PORT}`);
})