import AuthService from './auth.service';
import { SuccessHandlerUtil } from '../utils';

export default class AuthController {
  static async login(req, res, next) {
    try {
      const { adminname, password } = req.body;
      console.log(req.body,"req.body login admin");

      const loginResult = await AuthService.login(adminname, password);
console.log(
  loginResult,"log"
);
      SuccessHandlerUtil.handleAdd(res, next, loginResult);
    } catch (error) {
      next(error);
    }
  }

  static async refresh(req, res, next) {
    try {
      const { refreshToken } = req.body;
      const refreshResult = await AuthService.refresh(refreshToken);
      SuccessHandlerUtil.handleAdd(res, next, refreshResult);
    } catch (error) {
      next(error);
    }
  }
}
