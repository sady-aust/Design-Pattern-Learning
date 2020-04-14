import {SortStrategy} from "../interfaces/SortStrategy";

export class BubbleSortStrategy implements SortStrategy {
    sort(dataset: number[]) {
        console.log('Sorting using Bubble sort');
        return dataset;
    }

}
