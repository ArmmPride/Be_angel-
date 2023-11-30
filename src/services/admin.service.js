import { AdminModel } from '../models';

export default class AdminService{
    static addDreams(dreams){
        return AdminModel.addDreams(dreams);
    }
    static deleteDreams(id){
        return AdminModel.deleteDreams(id);
    }
    static getAllDreams(){
        return AdminModel.getAllDreams();
    }
    static getRandomDream(){
        return AdminModel.getRandomDream();
    }
    static getActiveDreams(){
        return AdminModel.getActiveDreams();
    }
    static getInActiveDreams(){
        return AdminModel.getInActiveDreams();
    }
    static editDream(id,data){
        return AdminModel.editDream(id,data);
    }
    
}