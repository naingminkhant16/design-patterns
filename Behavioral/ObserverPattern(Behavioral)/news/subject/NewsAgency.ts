import { Channel } from "../observer/Channel";

export class NewsAgency {
  private channels: Channel[] = [];
  private news: string = "";

  public addChannel(channel: Channel): void {
    this.channels.push(channel);
  }

  public removeChannel(channel: Channel): void {
    this.channels = this.channels.filter((ch) => ch !== channel);
  }

  public setNews(news: string): void {
    this.news = news;
    this.notifyChannels();
  }

  private notifyChannels(): void {
    this.channels.forEach((channel) => channel.update(this.news));
  }
}
