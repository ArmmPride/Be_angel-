import { OurActionService } from "../services";
import { SuccessHandlerUtil } from "../utils";

import config from "../config/variables.config";

const { HOST_OF_SERVER } = config;


export default class OurActionController {
    static async addAction(req, res, next) {
        try {
          const info = req.body
          const action = await OurActionService.addAction(info);
          SuccessHandlerUtil.handleList(res, res, action);
        } catch (error) {
          next(error);
        }
      }

      static async getAction(req, res, next) {
        try {
          const { year } = req.params
          const action = await OurActionService.getAction(year);
          SuccessHandlerUtil.handleList(res, res, action);
        } catch (error) {
          next(error);
        }
      }

      static async editAction(req, res, next) {
        try {
          const { id } = req.params;
          const info = req.body;
          const action = await OurActionService.editAction(id,info);
          SuccessHandlerUtil.handleList(res, res, action);
        } catch (error) {
          next(error);
        }
      }
      
}