export interface WordpressPost {
  id: number;
  date: string; // ISO 8601 format
  date_gmt: string; // ISO 8601 format
  guid: {
    rendered: string;
  };
  modified: string; // ISO 8601 format
  modified_gmt: string; // ISO 8601 format
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  _links: {
    self: {
      href: string;
    }[];
    collection: {
      href: string;
    }[];
    about: {
      href: string;
    }[];
    author: {
      embeddable: boolean;
      href: string;
    }[];
    replies: {
      embeddable: boolean;
      href: string;
    }[];
    "version-history": {
      href: string;
      count: number;
    }[];
    "predecessor-version": {
      id: number;
      href: string;
    }[];
    "wp:featuredmedia": {
      embeddable: boolean;
      href: string;
    }[];
    "wp:attachment": {
      href: string;
    }[];
    "wp:term": {
      taxonomy: string;
      embeddable: boolean;
      href: string;
    }[];
    curies: {
      name: string;
      href: string;
      templated: boolean;
    }[];
  };
}
