import { BubbleSort } from "./concrete_strategies/BubbleSort";
import { MergeSort } from "./concrete_strategies/MergeSort";
import { QuickSort } from "./concrete_strategies/QuickSort";
import { NUmberContext } from "./context/NumberContext";
import { SortStrategy } from "./strategy/SortStrategy";

const numbers = [64, 34, 25, 12, 22, 11, 90];

// Bubble sort
const numberContext = new NUmberContext(numbers, new BubbleSort());
numberContext.sort();
numberContext.display();

// Quick sort
numberContext.setSortStrategy(new QuickSort());
numberContext.sort();
numberContext.display();

// Merge sort
numberContext.setSortStrategy(new MergeSort());
numberContext.sort();
numberContext.display();
