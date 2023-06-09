export type TocItem = {
  title: string;
  url: string;
  items?: TocItem[];
};

export type TocItems = {
  items?: TocItem[];
};

export type TableOfContents = TocItems;
