// NPM Modules
import Joi from 'joi';

const AdminSchema = {
    addSchema: {
        body: Joi.object({
            full_name: Joi.string().required(),
            letter: Joi.string().required(),
            birth: Joi.string().required(),
            image: Joi.string().required(),
            is_active: Joi.boolean().default(false),
            age: Joi.number().integer().positive().required()
        })
        
    },

    deleteSchema: {
        params  : Joi.object({
          id: Joi.number().integer()
        }),
    },
    editSchema: {
        params  : Joi.object({
          id: Joi.number().integer()
        }),
    },
    
    getSchema: {
        params  : Joi.object({
          id: Joi.number().integer()
        }),
    },

    editDreamsSchema: {
      params  : Joi.object({
        id: Joi.number().integer()
      }),
      body: Joi.object({
        full_name: Joi.string(),
            letter: Joi.string(),
            birth: Joi.string(),
            image: Joi.string(),
            is_active: Joi.boolean().default(false),
            age: Joi.number().integer().positive()
      })
  },
  
};

export default AdminSchema;
