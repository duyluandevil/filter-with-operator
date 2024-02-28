import { FieldFilter } from "../../utils";
import { UsersDao } from "../infrastructures/daos/users.dao";

export class GetOneByFilter{

        private _dao: UsersDao;
        constructor(){
               this._dao = new UsersDao();
        }

        async processing(filter?: any){
                return this._dao.getUsers(filter);
        }

}