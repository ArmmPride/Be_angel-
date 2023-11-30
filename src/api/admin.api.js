import express from "express";

import { AdminController } from "../controller";
import { ImageUploadMiddleware } from "../middlewares/image-upload.middleware";
import {AdminValidationMiddleware} from "../middlewares/validation/index"

const router = express.Router();

router.post("/addDreams",
AdminValidationMiddleware.validateAddArgs,
 AdminController.addDreams);

router.delete("/deleteDreams/:id", 
AdminValidationMiddleware.validateDelArgs,
 AdminController.deleteDreams);
 
 router.put("/editDreams/:id",AdminValidationMiddleware.validateEditDreamsArgs, 
 AdminController.editDream);
 
 router.get("/getAllDreams", AdminController.getAllDreams);

router.get("/getActiveDreams", AdminController.getActiveDreams);

router.get("/getInActiveDreams", AdminController.getInActiveDreams);

router.get("/getRandomInactiveDreams", AdminController.getRandomInactiveDreams);

router.post(
    "/addPicture",
    // AuthMiddleware.authenticateFor(['admin']),
    ImageUploadMiddleware.upload(),
    AdminController.addPicture
  );

export default router;
