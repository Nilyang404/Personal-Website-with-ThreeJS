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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
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
    title: "AWS Certified Cloud Practitioner",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Mod Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Accounting Assistant, Volunteer",
    company_name: "UNSW",
    icon: "https://media.licdn.com/dms/image/D560BAQFqOpEPsH5vsQ/company-logo_200_200/0/1708045452261/unsw_logo?e=1717027200&v=beta&t=YPSIXs2Rf4ASpMDBXqjLPcdjRA3SedypzNURDtJqZ14",
    iconBg: "#383E56",
    date: "May 2023 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Game Mod Developer & Server Operator",
    company_name: "Don't Starve Together Private Game Server",
    icon: "https://cdn2.steamgriddb.com/icon/f18e1e190060ee0af7d043f41d1f28df.png",
    iconBg: "#E6DEDD",
    date: "Feb 2017 - Present",
    points: [
      "Established and operated a non-profit private game server for over 6 years, catering to a community of more than 2,000 users.",
      "Led the organization and development of game mods for 'Don't Starve Together' using Lua, incorporating advanced UI and animation design techniques. Key projects included implementing economic system, shop, serverload balancing, and enhancing creature AI. ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Attracted over 100,000 subscribers on Steam and WeGame Workshop, demonstrating significant impact and engagement within the gaming community.",
    ],
  },
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
    name: "Dev OverFlow",
    description:
      "A Stack Overflow clone, Web-based platform that allows users to search, read, publish and answer progaramming question, providing a convenient and efficient way to solve programming problems.",
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
        name: "fullstack",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
    ],
    image: "./src/assets/devoverflow.png",
    source_code_link:
      "https://github.com/Nilyang404/stack_overflow_replica_nextjs",
  },
  {
    name: "Game Mods of Don't Starve Together",
    description:
      "A collection of mods developed and released while running my private game server, including economic system, shop, server load balancing, and enhancing creature AI. I never expected them to be so popular and get over 100,000 subscriptions.",
    tags: [
      {
        name: "Don't Starve Mod Tools",
        color: "blue-text-gradient",
      },
      {
        name: "lua",
        color: "green-text-gradient",
      },
      {
        name: "Spriter",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/dst.gif",
    source_code_link:
      "https://steamcommunity.com/id/yougotmenow/myworkshopfiles/?appid=322330",
  },
  {
    name: "Large Scale Visual WiFi Analyzer",
    description:
      "A Solution for collecting and analyzing WiFi signals in large public areas. Suitable for public areas such as shopping malls, schools, gymnasiums, etc. Users only need to hold a mobile device equipped with this tool to collect WiFi signals in the area, and the tool will automatically analyze and visualize the collected data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "GIS",
        color: "green-text-gradient",
      },
      {
        name: "data analysis",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/heatmap.png",
    source_code_link:
      "https://github.com/Nilyang404/Large-Scale-Visual-WiFi-Analyzer",
  },
  {
    name: "Bird Species Recognition Web App",
    description:
      "A Deep Learning-based bird identification application, attained a 98% accuracy rate across more than 300 bird species, providing both a web version and a mobile WeChat mini-program version to enhance user accessibility. Built with Django and Bootstrap and jQuery. If you want to know the name and information of the bird outside your window, try it.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "deep learning",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/bird.png",
    source_code_link:
      "https://github.com/BSR-Bird-species-recognition/Bird-species-recognition-web",
  },
  {
    name: "PalWorld Breeding Calculator",
    description:
      "Many people record breeding results through random combinations. This tool will help people accurately calculate the results of more than 17,000 paru breeding combinations based on game data dumps., This tool can help give all the parent combinations of a specific pal or calculate beeding result of tow pals.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "game tool",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/palword.png",
    source_code_link:
      "https://github.com/Nilyang404/PalWorld-Breeding-Calculator",
  },
  {
    name: "General DNS Resolver and Client",
    description:
      "The DNS resolver is implemented in accordance with IEEE standards. It is able to accept, parse and respond to multiple types of DNS queries from clients. The client can send query requests to any DNS server and receive, parse, and display responses.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "DNS",
        color: "green-text-gradient",
      },
      {
        name: "UDP",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/dns.png",
    source_code_link:
      "https://github.com/Nilyang404/General-DNS-Resolver-and-Client",
  },
];

export { services, technologies, experiences, testimonials, projects };
