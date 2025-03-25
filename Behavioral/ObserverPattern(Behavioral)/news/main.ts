import { NewsChannel } from "./concrete_observer/NewsChannel";
import { YouTubeChannel } from "./concrete_observer/YouTubeChannel";
import { NewsAgency } from "./subject/NewsAgency";

// Create observer objects
const newsChannel: NewsChannel = new NewsChannel();
const youtubeChannel: YouTubeChannel = new YouTubeChannel();

// Create observerable object
const agency: NewsAgency = new NewsAgency();
agency.addChannel(newsChannel);
agency.addChannel(youtubeChannel);

agency.setNews("New news!");
