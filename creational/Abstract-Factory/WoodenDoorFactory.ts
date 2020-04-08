
import { IDoorFactory } from './IDoorFacotry';
import { IDoor } from './IDoor';
import { IDoorFittingExpert } from './IDoorFittingExpert';
import { WoodenDoor } from './WoodenDoor';
import { Carpenter } from './Carpenter';

export class WoodenDoorFacotry implements IDoorFactory{
    makeDoor(): IDoor {
       return new WoodenDoor();
    }
    makeFittingExpert(): IDoorFittingExpert {
       return new Carpenter();
    }

    

}