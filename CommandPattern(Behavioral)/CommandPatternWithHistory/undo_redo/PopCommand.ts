import { Command } from "./Command";

export class PopCommand implements Command {
  private i: number | undefined;
  constructor(private stack: number[]) {}

  execute(): void {
    this.i = this.stack.pop();
  }

  unExecute(): void {
    if (this.i !== undefined) {
      this.stack.push(this.i);
    }
  }
}
