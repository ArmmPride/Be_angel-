import { Model } from "objection";
import knex from 'knex';
import fs from "fs";
import knexConfigs from '../../knex.configs';
import path from "path";
import {ErrorsUtil} from '../utils'
const { InputValidationError, ResourceNotFoundError } = ErrorsUtil;

const pg = knex(knexConfigs.development);

class AdminModel extends Model {
  static get idColumn() {
    return "id";
  }

  static get tableName() {
    return "dreams";
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

  static addDreams(dreams) {
    return AdminModel.query().insert(dreams).returning("*");
  }

  static async deleteDreams(id) {
    try {
      const result = await AdminModel.query().findById(id);

      if (result && result.image) {
        const imagePath = result.image.split('/');
        const filePath = path?.join(__dirname, '..', '..', 'upload', imagePath[4]);

        await new Promise((resolve, reject) => {
          fs.unlink(filePath, (err) => {
            if (err) {
              reject(new ResourceNotFoundError(`Error deleting file or image: no such file or directory`));
            } else {
              console.log(`File ${filePath} has been deleted.`);
              resolve();
            }
          });
        });
      }
      return AdminModel.query().deleteById(id).returning("*");
    } catch (error) {
      console.error(`Error deleting dreams: ${error.message}`);
      throw new ResourceNotFoundError (error.message);
    }
  }

  static async getRandomDream() {
    try {
      const maxId = await AdminModel.query().max('id').first();

      if (!maxId || maxId.max === null) {
        throw new ResourceNotFoundError('No dreams in the database');
      }

      const numberOfDreamsToFetch = 10;
      const inactiveDreams = [];
      const randomIds = new Set();

      while (inactiveDreams.length < numberOfDreamsToFetch && randomIds.size < maxId.max) {
        let randomId;
        do {
          randomId = Math.floor(Math.random() * maxId.max) + 1;
        } while (randomIds.has(randomId));

        randomIds.add(randomId);

        const dream = await AdminModel.query().select('*').where('id', '=', randomId).where('is_active', '=', false).first();

        if (dream) {
          inactiveDreams.push(dream);
        }
      }

      if (inactiveDreams.length < numberOfDreamsToFetch) {
        const remainingDreams = await AdminModel.query().select('*').where('is_active', '=', false).whereNotIn('id', Array.from(randomIds));
        inactiveDreams.push(...remainingDreams);
      }

      return inactiveDreams;
    } catch (error) {
      console.error('Error:', error.message);
      throw new ResourceNotFoundError (error.message);
    }
  }

  static async getAllDreams() {
    return AdminModel.query().select('*').orderBy('id')
  }

  static async getActiveDreams() {
    return AdminModel.query().select('*').where('is_active', '=', true)
  }

  static async getInActiveDreams() {
    return AdminModel.query().select('*').where('is_active', '=', false)
  }

  static async editDream(id,data) {
    return AdminModel.query().select('*').where('id', '=', id).update(data).returning("*")
  }
  

}

export default AdminModel;
