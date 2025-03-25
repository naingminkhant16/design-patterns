import { Observer } from "../observer/Observer";

export class EventSource {
  private observers: Observer[];

  constructor() {
    this.observers = [];
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notifyObservers(event: string): void {
    this.observers.forEach((observer) => observer.update(event));
  }
}
