import {User} from "../classes/User";

export interface ChatRoomMediator {
    showMessage(user: User, message: string);
}
