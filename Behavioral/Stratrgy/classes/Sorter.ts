import {SortStrategy} from "../interfaces/SortStrategy";

export class Sorter {
    constructor(private sorter: SortStrategy) {
    }

    sort(dataset: number[]) {
        return this.sorter.sort(dataset);
    }
}
