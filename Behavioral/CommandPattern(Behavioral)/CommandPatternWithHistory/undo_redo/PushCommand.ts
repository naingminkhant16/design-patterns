import { Command } from "./Command";

export class PushCommand implements Command {
  constructor(private stack: number[], private i: number) {}

  execute(): void {
    this.stack.push(this.i);
  }

  unExecute(): void {
    this.stack.pop();
  }
}
