import { Command } from "../Command/Command";

export class Shortcut {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  press(): void {
    console.log("Shortcut pressed");
    this.command.execute();
  }
}
