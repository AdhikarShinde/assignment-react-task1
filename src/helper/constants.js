import Team from "../assets/images/apiTeam.png";
import GraphQl from "../assets/images/graphQL.png";
import Supercharge from "../assets/images/superchargeWorkflow.png";
import BannerImage from "../assets/images/illustration.png";
import ShowcaseImage from "../assets/images/showcase.png";
import BotImage from "../assets/images/botbot.png";

export const cardBlockProps = [
  {
    imgSrc: Team,
    altText: "Dedicated API Team",
    title: "Dedicated API Team",
    subtitle:
      "Our team are available for user`s questions via our Slack Developer Community and Email",
  },
  {
    imgSrc: GraphQl,
    altText: "Our API uses Graph QL",
    title: "Our API uses Graph QL",
    subtitle:
      "No handling server side. Get many API`s responses in a single request.",
  },
  {
    imgSrc: Supercharge,
    altText: "Supercharger your workflow",
    title: "Supercharger your workflow",
    subtitle:
      "Automate workflows, integrate and analyze data and take Marvel to the next level.",
  },
];

export const splitBannerProps = [
  {
    heading: "Let's build the future of design, now.",
    subheading:
      "Create amazing tools and integrations for 1 million users or customize Marvel for your team.",
    buttons: [
      {
        label: "Submit your app",
        color: "#fff",
        backgroundColor: "#1fb6ff",
      },
      {
        label: "View API Docs",
        color: "#0c1014",
        backgroundColor: "#fff",
      },
    ],
    imageSrc: BannerImage,
    altText: "Banner Image",
    swap: false,
  },
  {
    heading: "Showcase your app in our integrations directory",
    subheading:
      "Build something special? We`re always looking to work with partners who wants to help the world bring their ideas to life",
    buttons: [
      {
        label: "Become a partner",
        color: "#0c1014",
        backgroundColor: "#fff",
      },
      {
        label: "View Integrations",
        color: "#fff",
        border: true,
        borderColor: "#fff",
        backgroundColor: "#0c1014",
      },
    ],
    imageSrc: ShowcaseImage,
    altText: "Banner Image",
    swap: false,
  },
  {
    heading: "A Slack-bot for creating and managing prototypes",
    subheading:
      "Build something special? We`re always looking to work with partners who wants to help the world bring their ideas to life",
    buttons: [
      {
        label: "Become a partner",
        color: "#0c1014",
        backgroundColor: "#fff",
      },
      {
        label: "View Integrations",
        color: "#fff",
        border: true,
        borderColor: "#fff",
        backgroundColor: "#0c1014",
      },
    ],
    imageSrc: BotImage,
    altText: "Banner Image",
    swap: true,
  },
];

export const calloutBlockProps = [
  {
    title: "Experience the freedom to build features, right away.",
    subtitle:
      "You can now harness components of our platform and build powerful integrations for our 2 million users - or simply just for your team.",
  },
];

export const headerProps = [
  { label: "Why Marvel", color: "#fff" },
  { label: "Enterprise", color: "#fff" },
  { label: "Pricing", color: "#fff" },
  { label: "Sign in", color: "#fff" },
  { label: "Sign up free", color: "#000", backgroundColor: "#fff" },
];

export const footerProps = [
  {
    header: "Overview",
    items: [
      "Why Marvel",
      "Enterprise",
      "Pricing",
      "Request a demo",
      "Explore",
      "Apps",
      "Developer API",
    ],
  },
  {
    header: "Features",
    items: [
      "Wireframing",
      "Design",
      "Prototyping",
      "Collaboration",
      "Handoff",
      "Integrations",
      "Sketch",
    ],
  },
  {
    header: "Support",
    items: ["Help Center", "Terms of Service", "Privacy", "Secutity"],
  },
  {
    header: "Marvel",
    items: [
      "Blog",
      "Our Team",
      "Contact Us",
      "Success Stories",
      "Brand Guidelines",
      ,
    ],
  },
  {
    header: "Follow",
    items: ["Twitter", "Dribble", "Facebook", "Github", "Workable"],
  },
];
