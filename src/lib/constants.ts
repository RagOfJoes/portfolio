import dayjs from 'dayjs';
import { IoAlbums, IoBriefcase, IoMail } from 'react-icons/io5';

export const EXPERIENCES = [
  {
    company: 'Offset Partners',
    description: [
      'Led development team in creating a low code solution allowing our clients to easily integrate our Cart and CMS service to their existing site.',
      'Refactored legacy PHP MVC framework to improve integration with React which decreased the number of duplicate and brittle code by up to 60%.',
      'Implemented Docker into product to decrease the amount of variability between environments.',
      'Helped introduce a proper Version Control workflow with GitHub, which, dramatically increased efficiency of our growing development team.',
    ],
    end: dayjs(),
    job: 'Product Engineer',
    link: 'https://www.offsetpartners.com/',
    start: dayjs('12/08/2020', 'MM/DD/YYYY'),
  },
  {
    company: 'Offset Partners',
    description: [
      'Managed e-commerce platform by squashing bugs and addressing client requests.',
      'Prototyped a number internal tools such as a Client issue tracker, GraphQL wrapper for Cart service, and, Chart intensive dashboard application.',
      'Worked with designers to build unique and beautiful websites that helped clients solidify their identity.',
    ],
    end: dayjs('12/08/2020', 'MM/DD/YYYY'),
    job: 'Junior Software Developer',
    link: 'https://www.offsetpartners.com/',
    start: dayjs('07/07/2019', 'MM/DD/YYYY'),
  },
  {
    company: 'Napa Valley College',
    description: [
      'Assisted classmates with various studying techniques for exams, projects, and/or assignments.',
      'Presented different ways to visualize, understand, and enjoy complex programming topics.',
      'Collaborated with professors to address teaching and assignment issues.',
    ],
    end: dayjs('05/21/2019', 'MM/DD/YYYY'),
    job: 'Computer Science Tutor',
    start: dayjs('08/01/2018', 'MM/DD/YYYY'),
  },
];

export const INTRO_STATS = [
  {
    title: '2+',
    text: 'Years of Experience',
  },
  {
    title: '5',
    text: "Production apps that I've lead",
  },
  {
    title:
      // (Last year - Year I started to pursue my dream) * Number of Weekdays * 2 cups of coffee + (Number of Week into year * Number of Weekdays)
      dayjs().subtract(1, 'year').diff(dayjs('2018'), 'years') * 520 +
      dayjs().week() * 5,
    text: 'Cups of coffee consumed',
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
