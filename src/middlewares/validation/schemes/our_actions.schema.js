// NPM Modules
import Joi from 'joi';

const ActionSchema = {
  addSchema: {
    body: Joi.object({
      description: Joi.string(),
      photos: Joi.array().items(Joi.string()).required(),
      year: Joi.number().integer().required(),
    }),
  },

  getSchema: {
    params: Joi.object({
      year: Joi.number().integer().required(),
    }),
  },
  
  editSchema: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
    body: Joi.object({
      description: Joi.string(),
      photos: Joi.array().items(Joi.string()),
      year: Joi.number().integer(),
    }),
  }
 
};

export default ActionSchema;
