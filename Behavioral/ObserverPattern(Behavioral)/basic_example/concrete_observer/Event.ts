import { Observer } from "../observer/Observer";

export class Event implements Observer {
  update(event: string): void {
    console.log(`Event received: ${event}`);
  }
}
