import { Command } from "../Command/Command";
import { TextEditor } from "../Receiver/TextEditor";

export class OpenCommand implements Command {
  private textEditor: TextEditor;

  constructor(textEditor: TextEditor) {
    this.textEditor = textEditor;
  }

  execute(): void {
    console.log("OpenCommand executed");
    this.textEditor.open();
  }
}
