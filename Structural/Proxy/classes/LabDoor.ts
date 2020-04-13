import {Door} from "../intefaces/Door";

export class LabDoor implements Door{
    close() {
        console.log('Closing Lab Door')
    }

    open() {
        console.log('Opening Lab Door')
    }

}
