import {ChatRoom} from "./classes/ChatRoom";
import {User} from "./classes/User";

let mediator = new ChatRoom();

let sadi = new User('Sadi',mediator);
let toufiq = new User('toufiq',mediator);

sadi.send('Hi There!');
toufiq.send('Hey!')
