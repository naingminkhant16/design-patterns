import { Command } from "../Command/Command";
import { TextEditor } from "../Receiver/TextEditor";

export class SaveCommand implements Command {
  private textEditor: TextEditor;

  constructor(textEditor: TextEditor) {
    this.textEditor = textEditor;
  }

  execute(): void {
    console.log("SaveCommand executed");
    this.textEditor.save();
  }
}
