// NPM Modules
import Joi from 'joi';

const BuyOnlineSchema = {
    addSchema: {
        body: Joi.object({
            name: Joi.string().required(),
            surName: Joi.string().required(),
            phoneNumber: Joi.string()
        .regex(/^\+374\d{8}$/)
        .required()
        .messages({
          'string.pattern.base': '"Invalid phone number format. Example: +374XXXXXXXX"',
        }),
        mail: Joi.string().email().required(),
        child_id: Joi.number().integer().required(),
        })
        
    },
    getSchema: {
        params  : Joi.object({
          child_id: Joi.number().integer()
        }),
    }
};

export default BuyOnlineSchema;
