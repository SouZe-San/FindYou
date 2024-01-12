export interface DetailsProps {
  html_url: string;
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  eventsNumber: number;
  email: string | null;
  twitter_username: string | null;
  company: string | null;
  location: string | null;
  created_at: string;
  updated_at: string;
}
export interface ApiData {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: string | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gits: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
