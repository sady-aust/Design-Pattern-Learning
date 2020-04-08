import { IInterviewer } from './IInterviewer';

export abstract class HiringManager {

    //Factory Method
    abstract  makeInterviewer():IInterviewer;

    takeInterview(){
        let interviewer = this.makeInterviewer();
        interviewer.askQuestion();
    }

}