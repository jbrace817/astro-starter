// Shared site content: contact details, navigation and homepage copy.
// Copy comes from "Home Page - Page Draft v3" (October 1, 2026).

export const contact = {
  phone: "215-602-4261",
  phoneHref: "tel:+12156024261",
  smsHref: "sms:+12156024261",
  email: "info@oneupdigitalstudio.com",
};

export const links = {
  report: "/free-competitor-report",
  bookCall: "/contact",
  pricing: "/pricing",
  about: "/about",
};

export const nav = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "Google Maps & SEO", href: "/services/google-business-profile" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const benefits = [
  "Free competitor report",
  "Custom design, no templates",
  "Fast on every phone",
  "Google Business Profile setup",
  "15 to 40+ directory listings",
  "Live Google reviews on your site",
  "$0 build fee",
];

export const problems = [
  {
    title: "A template with no plan.",
    body: "It looks fine, but it was not built around how people search in your town.",
  },
  {
    title: "No look at the competition.",
    body: "Nobody checked who is winning on Google Maps, or why.",
  },
  {
    title: "A big invoice, then silence.",
    body: "You pay thousands up front. Then you are on your own.",
  },
];

export const steps = [
  {
    title: "Research",
    body: "Your free competitor report. We show you who ranks in your area, their reviews, their websites and the gaps they leave open.",
  },
  {
    title: "Build",
    body: "We design a custom site around those gaps. You get 2 to 3 rounds of changes. You do not pay until you approve it.",
  },
  {
    title: "Launch",
    body: "Your site, Google Business Profile, directory listings and live reviews all go live together.",
  },
  {
    title: "Grow",
    body: "Monthly updates keep your site current. On Grow, we also post to your profile, request reviews and send a quarterly report.",
  },
];

export const services = [
  {
    title: "Web Design",
    body: "Custom sites built for phones, fast to load and easy to call from. No templates.",
    href: "/services/web-design",
  },
  {
    title: "Google Business Profile and Local SEO",
    body: "We set up and tune your profile, list you on the directories Google checks and handle the on-page SEO.",
    href: "/services/google-business-profile",
  },
  {
    title: "Jobber and CRM Integration",
    body: "Website requests go straight into Jobber or your CRM. Nothing sits in an inbox. Included on Grow.",
    href: "/services/jobber-crm-integration",
  },
  {
    // Hosting and care has no page of its own at launch (build brief).
    title: "Hosting and Care",
    body: "Hosting, security, backups and monthly updates are included. Send us a change and we handle it.",
    href: "/pricing",
  },
];

export const included = [
  "A custom website designed for your business",
  "Your domain, registered in your name",
  "Hosting, SSL, security and backups",
  "A fast, mobile-first build with on-page SEO and schema",
  "Your existing logo cleaned up for web, print and social",
  "Google Business Profile setup and optimization",
  "15 to 40+ directory listings",
  "Your real Google reviews, live on your site",
  "A brand kit after launch",
  "Monthly updates",
];

type PlanRow = { label: string; launch: string | null; grow: string };

export const plans = {
  launch: {
    name: "Launch",
    price: "$149",
    bestFor: "Showing up on Google and Maps",
  },
  grow: {
    name: "Grow",
    price: "$249",
    bestFor: "More calls and reviews, less busywork",
  },
  rows: [
    { label: "Pages", launch: "Up to 6", grow: "Up to 10" },
    { label: "Directory listings", launch: "15 to 20", grow: "40 or more" },
    { label: "Monthly updates", launch: "Up to 1 hour", grow: "Up to 2 hours" },
    { label: "Profile posts, photos and Q&A", launch: null, grow: "Included" },
    { label: "Review request system", launch: null, grow: "Included" },
    { label: "Leads into Jobber or your CRM", launch: null, grow: "Included" },
    { label: "Quarterly performance report", launch: null, grow: "Included" },
  ] satisfies PlanRow[],
  terms: [
    "$0 down",
    "No build fee",
    "6-month first term, then cancel anytime with 30 days’ notice",
    "Pay yearly and get 2 months free",
    "Upgrade anytime",
  ],
};

export const testimonial = {
  quote:
    "We couldn’t be happier with our new website! OneUp Digital Studio took the time to truly understand our business and delivered a clean, user-friendly site that reflects who we are. The process was smooth, communication was excellent, and our customers are already loving the experience.",
  author: "Di Renzi Brothers Inc.",
  source: "5-star Google review",
};

export const faqs = [
  {
    q: "How much does web design cost in Bucks County, PA?",
    a: "With OneUp, a custom website is $149/mo on Launch or $249/mo on Grow. Hosting, updates and your Google Maps setup are included. There is no down payment and no build fee.",
  },
  {
    q: "Is there a long contract?",
    a: "Your first term is 6 months. After that, you are month to month. Cancel anytime with 30 days’ notice.",
  },
  {
    q: "Do I own my website?",
    a: "Your domain is registered in your name. After the first 6 months, you can buy out your site if you want to move it.",
  },
  {
    q: "How long does a new website take?",
    a: "Most sites are ready in 2 to 4 weeks. The biggest factor is how fast we get your photos and feedback.",
  },
  {
    q: "Can you guarantee I will rank first on Google?",
    a: "No one can promise that honestly. We build on what works for local businesses and show you the real numbers.",
  },
];

// Towns with a service area page link to it. New Britain has no page at launch.
export const serviceAreas = {
  bucks: "/service-areas/bucks-county",
  towns: [
    {
      name: "Chalfont",
      href: "/service-areas/bucks-county/chalfont-pa-web-design",
    },
    {
      name: "Doylestown",
      href: "/service-areas/bucks-county/doylestown-pa-web-design",
    },
    {
      name: "Newtown",
      href: "/service-areas/bucks-county/newtown-pa-web-design",
    },
    {
      name: "Warrington",
      href: "/service-areas/bucks-county/warrington-pa-web-design",
    },
    {
      name: "Lansdale",
      href: "/service-areas/montgomery-county/lansdale-pa-web-design",
    },
  ],
};

export const footerNav = [
  {
    title: "Services",
    links: [
      { label: "Web design", href: "/services/web-design" },
      {
        label: "Google Business Profile",
        href: "/services/google-business-profile",
      },
      {
        label: "Jobber and CRM integration",
        href: "/services/jobber-crm-integration",
      },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Plumbers", href: "/industries/plumbers" },
      { label: "HVAC", href: "/industries/hvac" },
      { label: "Cleaning companies", href: "/industries/cleaning-companies" },
      {
        label: "Contractors and home services",
        href: "/industries/home-services",
      },
    ],
  },
  {
    title: "Service areas",
    links: [
      { label: "Bucks County", href: "/service-areas/bucks-county" },
      ...serviceAreas.towns.map((t) => ({ label: t.name, href: t.href })),
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Work", href: "/work" },
      { label: "About James", href: "/about" },
      { label: "Free competitor report", href: "/free-competitor-report" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
