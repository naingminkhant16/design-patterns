import { SortStrategy } from "../strategy/SortStrategy";

export class NUmberContext {
  private sortStragegy: SortStrategy;
  private numbers: number[];

  constructor(numbers: number[], sortStrategy: SortStrategy) {
    this.numbers = numbers;
    this.sortStragegy = sortStrategy;
  }

  setSortStrategy(sortStrategy: SortStrategy): void {
    this.sortStragegy = sortStrategy;
  }

  sort(): number[] {
    return this.sortStragegy.sort(this.numbers);
  }

  display(): void {
    console.log(this.numbers);
  }
}
