import { Model } from "objection";
import knex from 'knex';
import { ErrorsUtil } from '../utils'

const { InputValidationError, ResourceNotFoundError } = ErrorsUtil;

import knexConfigs from '../../knex.configs';

const pg = knex(knexConfigs.development);

class OurActionModel extends Model {
    static get idColumn() {
        return "id";
    }

    static get tableName() {
        return "our_actions";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [],
            properties: {
                id: { type: "integer" },
            },
        };
    }

    $beforeInsert() {
        const date = new Date();
        this.created_at = date;
    }
    $beforeUpdate() {
        const date = new Date();
        this.updated_at = date;
    }

    static  addAction(data) {
      return OurActionModel.query().insert(data).returning("*");
  }

    static getAction(year) {
        return OurActionModel.query().select('*').where('year', '=', year).returning('*');
    }

    static editAction(id,info) {
        return OurActionModel.query().select('*').where('id', '=', id).update(info).returning('*');
    }
    
}

export default OurActionModel;
