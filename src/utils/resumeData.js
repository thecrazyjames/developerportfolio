// import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from "@mui/icons-material/Instagram";

import WebOutlinedIcon from "@mui/icons-material/WebOutlined";

// import Portfolio1 from '../assets/images/portfolio1.jpeg'
import {
  Apple,
  DesignServicesOutlined,
  DeveloperModeOutlined,
  EmojiObjectsTwoTone,
  GitHub,
  Language,
  YouTube,
} from "@mui/icons-material";

const resumeData = {
  name: "James Carr",
  title: "Software Engineer",

  birthday: "18th October 1989",

  email: "jamescarr1018@gmail.com",
  job: "Front-end Engineer",
  address: "Greater Philadelphia",
  phone: "610-310-8902",

  profilesocials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/jamesalexandercarr/",
      text: "James Carr Profile - LinkedIn",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/thecrazyjames",
      text: "James Carr Profile - Github",
      icon: <GitHubIcon />,
    },
  },

  socials: {
    // Facebook: {
    //     link: 'https://facebook.com',
    //     text: 'JamesIsCoding',
    //     icon: <FacebookIcon />
    // },
    // Twitter: {
    //     link: 'https://twitter.com/thecrazyjames',
    //     text: 'My twitter',
    //     icon: <TwitterIcon />
    // },
    Linkedin: {
      link: "https://www.linkedin.com/in/jamesalexandercarr/",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/thecrazyjames",
      text: "My Github",
      icon: <GitHubIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com/jcarr1018/",
      text: "My Instagram",
      icon: <InstagramIcon />,
    },
  },

  aboutMe:
    "Hi. I'm James. I am an accomplished and self-motivated Software Engineer backed by Civil Engineering Project Management and Software Sales. \n \n My experience includes Co-creating a real-time multiplayer game on iOS and Android, Online Self-Paced Software Engineering Programs, two years of engineering software sales and seven years of Civil Engineering and Environmental design consultation. I have demonstrated expert relationship building and an unwavering focus on problem solving in all aspects of life and work. ",

  experiences: [
    {
      title: "Software Engineer",
      date: "2019 - Present",
      description:
        "Self taught programmer with an emphasis in Front-end Web Development. I am passionate about designing and building websites, software programs, and web-based applications. Check out the portfolio section to see my work!",
    },
    {
      title: "Civil Engineer",
      date: "2012 - 2018, 2020-2022",
      description:
        "CEDARVILLE Engineering Group, LLC, 2020 to 2022 \n" +
        "Edward B. Walsh & Associates, Inc. , 2015 to 2018 \n" +
        "NMP Engineering Consultants, Inc. , 2013 to 2015 \n" +
        "Advance Testing Company, Inc. , 2012 (intern) \n" +
        "Civil Engineering Project Manager for land development, stormwater, environmental, utility and municipal engineering projects. I coordinated directly with project owners, municipal officials, agency reviewers, design teams, and other engineering consultants managing all aspects of a project from design through construction. Additional activities include business development, proposal writing, managing budgets, running meetings, QA/QC, technical review of plans, calculations and reports, and technical presentations. ",
    },
    {
      title: "Software Sales Engineer - Bentley Systems, Inc.",
      date: "2018 - 2020",
      description:
        "Participate in regular business development and sales activities; building a strong customer rapport and in-depth comprehension of client needs to successfully close software license purchases, subscriptions, and service contracts. Conduct detailed negotiations on purchases and perform consistent follow ups with existing clients and new business leads. Helped further build customer database and sales pipeline, including weekly, monthly and quarterly projections to ensure quota achievement and accurate business forecasting. Develop and launch strategic sales campaigns to educate and emphasize business value to customers",
    },
  ],

  education: [
    {
      title:
        "IT Support Professional, Computer and Information Sciences and Support Services - Google Certification",
      date: "2021 - 2022",
      description:
        "Network protocols, cloud computing, Windows operating system, Linux command line, systems administration, encryption algorithms and techniques. Troubleshooting, customer service, networking, operating systems, and security.",
    },
    {
      title:
        "Front End Engineering - freeCodeCamp, Coursera, Scrimba, Codecedamy",
      date: "2015 - 2022",
      description:
        "React Basics, Advanced React, Responsive Web Design, JavaScript Algorithms and Data Structions, Front End Development Libraries, Structured Query Language (SQL), Learn SQL, Learn the Command Line, Learn Java, Learn Git & GitHub",
    },
    {
      title: "Penn State University",
      date: "2008 - 2013",
      description: "Bachelor of Science (B.S.), Civil Engineering",
    },
  ],

  services: [
    {
      title: "Front-end Engineering",
      description: "Bridging the gap between the user and the backend",
      icon: <DeveloperModeOutlined />,
    },
    {
      title: "Web Development",
      description: "Building static and dynamic websites",
      icon: <WebOutlinedIcon />,
    },
    {
      title: "UI/UX",
      description: "Clean design patterns, and thoughtful interactions.",
      icon: <DesignServicesOutlined />,
    },
    {
      title: "Problem Solver",
      description: "Finding solutions to challenging problems",
      icon: <EmojiObjectsTwoTone />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["reactJS", "javascript", "Bootstrap", "Material UI"],
    },
    {
      title: "BACK-END",
      description: ["nodeJS", "Express", "Python", "REST APIs"],
    },
    {
      title: "DATA",
      description: ["mySQL", "MongoDB", "JSON"],
    },
    {
      title: "SOURCE CONTORL",
      description: ["Git", "GitHub"],
    },
  ],
  projects: [
    {
      tag: "Mobile",
      image:
        "https://storage.googleapis.com/production-bluehost-v1-0-9/339/375339/P2I3e9lg/57884dd5e4c241019220ac425347cd71",
      title: "TALOS: Brawl Masters",
      caption: "2D Platform Fighting Game",
      description:
        "Smash your way to the top in this super real-time brawler! Enter the TALOS arena. BRAWL to become champion. Be MASTERS of your favorite characters..",
      links: [
        {
          link: "https://www.youtube.com/watch?v=sP35gjtKAJI",
          icon: <YouTube />,
        },
        {
          link: "https://apps.apple.com/us/app/talos-brawl-masters/id1316313000",
          icon: <Apple />,
        },
      ],
    },
    {
      tag: "React",
      image: "https://i.ytimg.com/vi/OL8dpUxKsVk/maxresdefault.jpg",
      title: "Meme Generator",
      caption: "Create your own Meme Image with text",
      description:
        "Please use this meme generation tool to create funny pictures to share with family and friends. Use the image randomizer from the top 100 meme images API to come up with ideas or upload your own image. Be sure to export and share with your friends!",
      links: [
        {
          link: "https://compassionate-kirch-89251f.netlify.app",
          icon: <Language />,
        },
        {
          link: "https://github.com/thecrazyjames/memegenerator",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "React",
      image:
        "https://media.istockphoto.com/photos/notepad-to-do-list-get-things-done-picture-id116772376?b=1&k=20&m=116772376&s=170667a&w=0&h=OpFAjU0MyDZG0OJTBvq7t51TrSvmwtVKeGXAaGmpZHc=",
      title: "To-Do List App",
      caption: "Make a to-do list!",
      description:
        "This to-do list app allows you to add and delete to do list items seemlessly. If you've added something you dont need or want to remove it from your list, simply click the list item to remove it. Personally I find it helpful for mapping out my day and creating grocery lists.",
      links: [
        {
          link: "https://pensive-kirch-6822a8.netlify.app",
          icon: <Language />,
        },
        {
          link: "https://github.com/thecrazyjames/reacttodoapp",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "React",
      image:
        "https://image.shutterstock.com/image-vector/hangman-game-icon-260nw-684124582.jpg",
      title: "Hang Man",
      caption:
        "Can you guess the letters in the missing word before you get hung up!",
      description:
        "This hang man app allows you to play the classic hang man game. Play as many times as you like!",
      links: [
        { link: "https://grand-lolly-c3e59d.netlify.app/", icon: <Language /> },
        { link: "https://github.com/thecrazyjames/hangman", icon: <GitHub /> },
      ],
    },
  ],
};

export default resumeData;
