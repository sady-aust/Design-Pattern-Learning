import { WoodenDoor } from './WoodenDoor';
export class DoorFactory {

    public static makeDoor (width:number,height:number) {
        return new WoodenDoor(width,height)
    }
}