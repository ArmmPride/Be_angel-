import { OurActionModel } from '../models';

export default class OurActionService{
    static addAction(data){
        return OurActionModel.addAction(data);
    }     
    static getAction(year){
        return OurActionModel.getAction(year);
    }
    static editAction(id,info){
        return OurActionModel.editAction(id,info);
    }
         
}