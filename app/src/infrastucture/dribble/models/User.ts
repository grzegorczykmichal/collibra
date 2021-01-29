import { Team } from './Team';

export type User = {
  id: number;
  name: string;
  login: string;
  html_url: string;
  avatar_url: string;
  bio: string;
  location: string;
  links: { [key in string]: string };
  can_upload_shot: boolean;
  pro: boolean;
  followers_count: number;
  created_at: string;
  type: string;
  teams: Team[];
};
