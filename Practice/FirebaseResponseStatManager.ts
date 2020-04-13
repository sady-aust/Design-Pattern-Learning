import {FirebaseResponseStat} from "./FirebaseResponseStat";
import {IStat} from "./IStat";
import {INotificationStat} from "./INotificationStat";
import {StatManager} from "./StatManager";



export class FirebaseResponseStatManager extends StatManager<INotificationStat>{
    makeStat(): IStat<INotificationStat> {
        return new FirebaseResponseStat(null);
    }

}
