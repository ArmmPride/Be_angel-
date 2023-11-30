// NPM modules
import Joi from 'joi';

const MailSchema = {
  mailSchema: {
    body: Joi.object({
      email: Joi.string().email().required(),
    })
  }
};

export default MailSchema;