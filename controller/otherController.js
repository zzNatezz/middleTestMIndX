import { createOther } from "../Service/otherService.js";
import { asyncCatch } from "../utils/asyncCatch.js";
import express from "express";



const otherController = express.Router();
otherController.post("/", asyncCatch(createOther));

export { otherController };
