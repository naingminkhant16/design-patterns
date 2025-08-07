import { FaceBookPoster } from "./creator/concre_creator/FacebookPoster";
import { LinkedInPoster } from "./creator/concre_creator/LinkedInPoster";
import { SocialNetworkPoster } from "./creator/SocialNetworkPoster";

// Facekbook
const facebook: SocialNetworkPoster = new FaceBookPoster(
  "nmk@gmail.com",
  "password"
);
facebook.post("Facebook content");

// LinkedIn
const linkedIn: SocialNetworkPoster = new LinkedInPoster("nmk", "password");
linkedIn.post("LinkedIn content");
