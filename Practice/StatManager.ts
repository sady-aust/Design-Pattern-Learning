import {IStat} from "./IStat";

export abstract class StatManager<T> {
    //Factory Method
    abstract makeStat(): IStat<T>;

    calculateStat(){
        let stat = this.makeStat();
        return stat.getStat();
    }


}
