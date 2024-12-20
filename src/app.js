import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
//middlewares
app.use(express.json({limit: "16kb"})); // alowwing json data to be sent to the server
app.use(express.urlencoded({extended: true, limit:"16kb"})); // alowwing form to take data from client url
app.use(cookieParser()); // alowwing cookie to be sent to the server
app.use(express.static("public")); // Serving static files from the 'public' directory
//routes

import userRouter from "./routes/user.routes.js"; // importing userRouter from user.routes.js 

app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register   here we are redirecting to userRouter 

export {app}