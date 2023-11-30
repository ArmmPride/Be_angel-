import express from "express";
import { OurActionController } from "../controller";
import {ActionValidationMiddleware} from "../middlewares/validation/index"

const router = express.Router();

router.post("/addAction", 
ActionValidationMiddleware.validateAddArgs,
OurActionController.addAction);

router.put("/editAction/:id", ActionValidationMiddleware.validateEditArgs,
OurActionController.editAction);

router.get("/getAction/:year", ActionValidationMiddleware.validateGetArgs,
OurActionController.getAction);

export default router