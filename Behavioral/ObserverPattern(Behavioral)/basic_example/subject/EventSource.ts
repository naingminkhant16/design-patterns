import { Observer } from "../observer/Observer";

export class EventSource {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    if (this.observers.includes(observer)) return;
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    if (!this.observers.includes(observer)) return;
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notifyObservers(event: string): void {
    this.observers.forEach((observer) => observer.update(event));
  }
}
