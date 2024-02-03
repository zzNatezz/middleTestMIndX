import { asyncCatch } from "../utils/asyncCatch.js";
import express from "express";
import { validateCreateExp } from "../validate/expValidate.js";
import { createExp } from "../Service/expService.js";


const expController = express.Router();
expController.post("/", asyncCatch(validateCreateExp), asyncCatch(createExp));

export { expController };
