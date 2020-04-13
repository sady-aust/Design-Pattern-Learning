import { IStat } from './IStat';
import { IUserResponse } from './models/IUserResponse';
import {INotificationResponses} from "./models/INotificationResponse";


export class UserResponseStat implements IStat<INotificationResponses>{

    constructor(private userResponses:IUserResponse){}

    getStat(): INotificationResponses[] {

        return  [{
            n_id:"1",
            clicked:[{}],
            swiped: [{}],
        }]

    }

}
