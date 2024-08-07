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
  dns,
  palworld,
  bird,
  heatmap,
  dst,
  devoverflow,
  jenkins,
  java,
  python,
  csharp,
  cplus,
  aws,
  boomerang,
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
    id: "projects",
    title: "Projects",
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
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "C ++",
    icon: cplus,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Junior Software Developer",
    company_name: "Boomerang Studios",
    icon: boomerang,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    points: [
      "Built front-end game interfaces and Back-end program using JavaScript and Java",
      "Developed multiple tools on AWS for game data analysis and management",
      "Assisted in designing mathematical models for products and maintained product documentation to ensure completeness and accuracy.",
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
  {
    title: "Accounting Assistant, Volunteer",
    company_name: "UNSW Financial Control and Compliance Department",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiErIcTKlsb-Y59itvJJZe9Kd_nMG-8WOzg&s",
    iconBg: "#383E56",
    date: "May 2023 - Aug 2023",
    points: [
      "Acted as a leader for an 8-person group, organizing regular meetings and reports, facilitating communication with department supervisors, and providing support to colleagues in resolving work-related challenges. ",
      "Collaborated with a team to review over 160 research contracts between the university and research sponsors, ensuring compliance with the Australian Accounting Standard AASB 15 through detailed compliance reporting.  ",
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
      "A Stack Overflow clone, Web-based platform that allows users to search, read, publish and answer progaramming question, providing a convenient and efficient way to solve programming problems. Planned features indlude Badge system, Integrating AI generated answers, recommendation system ",
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
    image: devoverflow,
    source_code_link:
      "https://github.com/Nilyang404/stack_overflow_replica_nextjs",
  },
  {
    name: "Game Mods of Don't Starve Together",
    description:
      "A collection of mods developed and released while running my private game server, including economic system, shop, server load balancing, and enhancing creature AI. They are very popular in the community and have gained over 100,000 subscriptions",
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
    image: dst,
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
    image: heatmap,
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
    image: bird,
    source_code_link:
      "https://github.com/BSR-Bird-species-recognition/Bird-species-recognition-web",
  },
  {
    name: "Pal World Breeding Calculator",
    description:
      "A breeding calculator will GUI. Many people record breeding results through random combinations. This tool will help people accurately calculate the results of more than 17,000 pal breeding combinations based on game data dumps., This tool can help give all the parent combinations of a specific pal or calculate beeding result of tow pals.",
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
    image: palworld,
    source_code_link:
      "https://github.com/Nilyang404/PalWorld-Breeding-Calculator",
  },
  {
    name: "Universal DNS Resolver and Client",
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
    image: dns,
    source_code_link:
      "https://github.com/Nilyang404/Universal-DNS-Resolver-and-Client",
  },
];

export { services, technologies, experiences, testimonials, projects };
