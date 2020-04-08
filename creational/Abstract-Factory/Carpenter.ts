import { IDoorFittingExpert } from './IDoorFittingExpert';

export class Carpenter implements IDoorFittingExpert {
    getDescription() {
       console.log('I can only fit wooden door');
       
    }
    
}