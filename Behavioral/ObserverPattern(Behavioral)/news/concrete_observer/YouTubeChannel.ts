import { Channel } from "../observer/Channel";

export class YouTubeChannel implements Channel {
  update(news: string): void {
    console.log(`YouTube channel received news: ${news}`);
  }
}
