import { LinkedInConnector } from "../../product/LinkedInConnector";
import { SocialNetworkConnector } from "../../product/SocialNetworkConnector";
import { SocialNetworkPoster } from "../SocialNetworkPoster";

export class LinkedInPoster extends SocialNetworkPoster {
  constructor(private username: string, private password: string) {
    super();
  }

  getSocialNetwork(): SocialNetworkConnector {
    return new LinkedInConnector(this.username, this.password);
  }
}
