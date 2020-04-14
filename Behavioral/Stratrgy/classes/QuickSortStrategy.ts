import {SortStrategy} from "../interfaces/SortStrategy";

export class QuickSortStrategy implements SortStrategy {
    sort(dataset: number[]) {
        console.log('Sorting using Quick Sort')
        return dataset;
    }

}
