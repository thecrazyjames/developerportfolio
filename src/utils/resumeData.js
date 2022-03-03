// import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

// import Portfolio1 from '../assets/images/portfolio1.jpeg'
import { DesignServicesOutlined, DeveloperModeOutlined, EmojiObjectsTwoTone, GitHub, Language, YouTube } from '@mui/icons-material';


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
            link: 'https://www.linkedin.com/in/jamesalexandercarr/',
            text: 'James Carr Profile - LinkedIn',
            icon: <LinkedInIcon />
        },
        Github: {
            link: 'https://github.com/thecrazyjames',
            text: 'James Carr Profile - Github',
            icon: <GitHubIcon />
        }
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
            link: 'https://www.linkedin.com/in/jamesalexandercarr/',
            text: 'My LinkedIn',
            icon: <LinkedInIcon />
        },
        Github: {
            link: 'https://github.com/thecrazyjames',
            text: 'My Github',
            icon: <GitHubIcon />
        },
        Instagram: {
            link: 'https://www.instagram.com/jcarr1018/',
            text: 'My Instagram',
            icon: <InstagramIcon />
        }
    },

    aboutMe: "Hi. I'm James. I am an accomplished and self-motivated Software Engineer backed by Civil Engineering Project Management and Software Sales. \n \n My experience includes Co-creating a real-time multiplayer game on iOS and Android, Online Self-Paced Software Engineering Programs, two years of engineering software sales and seven years of Civil Engineering and Environmental design consultation. I have demonstrated expert relationship building and a unwavering focus on problem solving in all aspects of life and work. ",

    experiences: [
        {
            title: "Software Engineer",
            date: "2019 - Present",
            description: "Self taught programmer with an emphasis in Front-end Web Development. I am passionate about designing and building websites, software programs, and web-based applications. Check out the portfolio section to see my work!"
        },
        {
            title: "Civil Engineer",
            date: "2012 - 2018, 2020-2022",
            description: "CEDARVILLE Engineering Group, LLC, 2020 to 2022 \n" +
            "Edward B. Walsh & Associates, Inc. , 2015 to 2018 \n" +
            "NMP Engineering Consultants, Inc. , 2013 to 2015 \n" +
            "Advance Testing Company, Inc. , 2012 (intern) \n" +
            "Civil Engineering Project Manager for land development, stormwater, environmental, utility and municipal engineering projects. I coordinated directly with project owners, municipal officials, agency reviewers, design teams, and other engineering consultants managing all aspects of a project from design through construction. Additional activities include business development, proposal writing, managing budgets, running meetings, QA/QC, technical review of plans, calculations and reports, and technical presentations. "
        },
        {
            title: "Software Sales Engineer - Bentley Systems, Inc.",
            date: "2018 - 2020",
            description: "Participate in regular business development and sales activities; building a strong customer rapport and in-depth comprehension of client needs to successfully close software license purchases, subscriptions, and service contracts. Conduct detailed negotiations on purchases and perform consistent follow ups with existing clients and new business leads. Helped further build customer database and sales pipeline, including weekly, monthly and quarterly projections to ensure quota achievement and accurate business forecasting. Develop and launch strategic sales campaigns to educate and emphasize business value to customers"
        }
    ],

    education: [
        {
            title: "IT Support Professional, Computer and Information Sciences and Support Services - Google Certification",
            date: "2021 - 2022",
            description: "Network protocols, cloud computing, Windows operating system, Linux command line, systems administration, encryption algorithms and techniques. Troubleshooting, customer service, networking, operating systems, and security."
        },
        {
            title: "Front End Engineering - freeCodeCamp, Coursera, Scrimba, Codecedamy",
            date: "2015 - 2022",
            description: "React Basics, Advanced React, Responsive Web Design, JavaScript Algorithms and Data Structions, Front End Development Libraries, Structured Query Language (SQL), Learn SQL, Learn the Command Line, Learn Java, Learn Git & GitHub"
        },
        {
            title: "Penn State University",
            date: "2008 - 2013",
            description: "Bachelor of Science (B.S.), Civil Engineering"
        }
    ],

    services: [
        {
            title: 'Front-end Engineering',
            description: "Bridging the gap between the user and the backend",
            icon: <DeveloperModeOutlined />
        },
        {
            title: 'Web Development',
            description: "Building static and dynamic websites",
            icon: <WebOutlinedIcon />
        },
        {
            title: 'UI/UX',
            description: "Clean design patterns, and thoughtful interactions.",
            icon: <DesignServicesOutlined />
        },
        {
            title: 'Problem Solver',
            description: "Finding solutions to challenging problems",
            icon: <EmojiObjectsTwoTone />
        }
    ],

    skills: [
        {
            title: "FRONT-END",
            description: [
                "reactJS",
                "javascript",
                "Bootstrap",
                "Material UI"
            ]
        },
        {
            title: "BACK-END",
            description: [
                "nodeJS",
                "Express",
                "Python",
                "REST APIs"
            ]
        },
        {
            title: "DATA",
            description: [
                "mySQL",
                "MongoDB",
                "JSON"
            ]
        },
        {
            title: "SOURCE CONTORL",
            description: [
                "Git",
                "GitHub"
            ]
        },
    ],
    projects: [
        {
            tag: 'React',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
            title: "React Project 1",
            caption: 'A short description',
            description: "This is my project description - please feel free to reach out with any questions.",
            links: [
                {link: "https://www.google.com", icon: <YouTube />},
                {link: "https://www.google.com", icon: <GitHub />},
                {link: "https://www.google.com", icon: <Language />}
            ]
        },
        {
            tag: 'React',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
            title: "React Project 2",
            caption: 'A short description',
            description: "This is my project description - please feel free to reach out with any questions.",
            links: [
                {link: "https://www.google.com", icon: <YouTube />},
                {link: "https://www.google.com", icon: <GitHub />},
                {link: "https://www.google.com", icon: <Language />}
            ]
        },
        {
            tag: 'Python',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
            title: "Python Project 1",
            caption: 'A short description',
            description: "This is my project description - please feel free to reach out with any questions.",
            links: [
                {link: "https://www.google.com", icon: <YouTube />},
                {link: "https://www.google.com", icon: <GitHub />},
                {link: "https://www.google.com", icon: <Language />}
            ]
        },
        {
            tag: 'Java',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
            title: "Java Project 1",
            caption: 'A short description',
            description: "This is my project description - please feel free to reach out with any questions. This is my project description - please feel free to reach out with any questions. This is my project description - please feel free to reach out with any questions. This is my project description - please feel free to reach out with any questions. This is my project description - please feel free to reach out with any questions. This is my project description - please feel free to reach out with any questions. This is my project description - please feel free to reach out with any questions.",
            links: [
                {link: "https://www.google.com", icon: <YouTube />},
                {link: "https://www.google.com", icon: <GitHub />},
                {link: "https://www.google.com", icon: <Language />}
            ]
        },
    ]
}

export default resumeData