import { IDoorFactory } from './IDoorFacotry';
import { IDoor } from './IDoor';
import { IDoorFittingExpert } from './IDoorFittingExpert';
import { IronDoor } from './IronDoor';
import { Welder } from './Welder';

export class IronDoorFactory implements IDoorFactory{
    makeDoor(): IDoor {
       return new IronDoor();
    }
    makeFittingExpert(): IDoorFittingExpert {
        return new Welder();
    }
    
}