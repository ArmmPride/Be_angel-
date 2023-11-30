import { BenevolentSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class BenevolentValidationMiddleware {
  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, BenevolentSchema.addSchema, next);
  }

  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, BenevolentSchema.getSchema, next);
  }

}

export default BenevolentValidationMiddleware;
