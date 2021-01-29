export type Team = {
  id: number;
  name: string;
  login: string;
  html_url: string;
  avatar_url: string;
  bio: string;
  location: string;
  links: { [key in string]: string };
  type: string;
  created_at: string;
  updated_at: string;
};
