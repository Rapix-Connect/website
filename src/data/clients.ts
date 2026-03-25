export interface ClientLogo {
  src: string;
  dark?: boolean;
}

export interface Client {
  slug: string;
  name: string;
  website: string;
  category: "gp-surgery" | "pharmacy";
  logo?: ClientLogo;
}

export const clients: Client[] = [
  {
    slug: "cohens-chemist",
    name: "Cohens Chemist",
    website: "https://www.cohenschemist.co.uk/",
    category: "pharmacy",
    logo: {
      src: "/assets/img/companies/cohens-chemists.svg",
      dark: true,
    },
  },
  {
    slug: "hollowood-chemists",
    name: "Hollowood Chemists",
    website: "https://hollowoodchemists.com/",
    category: "pharmacy",
    logo: {
      src: "/assets/img/companies/hollowood-chemists.webp",
    },
  },
  {
    slug: "clear-pharmacy",
    name: "Clear Pharmacy",
    website: "https://clearpharmacy.com/",
    category: "pharmacy",
    logo: {
      src: "/assets/img/companies/clear-pharmacy.png",
    },
  },
  {
    slug: "galgate-pharmacy",
    name: "Galgate Pharmacy",
    website: "https://www.nhs.uk/services/pharmacy/galgate-pharmacy/FTC57",
    category: "pharmacy",
    logo: {
      src: "/assets/img/companies/galgate-pharmacy.png",
    },
  },
  {
    slug: "imaan-healthcare",
    name: "Imaan Healthcare",
    website: "https://imaanhealthcare.com/",
    category: "pharmacy",
    logo: {
      src: "/assets/img/companies/imaan-healthcare.png",
    },
  },
  {
    slug: "rope-green-medical-centre",
    name: "Rope Green Medical Centre",
    website: "https://www.ropegreenmedicalcentre.nhs.uk/",
    category: "gp-surgery",
    logo: {
      src: "/assets/img/companies/rope-green-medical-centre.png",
    },
  },
  {
    slug: "lancaster-medical-practice",
    name: "Lancaster Medical Practice",
    website: "https://www.lancastermedicalpractice.co.uk/",
    category: "gp-surgery",
    logo: {
      src: "/assets/img/companies/lancaster-medical-practice.png",
    },
  },
  {
    slug: "brock-street-pharmacy",
    name: "Brock Street Pharmacy",
    website: "https://www.brockstreetpharmacy.co.uk/",
    category: "pharmacy",
  },
  {
    slug: "cathedral-pharmacy",
    name: "Cathedral Pharmacy",
    website: "https://cathedralpharmacy.co.uk/",
    category: "pharmacy",
  },
  {
    slug: "crewe-pharmacy-and-travel-vaccination-centre",
    name: "Crewe Pharmacy & Travel Vaccination Centre",
    website: "https://www.nhs.uk/services/pharmacy/crewe-pharmacy-and-travel-vaccination-ctr/FQG38",
    category: "pharmacy",
  },
  {
    slug: "dr-maassarani-and-partners",
    name: "Dr Maassarani and Partners",
    website: "https://www.mazmedical.nhs.uk/",
    category: "gp-surgery",
  },
  {
    slug: "hopwood-house-medical-practice",
    name: "Hopwood House Medical Practice",
    website: "https://www.hopwood-house-medical-practice.co.uk/",
    category: "gp-surgery",
  },
  {
    slug: "kirkby-town-chemist",
    name: "Kirkby Town Chemist",
    website: "https://www.kirkbytownchemist.co.uk/",
    category: "pharmacy",
  },
  {
    slug: "lower-house-pharmacy",
    name: "Lower House Pharmacy",
    website: "https://lowerhousepharmacy.co.uk/",
    category: "pharmacy",
  },
  {
    slug: "macmillan-surgery",
    name: "The MacMillan Surgery",
    website: "https://www.themacmillansurgery.nhs.uk/",
    category: "gp-surgery",
  },
  {
    slug: "millbrook-medical-centre",
    name: "Millbrook Medical Centre",
    website: "https://www.millbrookmedicalcentre.nhs.uk/",
    category: "gp-surgery",
  },
  {
    slug: "pointer-court-pharmacy",
    name: "Pointer Court Pharmacy",
    website: "https://pointercourtpharmacy.co.uk/",
    category: "pharmacy",
  },
  {
    slug: "slyne-pharmacy",
    name: "Slyne Pharmacy",
    website: "https://slynepharmacy.co.uk/",
    category: "pharmacy",
  },
  {
    slug: "st-laurences-medical-centre",
    name: "St Laurences Medical Centre",
    website: "https://www.stlaurencesmedicalcentre.nhs.uk/",
    category: "gp-surgery",
  },
  {
    slug: "wingate-medical-centre",
    name: "Wingate Medical Centre",
    website: "https://www.wingatemedicalcentre.co.uk/",
    category: "gp-surgery",
  },
];

const featuredClientSlugs = [
  "cohens-chemist",
  "hollowood-chemists",
  "clear-pharmacy",
  "galgate-pharmacy",
  "imaan-healthcare",
  "rope-green-medical-centre",
  "lancaster-medical-practice",
];

const byName = (left: Client, right: Client) => left.name.localeCompare(right.name);

export const featuredClients = featuredClientSlugs
  .map((slug) => clients.find((client) => client.slug === slug))
  .filter((client): client is Client & { logo: ClientLogo } => Boolean(client?.logo));

export const gpSurgeryClients = clients
  .filter((client) => client.category === "gp-surgery")
  .slice()
  .sort(byName);

export const pharmacyClients = clients
  .filter((client) => client.category === "pharmacy")
  .slice()
  .sort(byName);

export const additionalClientCount = clients.length - featuredClients.length;
