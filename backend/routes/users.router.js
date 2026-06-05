import express from "express";
import { contact, getToken, getUser, loginUser, logoutUser, registerUser } from "../controllers/users.controller.js";

const UsersRouter = express.Router();

UsersRouter.post("/register", registerUser);
UsersRouter.post('/login', loginUser)
UsersRouter.post('/logout', logoutUser)
UsersRouter.post('/get-token', getToken)
UsersRouter.get('/get', getUser)
UsersRouter.post("/contact", contact);

export default UsersRouter;
