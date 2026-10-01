// Portfolio content. To add a video: upload it to YouTube, then add an entry
// with its ID (the part after "v=" or "/shorts/") and its format. Leave
// youtubeId out to show a grey placeholder tile at that aspect ratio.

export type PortfolioVideo = {
  youtubeId?: string;
  title: string;
  format: "horizontal" | "vertical"; // 16:9 or 9:16
};

export type PortfolioBrand = {
  slug: string;
  name: string;
  logo: string;
  stat: string;
  caseStudyHref: string;
  videos: PortfolioVideo[];
};

export const brands: PortfolioBrand[] = [
  {
    slug: "birddogs",
    name: "birddogs",
    logo: "/birddogs_logo_1.png",
    stat: "$0 to $50M in 5 years, built without raising venture funds.",
    caseStudyHref: "/birddogs",
    videos: [
      { youtubeId: "eLDNi4Mr9Mw", title: "I Just Want a Man Who...", format: "horizontal" },
      { youtubeId: "jH8bvuqSjgg", title: "Pinocchio Tries Selling Me Pants", format: "horizontal" },
      { youtubeId: "xCisGywMfA0", title: "Locker Room Twin", format: "horizontal" },
      { youtubeId: "eWXpTNNRKuo", title: "Fish Blankets", format: "horizontal" },
    ],
  },
  {
    slug: "bluechew",
    name: "BlueChew",
    logo: "/bluechew_logo1.svg",
    stat: "Multiple top-10 spending ads inside a $400M men's health brand in one month.",
    caseStudyHref: "/bluechew",
    videos: [
      { youtubeId: "sqsBkqhVyHQ", title: "Pizza Boy Extra Sausage", format: "vertical" },
      { youtubeId: "qnDP3MYZQm8", title: "Starting a Fire with BlueChew Gold", format: "vertical" },
      { youtubeId: "ynfPhxvGFLo", title: "Couple's Therapy Gone Right", format: "vertical" },
      { youtubeId: "OHHBTPmsGWY", title: "Date Night with BlueChew Gold", format: "vertical" },
      { youtubeId: "4EkxvfUIIgA", title: "Noise Complaint", format: "vertical" },
      { youtubeId: "bY7YZQqRJ7o", title: "The Key to Attraction", format: "vertical" },
      { youtubeId: "V86KEX9uGTg", title: "In Love with My Zoom Therapist", format: "vertical" },
      { youtubeId: "GoVR5i8NIcs", title: "Cougar Attack", format: "vertical" },
    ],
  },
  {
    slug: "the-perfect-jean",
    name: "The Perfect Jean",
    logo: "/tpj_logo copy.png",
    stat: "Increased spend while lowering CAC for a top men's DTC denim brand.",
    caseStudyHref: "/the-perfect-jean",
    videos: [
      { youtubeId: "O9c--b_B-bA", title: "Wearing Jeans to Pilates!?", format: "vertical" },
      { youtubeId: "o-poUNctAIo", title: "Stop Overcomplicating Jeans", format: "vertical" },
      { youtubeId: "cOY9OguSPcE", title: "Jeans That Feel Like Sweatpants", format: "vertical" },
    ],
  },
];
