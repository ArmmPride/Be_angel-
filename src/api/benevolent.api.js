import express from "express";
import { BenevolentController } from "../controller";
import {BenevolentValidationMiddleware, MailValidationMiddleware} from "../middlewares/validation/index"

const router = express.Router();

router.post("/buyGift", 
BenevolentValidationMiddleware.validateAddArgs,
BenevolentController.buyGift);

router.post("/takeLetter", BenevolentValidationMiddleware.validateAddArgs,
BenevolentController.takeLetter);

router.get("/getBenevolent/:child_id",BenevolentValidationMiddleware.validateGetArgs,
BenevolentController.getBenevolent);

router.post(
    "/sendMail",
    MailValidationMiddleware.validateMailArgs,
    BenevolentController.sendMail
  ); 

export default router