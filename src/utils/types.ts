export type Post = {
  title: string;
  pubDate: string;
  description: string;
  minutesRead: number;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
};

export type Project = {
  name: string;
  image: {
    path: string;
    alt: string;
  };
  link: string;
  tags: string[];
  description: string;
  date: string;
};
