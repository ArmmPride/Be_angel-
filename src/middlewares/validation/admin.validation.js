import { AdminSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class AdminValidation {
  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AdminSchema.addSchema, next);
  }

  static validateDelArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AdminSchema.deleteSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AdminSchema.editSchema, next);
  }

  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AdminSchema.getSchema, next);
  }

  static validateEditDreamsArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AdminSchema.editSchema, next);
  }

}

export default AdminValidation;
