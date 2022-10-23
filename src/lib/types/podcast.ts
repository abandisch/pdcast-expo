export interface Episode {
  id: string;
  title: string;
  timestamp: string;
  description: string;
  url: string;
}

export interface Podcast {
  id: string;
  title: string;
  episodes: Episode[];
}
