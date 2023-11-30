import { BenevolentService } from "../services";
import { SuccessHandlerUtil } from "../utils";

import config from "../config/variables.config";

const { HOST_OF_SERVER } = config;


export default class BenevolentController {
  static async buyGift(req, res, next) {
    try {
      const info = req.body
      const benevolent = await BenevolentService.buyGift(info);
      SuccessHandlerUtil.handleList(res, res, benevolent);
    } catch (error) {
      next(error);
    }
  }

  static async takeLetter(req, res, next) {
    try {
      const info = req.body
      const benevolent = await BenevolentService.takeLetter(info);
      SuccessHandlerUtil.handleList(res, res, benevolent);
    } catch (error) {
      next(error);
    }
  }

  static async getBenevolent(req, res, next) {
    try {
      const { child_id } = req.params
      const benevolent = await BenevolentService.getBenevolent(child_id);
      SuccessHandlerUtil.handleList(res, res, benevolent);
    } catch (error) {
      next(error);
    }
  }

  static async sendMail(req, res, next) {
    try {
      const {  email } = req.body;
      const mailResponse = await BenevolentService.sendMail( email);
      SuccessHandlerUtil.handleList(res, next, mailResponse);
    } catch (error) {
      next(error);
    }
  }
}