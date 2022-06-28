import dayjs from 'dayjs';
import {
  IoAlbums,
  IoBriefcase,
  IoDocument,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from 'react-icons/io5';

export const CONTACTS = [
  {
    Icon: IoLogoGithub,
    label: 'View my GitHub profile',
    link: 'https://github.com/RagOfJoes',
  },
  {
    Icon: IoLogoLinkedin,
    label: 'View my LinkedIn profile',
    link: 'https://www.linkedin.com/in/ragofjoes/',
  },
  {
    Icon: IoDocument,
    label: 'View my Resume',
    link: '/Resume.pdf',
  },
];

export const EXPERIENCES = [
  {
    company: 'Offset Partners',
    description: [
      'Led development team in creating a low code solution allowing our clients to easily integrate our Cart and CMS service into their existing site',
      'Refactored legacy PHP MVC framework to improve integration with React which decreased the number of duplicate and brittle code by up to 60%',
      'Implemented Docker into our code to decrease the amount of variability between environments and simplify local development setup',
      'Introduced a proper Version Control workflow with GitHub which cut down production bugs by 80%',
    ],
    end: dayjs(),
    job: 'Product Engineer',
    link: 'https://www.offsetpartners.com/',
    start: dayjs('12/08/2020', 'MM/DD/YYYY'),
  },
  {
    company: 'Offset Partners',
    description: [
      'Managed e-commerce platform by squashing bugs and addressing client requests',
      'Prototyped several internal tools such as a centralized Identity Provider, GraphQL wrapper for our Cart service, and a real-time client issue tracker',
      'Worked closely with designers to build unique features for Client websites',
    ],
    end: dayjs('12/08/2020', 'MM/DD/YYYY'),
    job: 'Junior Software Developer',
    link: 'https://www.offsetpartners.com/',
    start: dayjs('07/07/2019', 'MM/DD/YYYY'),
  },
  {
    company: 'Napa Valley College',
    description: [
      'Assisted classmates with various studying techniques for exams, projects, and/or, assignments',
      'Presented different ways to visualize, understand, and enjoy complex programming topics',
      'Collaborated with professors to address teaching and assignment issues',
    ],
    end: dayjs('05/21/2019', 'MM/DD/YYYY'),
    job: 'Computer Science Tutor',
    start: dayjs('08/01/2018', 'MM/DD/YYYY'),
  },
];

export const INTRO_STATS = [
  {
    title: dayjs().diff(dayjs('07/07/2019', 'MM/DD/YYYY'), 'years'),
    text: 'Years of Experience',
  },
  {
    title: 5,
    text: "Production apps I've lead",
  },
  {
    title:
      // (Last year - Year I started to pursue my dream) * Number of Weekdays * 2 cups of coffee + (Number of Week into year * Number of Weekdays)
      dayjs().subtract(1, 'year').diff(dayjs('2018'), 'years') * 520 +
      dayjs().week() * 5,
    text: 'Cups of coffee consumed',
  },
];

export const PROJECTS = [
  {
    image: '/images/Puzzlely-Preview.png',
    name: 'Puzzlely',
    summary:
      'A puzzle game that was inspired by the BBC’s “Only Connect” game show. Users create a puzzle with 16 words where each group of 4 words have some connection between them. Players attempt to link each group together and guess each connection.',
    tags: [
      'Typescript',
      'React',
      'Next',
      'Go',
      'OAuth2',
      'MySQL',
      'Docker',
      'Terraform',
      'DigitalOcean',
    ],
    url: 'https://www.puzzlely.io/',
  },
  {
    image: '/images/OctreePalette-Preview.png',
    name: 'OctreePalette',
    summary:
      'An iOS library that extracts the ColorTheme from an image. It uses the Octree Color Quantization Algorithm to build the image’s distinct color palette.',
    tags: ['Mobile', 'iOS', 'Swift 5.0'],
    url: 'https://github.com/RagOfJoes/OctreePalette',
  },
  {
    image: '/images/Spoonfed-Preview.png',
    name: 'Spoonfed',
    summary:
      'A web app that allows users to create, import, and share their favorite recipes. Users can also create “Creations” that show off their attempts at following other user generated recipes.',
    tags: [
      'React',
      'Next',
      'NodeJS',
      'GraphQL',
      'OAuth2',
      'OIDC',
      'Redis',
      'MongoDB',
      'Azure',
    ],
    url: 'https://spoonfed.dev/',
  },
  {
    image: '/images/UserAuth-Preview.png',
    name: 'Identity Provider',
    summary:
      'A simple identity provider that is build on top of the OIDC protocol for authentication. Users can manage their profile and active sessions.',
    tags: ['NodeJS', 'OAuth2', 'OIDC', 'MongoDB', 'Redis'],
    url: 'https://spoonfed.dev/api/login',
  },
];

export const ROUTES = [
  {
    href: '#experience',
    label: 'Experience',
    Icon: IoBriefcase,
  },
  {
    href: '#projects',
    label: 'Projects',
    Icon: IoAlbums,
  },
  {
    href: '#contact',
    label: 'Contact',
    Icon: IoMail,
  },
];
