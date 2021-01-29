import { Team } from './Team';

type Attachement = {
  id: number;
  url: string;
  thumbnail_url: string;
  size: number;
  content_type: string;
  created_at: string;
};

type Project = {
  id: number;
  name: string;
  description: string;
  shots_count: number;
  created_at: string;
  updated_at: string;
};

type Video = {
  id: number;
  duration: number;
  video_file_name: string;
  video_file_size: 12173472;
  width: number;
  height: number;
  silent: boolean;
  created_at: string;
  updated_at: string;
  url: string;
  small_preview_url: string;
  large_preview_url: string;
  xlarge_preview_url: string;
};

export type Shot = {
  id: 471756;
  title: string;
  description: string;
  width: number;
  height: number;
  images: {
    hidpi: string;
    normal: string;
    teaser: string;
    one_x: string;
    two_x: string;
  };
  published_at: string;
  updated_at: string;
  html_url: string;
  animated: boolean;
  tags: string[];
  attachments: Attachement[];
  projects: Project[];
  team: Team;
  video: Video;
  low_profile: boolean;
};
