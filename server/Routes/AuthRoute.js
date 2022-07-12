import express from "express";
import { loginUser, registerUser } from "../Controllers/AuthController.js";

const router = express.Router()
console.log('route')

router.post('/register', registerUser)
router.post('/login', loginUser)
export default router;