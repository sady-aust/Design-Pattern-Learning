
import { IDoorFittingExpert } from './IDoorFittingExpert';
import { IDoor } from './IDoor';
export interface IDoorFactory {

    makeDoor(): IDoor;
    makeFittingExpert():IDoorFittingExpert;
}