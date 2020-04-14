import {Sorter} from "./classes/Sorter";
import {BubbleSortStrategy} from "./classes/BubbleSortStrategy";
import {QuickSortStrategy} from "./classes/QuickSortStrategy";

let dataset = [5, 6, 8, 9];

let sorter = new Sorter(new BubbleSortStrategy());
sorter.sort(dataset);

sorter = new Sorter(new QuickSortStrategy());
sorter.sort(dataset);
