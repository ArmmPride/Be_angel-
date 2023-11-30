import {Model} from 'objection';

import bCrypt from 'bcryptjs';
import { ErrorsUtil, CryptoUtil } from '../utils';

import knexConfigs from '../../knex.configs';
class UsersModel extends Model{
    static get idColumn() {return 'id';}

    static get tableName() {return 'admins';}

    static get jsonSchema() {
        return {
            type:'object',
            required: [],
            properties: {
                id: {type:'integer'},
              
            }
        }
    }


$beforeInsert(){
    const date = new Date();
    this.created_at = date
}
$beforeUpdate(){
    const date = new Date();
    this.updated_at = date
}
static findByAdminName(adminname) {
    return UsersModel.query().findOne({ adminname });
  }

static addDreams(dreams){
    return UsersModel.query().insert(dreams).returning('*');
}
}
export default UsersModel;