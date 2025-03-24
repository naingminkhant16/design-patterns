import { HistoryList } from "./HistoryList";
import { PopCommand } from "./PopCommand";
import { PushCommand } from "./PushCommand";

export class Application {
  public static main(): void {
    const stack: number[] = []; // Create a stack
    const historyList: HistoryList = new HistoryList(); // Create a history list

    const pushc1: PushCommand = new PushCommand(stack, 6); // Create a push command
    pushc1.execute(); // Execute the push command
    historyList.addCommand(pushc1); // Add the push command to the history list
    console.log(stack); // Output: [6]

    const pushc2: PushCommand = new PushCommand(stack, 3); // Create a push command
    pushc2.execute(); // Execute the push command
    historyList.addCommand(pushc2); // Add the push command to the history list
    console.log(stack); // Output: [6, 3]

    const popc1: PopCommand = new PopCommand(stack); // Create a pop command
    popc1.execute(); // Execute the pop command
    historyList.addCommand(popc1); // Add the pop command to the history list
    console.log(stack); // Output: [6]

    historyList.undo(); // Undo the last command
    console.log(stack); // Output: [6, 3]
  }
}
