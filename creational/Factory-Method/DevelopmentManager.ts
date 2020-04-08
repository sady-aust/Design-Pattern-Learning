import { HiringManager } from './HiringManager';
import { IInterviewer } from './IInterviewer';
import { Developer } from './Developer';

export class DevelopmentManager extends HiringManager{

    makeInterviewer(): IInterviewer {
        return new Developer();
    }
    
}