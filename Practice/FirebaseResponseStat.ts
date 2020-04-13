import {IStat} from "./IStat";
import {IFirebaseResponse} from "./models/IFirebaseResponse";
import {INotificationStat} from "./INotificationStat";

export class FirebaseResponseStat implements IStat<INotificationStat>{
    constructor(firebaseResponses:IFirebaseResponse[]) {
    }

    getStat(): INotificationStat[] {
        return [{
            fb_ids:[],
            n_id:"2",
            failure:2,
            success:2
        }];
    }


}
