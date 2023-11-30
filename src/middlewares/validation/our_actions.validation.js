import { ActionSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class BenevolentValidationMiddleware {
  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, ActionSchema.addSchema, next);
  }

  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, ActionSchema.getSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, ActionSchema.editSchema, next);
  }
}

export default BenevolentValidationMiddleware;
