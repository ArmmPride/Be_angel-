import { AdminService } from "../services";
import { SuccessHandlerUtil } from "../utils";

import config from "../config/variables.config";

const { HOST_OF_SERVER } = config;


export default class AdminController {
  static async addDreams(req, res, next) {
    try {
      const dreams = req.body;
      const users = await AdminService.addDreams(dreams);

      SuccessHandlerUtil.handleList(res, res, users);
    } catch (error) {
      next(error);
    }
  }

  static async deleteDreams(req, res, next) {
    try {
      const { id } = req.params;
      const users = await AdminService.deleteDreams(id);

      SuccessHandlerUtil.handleList(res, res, users);
    } catch (error) {
      next(error);
    }
  }

  static async editDream(req, res, next) {
    try {
      const { id } = req.params
      const data = req.body;
      const users = await AdminService.editDream(id,data);
      SuccessHandlerUtil.handleList(res, res, users);
    } catch (error) {
      next(error);
    }
  }

  static async getRandomInactiveDreams(req, res, next) {
    try {
      const users = await AdminService.getRandomDream();
      SuccessHandlerUtil.handleList(res, res, users);
    } catch (error) {
      next(error);
    }
  }

  static async getAllDreams(req, res, next) {
    try {
      const users = await AdminService.getAllDreams();

      SuccessHandlerUtil.handleList(res, res, users);
    } catch (error) {
      next(error);
    }
  }

  static async getActiveDreams(req, res, next) {
    try {
      const users = await AdminService.getActiveDreams();

      SuccessHandlerUtil.handleList(res, res, users);
    } catch (error) {
      next(error);
    }
  }

  static async getInActiveDreams(req, res, next) {
    try {
      const users = await AdminService.getInActiveDreams();

      SuccessHandlerUtil.handleList(res, res, users);
    } catch (error) {
      next(error);
    }
  }

  static async addPicture(req, res, next) {
    try {
      const { file } = req;
      const { originalname, filename, path } = file;
      const dirname = `${HOST_OF_SERVER}/${path}`;
      SuccessHandlerUtil.handleAdd(res, next, {
        originalname,
        filename,
        dirname,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
}
