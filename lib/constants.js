import moment from "moment";
import WorkIcon from "@material-ui/icons/Work";
import ListIcon from "@material-ui/icons/List";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import ContactsIcon from "@material-ui/icons/Contacts";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

export const siteDescription =
  "I am a boring person who enjoys learning and coding interesting things.";

export const routes = [
  {
    route: "#experience",
    displayName: "Experience",
    Icon: <WorkIcon color="primary" style={{ display: "inline-flex" }} />,
  },
  {
    route: "#projects",
    displayName: "Projects",
    Icon: <ListIcon color="primary" style={{ display: "inline-flex" }} />,
  },
  {
    route: "#contact",
    displayName: "Contact",
    Icon: <ContactsIcon color="primary" style={{ display: "inline-flex" }} />,
  },
];

export const experiences = [
  {
    company: "Offset Partners",
    job: "Product Engineer",
    link: "https://www.offsetpartners.com/",
    duration: { from: moment("12/08/2020", "MM/DD/YYYY"), to: moment() },
    description: [
      "Led development team in upgrading e-commerce platform to a more modern framework and design.",
      "Refactored legacy Php code to integrate with React and a more Ajax heavy application.",
      "Helped introduce a proper Version Control workflow with the help of GitHub and Docker.",
      "Created a backward compatible Component Library in React by allowing for components to be mounted like jQuery plugins.",
    ],
  },
  {
    company: "Offset Partners",
    job: "Junior Software Developer",
    link: "https://www.offsetpartners.com/",
    duration: {
      from: moment("07/07/2019", "MM/DD/YYYY"),
      to: moment("12/08/2020", "MM/DD/YYYY"),
    },
    description: [
      "Work with a team of developers and designers to build beautiful websites that help clients solidify their identity.",
      "Manage e-commerce platform to allow the best experience possible for clients.",
      "Integrate modern libraries and frameworks, such as React, to legacy framework.",
    ],
  },
  {
    company: "NVC",
    job: "Computer Science Tutor",
    duration: {
      from: moment("08/01/2018", "MM/DD/YYYY"),
      to: moment("05/21/2019", "MM/DD/YYYY"),
    },
    description: [
      "Assisted classmates with various studying techniques for exams, projects, and/or assignments.",
      "Presented different ways to visualize, understand, and enjoy complex programming topics.",
      "Collaborated with professors to address teaching and assignment issues.",
    ],
  },
];

export const featuredProjects = [
  {
    name: "OctreePalete",
    link: "https://github.com/RagOfJoes/OctreePalette",
    image: "/images/OctreePalette-Preview.png",
    stack: "Swift 5.0, Cocoapods, Swift Package Manager",
    description: [
      "iOS library that extracts `ColorTheme` and palette from an Image.",
      "Uses the Octree Color Quantization Algorithm to build image's distinct color palette.",
      "Delta E(1976) formula ensures that each color difference in the `ColorTheme` are human perceptible.",
      "WCAG 2 specification ensures that, if specified, colors contrast ratio are as accessible as possible.",
    ],
  },
  {
    name: "Spoonfed",
    link: "https://spoonfed.dev",
    image: "/images/Spoonfed-Preview.png",
    stack: "GraphQL, NextJS, Redis, Azure, OAuth2(w/ OIDC)",
    description: [
      "Fullstack application built with contemporary tools.",
      "Create or import recipes that are shared with other users.",
      'Make "Creations" which are byproducts of the recipes from the website.',
      "Utilizes own Identity Provider, allowing both services to be updated seprately(less headache).",
      "Powered by a GraphQL Backend Server.",
    ],
  },
  {
    name: "Identity Provider",
    image: "/images/UserAuth-Preview.png",
    link: "https://spoonfed.dev/api/login",
    stack: "Redis, NodeJS, OAuth2 Protocol, OIDC Protocol",
    description: [
      "Uses OAuth 2 and OIDC protocol.",
      "Handles authentication/authorization for future and current side projects.",
      "Redis is used as a distributed cache to prevent stale token data across future side projects as well as to offload recurring token introspection requests.",
      "(WIP) Profile and Session management to allow users to change passwords, logout of any active sessions, etc.",
    ],
  },
  {
    name: "Offset Partners React Components",
    image: "/images/OffsetPartners_ReactComponents-Preview.png",
    link: "https://github.com/offsetpartners/react-components",
    stack: "NPM, React, Webpack, TravisCI",
    description: [
      "Allows dev team to slowly port complex custom components over to React where development will be much more efficient.",
      "Supports mounting Components in a similar fashion to jQuery.",
      "Utilizes styleguidist library for documentation and dev environment.",
    ],
  },
];

export const archivedProjects = [
  {
    name: "Mood Calendar",
    stack: "React, Redux, NodeJS",
    link: "https://ragofjoes-v1.herokuapp.com/moodcalendar",
    description: [
      "CRUD Application.",
      "SPA(Single Page Application).",
      "Redux thunk handles all API interactions.",
    ],
  },
  {
    name: "JWT Auth",
    stack: "React, Redux, NodeJS, PassportJS",
    link: "https://ragofjoes-v1.herokuapp.com/userauth",
    description: [
      "Basic JWT Authentication.",
      "Allows for refresh tokens.",
      "Uses passportJS to handle auth flow.",
    ],
  },
  {
    name: "Real Time Chat",
    link: "https://ragofjoes-v1.herokuapp.com/chat",
    stack: "Express, React, Redux, Socket.io",
    description: [
      '1 on 1 private messages with Socket.io\'s "room" feature.',
      "User's are able to create, edit, and delete messages that will affect both parties.",
      "MongoDB is used as the database.",
      "Redux handles all the state management.",
      "Express with it's asynchronous features powers the backend.",
    ],
  },
  {
    name: "Covid-19 Tracker",
    link: "https://covid19-tracker.ragofjoes.now.sh/",
    stack: "NextJS, recharts, Bing News API, Open Covid stats API",
    description: [
      "Digestible statistics on the impact of Covid-19.",
      "Country specific numbers on cases, recovered, and deaths.",
      "Visualized timeline, tabular and graphed.",
      "Relevant and useful articles from Bing's News API.",
      <Typography color="textPrimary" variant="subtitle2">
        - Powered by{" "}
        <Typography
          component="a"
          color="primary"
          variant="subtitle2"
          href="https://explore.postman.com/4DTEzqFagDUe7F"
        >
          Open Covid stats API.
        </Typography>
      </Typography>,
    ],
  },
  {
    name: "Twomey Interactive Map",
    stack: "React, Mapbox",
    link: "https://twomey.com/vineyards/",
    description: [
      "Worked with a team of designers to achieve client's request.",
      "Powered by Uber's React Mapbox Library.",
    ],
  },
  {
    name: "Portfolio Website v1",
    stack: "React",
    link: "https://ragofjoes-v1.herokuapp.com/",
    description: ["First iteration of my Portfolio Website."],
  },
];

export const socials = [
  {
    name: "Github",
    Icon: <GitHubIcon titleAccess="Github" />,
    link: "https://github.com/RagOfJoes",
  },
  {
    name: "LinkedIn",
    Icon: <LinkedInIcon titleAccess="LinkedIn" />,
    link: "https://www.linkedin.com/in/ragofjoes/",
  },
  {
    name: "Resume",
    Icon: <DescriptionIcon titleAccess="Resume" />,
    link: "/Resume.pdf",
  },
];
