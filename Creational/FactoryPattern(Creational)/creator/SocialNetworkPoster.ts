import { SocialNetworkConnector } from "../product/SocialNetworkConnector";

export abstract class SocialNetworkPoster {
  // factory method
  protected abstract getSocialNetwork(): SocialNetworkConnector;
  post(content: string): void {
    const socialNetwork: SocialNetworkConnector = this.getSocialNetwork();
    socialNetwork.login();
    socialNetwork.makePost(content);
    socialNetwork.logout();
  }
}
