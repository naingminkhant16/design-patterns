import { FaceBookConnector } from "../../product/FackbookConnector";
import { SocialNetworkConnector } from "../../product/SocialNetworkConnector";
import { SocialNetworkPoster } from "../SocialNetworkPoster";

export class FaceBookPoster extends SocialNetworkPoster {
  constructor(private email: string, private password: string) {
    super();
  }

  getSocialNetwork(): SocialNetworkConnector {
    return new FaceBookConnector(this.email, this.password);
  }
}
