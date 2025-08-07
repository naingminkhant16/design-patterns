export interface SocialNetworkConnector {
  login(): void;
  makePost(content: string): void;
  logout(): void;
}
