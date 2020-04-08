import { IDoorFittingExpert } from "./IDoorFittingExpert";


export class Welder implements IDoorFittingExpert{
    
    getDescription() {
        console.log('I Can only fit iron door');
        
    }

}