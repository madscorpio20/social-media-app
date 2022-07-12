import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'

const app = express();


// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

const PORT =  5000;

// connect to DB
mongoose.connect(process.env.MONGO_DB , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> app.listen(PORT , ()=>console.log(`server is running on port ${PORT}`)))
.catch((error) => console.log(error));

// usage of routes
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)