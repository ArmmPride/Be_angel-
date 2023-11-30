import { Model } from "objection";
import knex from 'knex';
import { ErrorsUtil } from '../utils'

const { InputValidationError, ResourceNotFoundError } = ErrorsUtil;

import knexConfigs from '../../knex.configs';

const pg = knex(knexConfigs.development);

class BenevolentModel extends Model {
  static get idColumn() {
    return "id";
  }

  static get tableName() {
    return "benevolents";
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

  static async buyGift(data) {
    const result = await BenevolentModel.query().findOne({ child_id: data.child_id })
    if (!result) {
      const updatedData = await pg('dreams').update({ is_active: true }).where('id', '=', data.child_id);
      return BenevolentModel.query().insert(data).returning("*");

    }
    throw new InputValidationError('The dream has already been taken');
  }

  static async takeLetter(data) {
    const result = await BenevolentModel.query().findOne({ child_id: data.child_id })
    if (!result) {
      const updatedData = await pg('dreams').update({ is_active: true }).where('id', '=', data.child_id);
      return BenevolentModel.query().insert(data).returning("*");
    }
    throw new InputValidationError('The dream has already been taken');
  }

  static getBenevolent(child_id) {
    return BenevolentModel.query().select('*').where('child_id', '=', child_id).returning('*');
  }


}

export default BenevolentModel;