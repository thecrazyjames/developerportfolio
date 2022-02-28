import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


export default {
    name: "James Carr",
    title: "Full Stack Developer",

    birthday: "18th October 1989",

    email: "jamescarr1018@gmail.com",
    address: "123 test street",
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
    }
}