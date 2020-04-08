import { HiringManager } from './HiringManager';
import { IInterviewer } from './IInterviewer';
import { CommunnityExecutive } from './CommunityExecutive';

export class MarketingManager extends HiringManager{

    makeInterviewer(): IInterviewer {
        return new CommunnityExecutive()
    }

}