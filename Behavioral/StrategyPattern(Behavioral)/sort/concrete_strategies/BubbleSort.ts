import { SortStrategy } from "../strategy/SortStrategy";

export class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    let swapped: boolean;

    for (let i = 0; i < data.length - 1; i++) {
      swapped = false;

      for (let j = 0; j < data.length - 1 - i; j++) {
        if (data[j] > data[j + 1]) {
          // Swap items
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
          swapped = true;
        }
      }

      if (!swapped) break;
    }

    return data;
  }
}
