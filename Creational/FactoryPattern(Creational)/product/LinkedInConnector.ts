import { SocialNetworkConnector } from "./SocialNetworkConnector";

export class LinkedInConnector implements SocialNetworkConnector {
  constructor(private username: string, private password: string) {}

  login(): void {
    console.log(`Login to LinkedIn with ${this.username} and ${this.password}`);
  }

  makePost(content: string): void {
    console.log("Making post to LinkedIn - content : " + content);
  }

  logout(): void {
    console.log("Logout from LinkedIn.");
  }
}
