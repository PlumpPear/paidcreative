// Portfolio content (16:9 videos only). To add a video: upload it to YouTube,
// then add an entry with its ID (the part after "v="). Leave youtubeId out to
// show a grey 16:9 placeholder tile.

export type PortfolioVideo = {
  youtubeId?: string;
  title: string;
};

export type PortfolioBrand = {
  slug: string;
  name: string;
  caseStudyHref: string;
  videos: PortfolioVideo[];
};

export const brands: PortfolioBrand[] = [
  {
    slug: "birddogs",
    name: "birddogs",
    caseStudyHref: "/birddogs",
    videos: [
      { youtubeId: "eLDNi4Mr9Mw", title: "I Just Want a Man Who..." },
      { youtubeId: "jH8bvuqSjgg", title: "Pinocchio Tries Selling Me Pants" },
      { youtubeId: "xCisGywMfA0", title: "Locker Room Twin" },
      { youtubeId: "eWXpTNNRKuo", title: "Fish Blankets" },
    ],
  },
  {
    slug: "bluechew",
    name: "BlueChew",
    caseStudyHref: "/bluechew",
    videos: [{ title: "Coming soon" }, { title: "Coming soon" }],
  },
  {
    slug: "the-perfect-jean",
    name: "The Perfect Jean",
    caseStudyHref: "/the-perfect-jean",
    videos: [{ title: "Coming soon" }, { title: "Coming soon" }],
  },
];
