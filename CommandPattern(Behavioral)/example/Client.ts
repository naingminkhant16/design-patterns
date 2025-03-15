import { Command } from "./Command/Command";
import { OpenCommand } from "./ConcreteCommand/OpenCommand";
import { PrintCommand } from "./ConcreteCommand/PrintCommand";
import { SaveCommand } from "./ConcreteCommand/SaveCommand";
import { Button } from "./Invoker/Button";
import { Shortcut } from "./Invoker/Shortcut";
import { TextEditor } from "./Receiver/TextEditor";

export class Client {
  run(): void {
    const textEditor: TextEditor = new TextEditor();

    // Create command objects and associate them with the receiver
    const saveCommand: Command = new SaveCommand(textEditor);
    const openCommand: Command = new OpenCommand(textEditor);
    const printCommand: Command = new PrintCommand(textEditor);

    // Create invoker objects and associate them with the command objects
    const openButton: Button = new Button(openCommand);
    const saveButton: Button = new Button(saveCommand);
    const printShortcut: Shortcut = new Shortcut(printCommand);

    // Invoke the command by calling execute on the invoker object
    openButton.click();
    console.log("===================================");
    saveButton.click();
    console.log("===================================");
    printShortcut.press();
  }
}
