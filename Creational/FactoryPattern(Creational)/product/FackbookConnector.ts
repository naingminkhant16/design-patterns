import { SocialNetworkConnector } from "./SocialNetworkConnector";

export class FaceBookConnector implements SocialNetworkConnector {
  constructor(private email: string, private password: string) {}

  login(): void {
    console.log(`Login to Facebook with ${this.email} and ${this.password}.`);
  }

  makePost(content: string): void {
    console.log("Making post to Facebook - content : " + content);
  }

  logout(): void {
    console.log("Logout from Facebook.");
  }
}
