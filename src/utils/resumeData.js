// import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

// import Portfolio1 from '../assets/images/portfolio1.jpeg'
import { GitHub, Language, YouTube } from '@mui/icons-material';


const resumeData = {
    name: "James Carr",
    title: "Full Stack Developer",

    birthday: "18th October 1989",

    email: "jamescarr1018@gmail.com",
    address: "Greater Philadelphia",
    phone: "610-310-8902",

    profilesocials: {
        Linkedin: {
            link: 'https://www.linkedin.com/in/jamesalexandercarr/',
            text: 'My LinkedIn',
            icon: <LinkedInIcon />
        },
        Github: {
            link: 'https://github.com/thecrazyjames',
            text: 'My Github',
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

    aboutMe: "Accomplished, self-motivated and dynamic Software Engineer backed \
    by the Co-creating a real-time multiplayer game on iOS and Android, Online\
     Self-Paced Software Engineering Programs, two years of engineering software\
      sales and seven years of Civil Engineering and Environmental design\
       consultation. Expert relationship building and customer service and focus. \
       Proven expertise in building and nurturing client relationships resulting in \
       increased brand share and awareness. Hands-on experience has enabled the \
       development of expert organizational, analytical, and written, verbal and \
       interpersonal communication skills which help to ensure the successful \
       integration with varied personalities, cross-functional teams, and the ability \
       to quickly establish and maintain credibility",

    experiences: [
        {
            title: "Software Engineer",
            date: "2019 - Present",
            description: "Self taught programmer with an emphasis in front end web development"
        },
        {
            title: "Civil Engineer",
            date: "2012 - 2018, 2020-2022",
            description: "CEDARVILLE Engineering Group, LLC, 2020 to 2022 \n \
            Edward B. Walsh & Associates, Inc. , 2015 to 2018 \n \
            NMP Engineering Consultants, Inc. , 2013 to 2015 \n \
            Advance Testing Company, Inc. , 2012 (intern) \n \
            Civil Engineering Project Manager for land development, stormwater, environmental, utility and municipal engineering projects. I coordinate directly with project owners, municipal officials, agency reviewers, design teams, and other engineering consultants managing all aspects of a project from design through construction. Additional activities include business development, proposal writing, managing budgets, running meetings, QA/QC, technical review of plans, calculations and reports, and technical presentations. "
        },
        {
            title: "Software Sales Engineer - Bentley Systems, Inc.",
            date: "2018 - 2020",
            description: "Participate in regular business development and sales activities; building a strong customer rapport and in-depth comprehension of client needs to successful close software purchases, subscriptions, and services. Listen closely to customer needs and conduct detailed negotiations of sales or service contracts. Conduct consistent follow ups on leads generated from corporate websites, tradeshows, seminars, and collaborative sourcing efforts to further build customer database and sales pipeline, including weekly, monthly and quarterly projections to ensure quota achievement and accurate business forecasting. Develop and launch strategic sales campaigns to educate and emphasize business value to a large volume of potential leads in short periods of time. "
        }
    ],

    education: [
        {
            title: "Software Engineer",
            date: "2019 - Present",
            description: "Self taught programmer with an emphasis in front end web development"
        },
        {
            title: "Civil Engineer",
            date: "2012 - 2018, 2020-2022",
            description: "CEDARVILLE Engineering Group, LLC, 2020 to 2022 \n \
            Edward B. Walsh & Associates, Inc. , 2015 to 2018 \n \
            NMP Engineering Consultants, Inc. , 2013 to 2015 \n \
            Advance Testing Company, Inc. , 2012 (intern) \n \
            Civil Engineering Project Manager for land development, stormwater, environmental, utility and municipal engineering projects. I coordinate directly with project owners, municipal officials, agency reviewers, design teams, and other engineering consultants managing all aspects of a project from design through construction. Additional activities include business development, proposal writing, managing budgets, running meetings, QA/QC, technical review of plans, calculations and reports, and technical presentations. "
        },
        {
            title: "Software Sales Engineer - Bentley Systems, Inc.",
            date: "2018 - 2020",
            description: "Participate in regular business development and sales activities; building a strong customer rapport and in-depth comprehension of client needs to successful close software purchases, subscriptions, and services. Listen closely to customer needs and conduct detailed negotiations of sales or service contracts. Conduct consistent follow ups on leads generated from corporate websites, tradeshows, seminars, and collaborative sourcing efforts to further build customer database and sales pipeline, including weekly, monthly and quarterly projections to ensure quota achievement and accurate business forecasting. Develop and launch strategic sales campaigns to educate and emphasize business value to a large volume of potential leads in short periods of time. "
        },
    ],

    services: [
        {
            title: 'Web Development',
            description: "Building static and dynamic websites",
            icon: <WebOutlinedIcon />
        },
        {
            title: 'Web Development',
            description: "Building static and dynamic websites",
            icon: <WebOutlinedIcon />
        },
        {
            title: 'Web Development',
            description: "Building static and dynamic websites",
            icon: <WebOutlinedIcon />
        },
        {
            title: 'Web Development',
            description: "Building static and dynamic websites",
            icon: <WebOutlinedIcon />
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