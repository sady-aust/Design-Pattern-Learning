import {UserResponseStat} from "./UserResponseStat";
import {IStat} from "./IStat";
import {INotificationResponses} from "./models/INotificationResponse";
import {StatManager} from "./StatManager";

export  class UserResponseStatManager extends StatManager<INotificationResponses>{

    makeStat(): IStat<INotificationResponses> {
       return new UserResponseStat(null)
    }

}
