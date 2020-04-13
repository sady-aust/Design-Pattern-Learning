
import {UserResponseStatManager} from "./UserResponseStatManager";
import {FirebaseResponseStatManager} from "./FirebaseResponseStatManager";

let userResponseStatManager = new UserResponseStatManager();
console.log(userResponseStatManager.calculateStat());


let firebaseResponseStatManager = new FirebaseResponseStatManager();
console.log(firebaseResponseStatManager.calculateStat());
