import { IDoor } from './IDoor';

export class WoodenDoor implements IDoor {
    protected width: number;
    protected height: number;

    constructor(width:number,height:number){
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }
    getHeight(): number {
        return this.height;
    }

}