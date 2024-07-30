import express from "express";
import { signup, login, logout } from "../controllers/authController.js";


const router = express.Router();

router.post("/signup", signup)

router.post("/login", login);
router.post("/logout", logout);


export default router;

//mongodb+srv://shonatomar042:OYE5MMkbSsdErEth@cluster0.gekjfsm.mongodb.net/

//mongodb+srv://shonatomar042:vDFl6DP6fb5sjNH8@cluster0.cti7ny7.mongodb.net/