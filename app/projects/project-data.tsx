export interface Project {
  title: string;
  year: number;
  description: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: "Chuckle Cloud",
    year: 2024,
    description: "Cloud-based website builder",
    url: "https://chuckle-cloud.com/",
  },
  {
    title: "Automatic Discounts & Upsells",
    year: 2023,
    description: "Shopify app handling complex promotions",
    url: "/blog/automatic-discounts-upsells",
  },
  {
    title: "MooseSync",
    year: 2021,
    description: "Data sync with Shopify stores",
    url: "/blog/moose-sync",
  },
  {
    title: "Centrim",
    year: 2017,
    description: "Real estate property listing SaaS for WordPress",
    url: "/blog/centrim",
  },
  {
    title: "Travel with Makers",
    year: 2016,
    description: "Collaborative holiday booking and MVP development experience",
    url: "/blog/travel-with-makers",
  },
  {
    title: "Punchwork",
    year: 2016,
    description: "Time & cost tracking platform for construction companies",
    url: "/blog/punchwork",
  },
];
