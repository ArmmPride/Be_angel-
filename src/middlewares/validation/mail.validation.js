import { MailSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class MailValidation {
  static validateMailArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, MailSchema.mailSchema, next);
  }
}

export default MailValidation;