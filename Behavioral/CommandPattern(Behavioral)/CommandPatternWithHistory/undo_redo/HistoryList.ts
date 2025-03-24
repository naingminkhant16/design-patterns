import { Command } from "./Command";

export class HistoryList {
  private commandList: Command[] = [];
  private undoList: Command[] = [];

  public undo(): void {
    if (this.commandList.length > 0) {
      const commandObj: Command | undefined = this.commandList.pop();
      if (commandObj !== undefined) {
        commandObj.unExecute();
        this.undoList.push(commandObj);
      }
    }
  }

  public redo(): void {
    if (this.undoList.length > 0) {
      const commandObj: Command | undefined = this.undoList.pop();
      if (commandObj !== undefined) {
        commandObj.execute();
        this.commandList.push(commandObj);
      }
    }
  }

  public addCommand(command: Command): void {
    this.commandList.push(command);
  }
}
