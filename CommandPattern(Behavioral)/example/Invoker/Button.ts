import { Command } from "../Command/Command";

export class Button {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  click(): void {
    console.log("Button clicked");
    this.command.execute();
  }
}
