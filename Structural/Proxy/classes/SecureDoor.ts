import {Door} from "../intefaces/Door";

export class SecureDoor {
    constructor(private door: Door) {
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log("Big no! it ain't possible")
        }
    }
    close(){
        this.door.close();
    }

    private authenticate(password: any) {
        return password === 'sadi';
    }
}
