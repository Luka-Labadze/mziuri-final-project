import express from "express";
import {
  contact,
  forgotPasswordUser,
  getToken,
  getUser,
  loginUser,
  logoutUser,
  registerUser,
  resetPasswordUser,
} from "../controllers/users.controller.js";

const UsersRouter = express.Router();

UsersRouter.post("/register", registerUser);
UsersRouter.post("/login", loginUser);
UsersRouter.post("/logout", logoutUser);
UsersRouter.post("/get-token", getToken);
UsersRouter.get("/get", getUser);
UsersRouter.post("/contact", contact);
UsersRouter.put("/forgot-password", forgotPasswordUser);
UsersRouter.put("/reset-password", resetPasswordUser);

export default UsersRouter;
