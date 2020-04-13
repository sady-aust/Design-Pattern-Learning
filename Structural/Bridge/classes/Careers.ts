import { WebPage } from './WebPage';
import { Theme } from '../interfaces/Theme';


export class Careers  extends WebPage {
    constructor(theme:Theme){
        super(theme);
    }

    getContent(): string {
        return `Carrers Page in ${super.getTheme().getColor()}`;
    }
    

}