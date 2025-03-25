import { Event } from "./concrete_observer/Event";
import { EventSource } from "./subject/EventSource";

const eventSource: EventSource = new EventSource();

const event1: Event = new Event();
const event2: Event = new Event();

eventSource.addObserver(event1);
eventSource.addObserver(event2);

// eventSource.removeObserver(event2);

eventSource.notifyObservers("Event occurred!");
