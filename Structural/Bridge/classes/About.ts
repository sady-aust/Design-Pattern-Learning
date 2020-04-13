import { WebPage } from './WebPage';
import { Theme } from '../interfaces/Theme';

export class About extends WebPage{
    constructor(theme:Theme){
        super(theme)
    }
    getContent(): string {
        return `About Page in ${super.getTheme().getColor()}`;
    }

    
}