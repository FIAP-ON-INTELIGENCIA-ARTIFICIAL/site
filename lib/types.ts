export interface Project {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
}

export interface Member {
  name: string;
  role: string;
  avatarUrl: string;
  github: string;
  linkedin: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}