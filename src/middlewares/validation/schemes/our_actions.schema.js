// NPM Modules
import Joi from 'joi';

const ActionSchema = {
  addSchema: {
    body: Joi.object({
      description: Joi.string(),
      photos: Joi.array().items(Joi.string()).required(),
      year: Joi.string().required(),
    }),
  },

  getSchema: {
    params: Joi.object({
      year: Joi.string().required(),
    }),
  },
  
  editSchema: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
    body: Joi.object({
      description: Joi.string(),
      photos: Joi.array().items(Joi.string()),
      year: Joi.string(),
    }),
  }
 
};

export default ActionSchema;
