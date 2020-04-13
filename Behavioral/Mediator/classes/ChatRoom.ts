import {ChatRoomMediator} from "../inerfaces/ChatRoomMediator";
import {User} from "./User";

export class ChatRoom implements ChatRoomMediator {
    showMessage(user: User, message: string) {
        let time = new Date().toLocaleTimeString();
        let sender = user.getName();

        console.log(`${time} [${sender}]: ${message}`)
    }

}
