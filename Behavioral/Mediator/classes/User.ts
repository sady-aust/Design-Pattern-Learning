import {ChatRoomMediator} from "../inerfaces/ChatRoomMediator";

export class User  {
    constructor(private name: string, private chatRoomMediator: ChatRoomMediator) {}

    getName(){
        return this.name;
    }
    send(message:string){
        this.chatRoomMediator.showMessage(this,message)
    }
}

