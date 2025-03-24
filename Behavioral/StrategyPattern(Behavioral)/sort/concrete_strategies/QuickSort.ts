import { SortStrategy } from "../strategy/SortStrategy";

export class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    if (data.length <= 1) {
      return data;
    }

    const pivot = data[data.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < data.length - 1; i++) {
      if (data[i] < pivot) {
        left.push(data[i]);
      } else {
        right.push(data[i]);
      }
    }

    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}
