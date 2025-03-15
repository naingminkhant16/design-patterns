import { Command } from "../Command/Command";
import { TextEditor } from "../Receiver/TextEditor";

export class PrintCommand implements Command {
  private textEditor: TextEditor;

  constructor(textEditor: TextEditor) {
    this.textEditor = textEditor;
  }

  execute(): void {
    console.log("PrintCommand executed");
    this.textEditor.print();
  }
}
