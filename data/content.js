export const bio = `Hey! I'm Mito, a dependable web developer. I have been coding professionally for over a year, and amateurly for over four years. I am always eager to learn new technologies and techniques. My primary focus has been on front-end development, but I also have experience with back-end technologies. Through the development of various projects, I have found new ways to improve efficiency and sustainability.`;

export const skills = [
  { title: "HTML", color: "orange", iconClass: "devicon-html5-plain" },
  { title: "CSS", color: "blue", iconClass: "devicon-css3-plain" },
  {
    title: "JavaScript",
    color: "yellow",
    iconClass: "devicon-javascript-plain",
  },
  { title: "TypeScript", color: "blue", iconClass: "devicon-typescript-plain" },
  { title: "Git", color: "blackAlpha", iconClass: "devicon-git-plain" },
  { title: "MongoDB", color: "green", iconClass: "devicon-mongodb-plain" },
  { title: "Express", color: "gray", iconClass: "devicon-express-original" },
  { title: "React", color: "blue", iconClass: "devicon-react-original" },
  { title: "NodeJS", color: "green", iconClass: "devicon-nodejs-plain" },
];

export const projects = [
  {
    id: 1,
    title: "Statboard",
    code: "https://github.com/Mito9999/statboard",
    url: "https://statboard.vercel.app/",
    description:
      "The one place to view all of your information from various sources!",
    image: {
      src: "/statboard.png",
      width: "1050px",
      height: "669px",
    },
    story:
      "I built this application to boost my productivity and gain insight into my goals. I wanted a way to track how well I was doing over time, and learn some useful technologies along the way.",
    tech: ["React.js", "JavaScript", "Styled Components", "CSS", "APIs"],
  },
  {
    id: 2,
    title: "Dyftd",
    code: "https://github.com/Mito9999/dyftd",
    url: "https://dyftd.vercel.app/",
    description: "Did you feed the dog? Collaborative toggles.",
    image: {
      src: "/dyftd.png",
      width: "1077px",
      height: "769px",
    },
    story:
      "My first experience with the MERN(T) Stack. User Experience was my main goal in mind, so I  made the application as smooth as possible with clean animations and consistency. After getting one of my MongoDB certificates, I reimplemented and restructured the backend for scalability. This project was originially built with Create React App (Express + Node), but was migrated to Next.js (Serverless).",
    tech: ["React.js", "TypeScript", "Chakra UI", "MongoDB", "Next.js"],
  },
  {
    id: 3,
    title: "Rewards",
    code: "https://github.com/Mito9999/slots-app",
    description: "User-customizable tier based reward system",
    image: {
      src: "/rewards.png",
      width: "950px",
      height: "525px",
    },
    story:
      "In order to put my newly acquired React skills to the test, I worked with a client to quickly build a Minimum Viable Product to their specification.",
    tech: ["React.js", "Electron.js", "CSS"],
  },
  {
    id: 4,
    title: "Feed",
    code: "https://github.com/Mito9999/feed",
    url: "https://my-feed.netlify.app/",
    description: "A customizable display of your most important media.",
    image: {
      src: "/feed.png",
      width: "1059px",
      height: "889px",
    },
    story:
      "This was my first TypeScript and Chakra UI experience. I learned a lot about both of these technologies through the creation of this project and its features. In order to create a truly customizable feed, I had to become efficient at consuming APIs. While creating the infinite scrolling feature, I learned about optimizing components for performance and compatibility.",
    tech: ["React.js", "TypeScript", "Chakra UI", "APIs"],
  },
  {
    id: 5,
    title: "Money Tracker",
    code: "https://github.com/Mito9999/moneytracker",
    description: "An easy way to visualize your spending and savings habits!",
    story:
      "I have always been careful with money. However, this project made me see some of the areas that I could improve in, by visualizing every dollar that comes in and goes out.",
    tech: ["React.js", "TypeScript", "SCSS"],
  },
  {
    id: 6,
    title: "Cars",
    code: "https://github.com/Mito9999/cars",
    description: "A simple API for finding great deals on cars.",
    story:
      "In search of finding a good deal on a used car, I created this API + Discord Bot which gathers car deals from Craigslist and sends a message of new listings.",
    tech: ["Node.js", "Express.js", "Puppeteer", "Discord.js"],
  },
];

export const awards = [
  {
    title: "CompTIA Security+",
    date: "In Progress",
    contentColor: "red",
    content: [
      "Malware",
      "Virtualization",
      "Cloud Security",
      "Auditing",
      "Cryptography",
      "Protocols",
      "Forensics",
    ],
  },
  {
    title: "CompTIA Network+",
    date: "In Progress",
    contentColor: "red",
    content: [
      "Networking",
      "Management",
      "Security",
      "Troubleshooting",
      "Cabling",
      "Infrastructure",
      "Routing",
    ],
  },
  {
    title: "Understanding Typescript Udemy Course",
    date: "May 2021",
    contentColor: "blue",
    content: [
      "Types",
      "Generics",
      "Decorators",
      "Namespaces",
      "React.js",
      "Node.js",
    ],
  },
  {
    title: "M001: MongoDB Basics",
    date: "March 2021",
    contentColor: "green",
    content: [
      "Atlas",
      "Shell",
      "Querying",
      "CRUD Principles",
      "Operators",
      "Aggregation",
      "Indexing",
      "Data Modeling",
      "Performance",
    ],
  },
  {
    title: "Scrimba Frontend Developer Career Path",
    date: "December 2020",
    contentColor: "teal",
    content: [
      "HTML",
      "CSS",
      "JavaScript",
      "APIs",
      "Flexbox & Grid",
      "Design",
      "Git",
      "React",
      "Styled Components",
      "Firebase",
    ],
  },
  {
    title: "Scrimba React Bootcamp",
    date: "November 2020",
    contentColor: "blue",
    content: [
      "Reusability",
      "Performance",
      "Context",
      "Hooks",
      "Router",
      "Redux",
    ],
  },
  {
    title: "JavaScript Mastery Udemy Course",
    date: "June 2020",
    contentColor: "yellow",
    // description:
    //   "In this course, I learned all about coding principles and how JavaScript works. I completed this course in June of 2020, but I didn't claim the certificate until May of 2021.",
    content: [
      "JavaScript Fundamentals",
      "DOM Manipulation",
      "Events",
      "Data Structures",
      "OOP",
      "Async/Await",
      "APIs",
      "Git",
    ],
  },
  {
    title: "Introduction to Computer Science and Programming in Python (MIT)",
    date: "May 2020",
    contentColor: "orange",
    content: [
      "Data Structures",
      "Algorithms",
      "Abstraction",
      "Recursion",
      "Debugging",
      "OOP",
      "Inhertiance",
      "Efficiency",
    ],
  },
  {
    title: "CS50 (Harvard)",
    date: "May 2020",
    contentColor: "red",
    content: [
      "C",
      "Python",
      "SQL",
      "Memory Management",
      "Data Structures",
      "Algorithms",
    ],
  },
  {
    title: "Python Specialization (University of Michigan)",
    date: "April 2020",
    contentColor: "facebook",
    content: [
      "Coding Principles",
      "Python Basics",
      "Data Structures",
      "Web Scraping",
      "Databases",
      "Data Visualization",
    ],
  },
];
