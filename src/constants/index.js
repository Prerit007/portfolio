import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  rest,
  dsah,
  nft,
  rx,
  drdo,
  carrent,
  jobit,
  tripguide,
  threejs,
  daikoku,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    per: "100%",
  },
  {
    name: "CSS 3",
    icon: css,
    per: "85%",
  },
  {
    name: "JavaScript",
    icon: javascript,
    per: "90%",
  },
  {
    name: "TypeScript",
    icon: typescript,
    per: "75%",
  },
  {
    name: "React JS",
    icon: reactjs,
    per: "85%",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    per: "80%",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    per: "85%",
  },
  {
    name: "Node JS",
    icon: nodejs,
    per: "60%",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    per: "50%",
  },
  {
    name: "Three JS",
    icon: threejs,
    per: "40%",
  },
  {
    name: "git",
    icon: git,
    per: "85%",
  },
  {
    name: "figma",
    icon: figma,
    per: "65%",
  },
  {
    name: "docker",
    icon: docker,
    per: "0%",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Daikoku",
    tech: [html, tailwind, javascript, figma],
    icon: daikoku,
    iconBg: "#383E56",
    date: "August 2022 - November 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "ProductRx",
    tech: [html, tailwind, docker],
    icon: rx,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "DRDO",
    tech: [html, tailwind, javascript],
    icon: drdo,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NFT-App",
    description: "building a modern NFT Marketplace",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/Prerit007/NFT-App",
  },
  {
    name: "Restaurant-UI",
    description: "Restaurant Landing Page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: rest,
    source_code_link: "https://github.com/Prerit007/Restaurant-UI",
  },
  {
    name: "Admin Dashboard",
    description: "Build and Deploy a React Admin Dashboard App.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dsah,
    source_code_link: "https://github.com/Prerit007/Admin-DashBoard",
  },
];

export { services, technologies, experiences, testimonials, projects };
