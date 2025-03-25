import { Channel } from "../observer/Channel";

export class NewsChannel implements Channel {
  update(news: string): void {
    console.log(`News channel received news: ${news}`);
  }
}
