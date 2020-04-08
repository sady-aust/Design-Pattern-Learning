import { IInterviewer } from './IInterviewer';

export class Developer implements IInterviewer{

    askQuestion() {
       console.log('Asking about design patterns');
       
    }

}