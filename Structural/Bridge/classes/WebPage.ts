import { Theme } from "../interfaces/Theme";

export abstract class WebPage {
    private theme:Theme

    constructor(theme:Theme){
        this.theme = theme;
    }
    public abstract getContent():string

    public getTheme(){
        return this.theme;
    }
}