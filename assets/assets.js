import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import mis_icon from './mis-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import zen_icon from './zen-icon.png';
import ecil_icon from './ecil-icon.png';
import cognizant_icon from './cognizant-icon.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    mis_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    zen_icon,
    ecil_icon,
    cognizant_icon
};


export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Spring, SpringBoot, Next.js, React.js, Maven, MYSQL, PostgreSQL, Mongo DB, OAuth ', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Angular', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'Tailwind CSS, CSS3, Adobe XD, Figma', link: '' },
    { icon: assets.mis_icon, title: 'Miscellaneous', description: 'Automation RPA, Salesforce, Postman, Jira, REST, SOAP, Git version control, Docker, AWS', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, C, Python, HTML, CSS, JavaScript React Js, Next Js, SQL,MYSQL, No SQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Masters in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built a few Projects' }
]

export const ExperienceData = [
    {
        title: 'Software Developer',
        company: 'ZenSpaceIT LLC, Charlotte, North Carolina',
        icon: assets.zen_icon,
        date: 'Sep 2024 - Present',
        description: [
            'Implemented secure authentication system using Clerk framework with role-based access control, reducing unauthorized access attempts by 45% and enhancing overall system security metrics.',
            'Designed scalable RESTful APIs enabling sellers to add, update, and delete products with Cloudinary-based image storage, optimizing media handling efficiency by 30%.',
            'Engineered a NoSQL database solution with MongoDB, enhancing the flexibility of the shopping cart and order tracking modules by 35% across perational workflows and user experience. ',
            'Improved frontend performance using Next.js, improving SEO rankings and reducing page load time by 50%, while ensuring structured error handling and efficient debugging. '
        ]
    },
    {
        title: 'Programmer Analyst',
        company: 'Cognizant Technology Services, India',
        icon: assets.cognizant_icon,
        date: 'Sep 2021 - Aug 2022',
        description: [
            'Engineered full-stack applications integrating React.js frontend with Spring Boot backend, optimizing RESTful API response times by 40% through efficient data transfer protocols and caching strategies ',
            'Enhanced application security by implementing OAuth 2.0 and JWT authentication, reducing unauthorized access risks by 40% and ensuring robust role-based authorization.  ',
            'Elevated system performance by leveraging Java 8 features, such as Lambda expressions and Streams API, enhancing functional programming and data processing efficiency. ',
            'Automated CI/CD workflows by containerizing applications with Docker, streamlining deployments across multiple environments and accelerating release cycles by 50%.',  
        ]
    },
    {
        title: 'Full Stack Intern',
        company: 'Cognizant Technology Services, India',
        icon: assets.cognizant_icon,
        date: 'Feb 2021 - Jul 2021',
        description: [
            'Architected the front-end of a responsive web application using modular ReactJS components and an intuitive UI/UX design, which increased user engagement by 30%. ',
            'Developed modular and reusable front-end components, reducing development time by 40% and ensuring consistency across the application. ',
            'Integrated AWS services, deploying scalable solutions with S3 for data storage and EC2 for optimized performance, improving application uptime.',
        ]
    },
    {
        title: 'Student Intern',
        company: 'ECIL , India',
        icon: assets.ecil_icon,
        date: 'May 2019 - Oct 2019',
        description: [
            'Constructed a mobile-friendly interface for farmers, leveraging HTML, CSS, and JavaScript, enabling accurate crop prediction based on real-time weather data, improving accessibility by 40% across devices.  ',
            'Developed an intuitive responsive design using Bootstrap and media queries, ensuring a seamless user experience on desktops, tablets, and mobile devices, increasing usability by 30%. ',
            'Optimized frontend performance through code splitting and lazy loading techniques, reducing page load times by 60% and improving efficiency in processing large datasets with minimal latency.',
        ]
    }
];

export const workData = [
    {
        title: 'Sentiment Analysis on Google Gemini LLM, Naive Bayes, Neural Network, and Logistic Regression',
        date: 'Mar 2024- May 2024',
        description: ['Executed sentiment analysis on the IMDB 50,000 dataset, leveraging deep learning and statistical models for text classification. ',
        'Integrated Google Gemini LLM API, achieving 95% accuracy on 1,000 reviews, optimizing model efficiency for sentiment prediction.',
        'Applied Naïve Bayes, Neural Networks, and Logistic Regression, securing 84%–87% accuracy on 2,500–5,000 reviews, validating model robustness. ',
    ]
    },
    {
        title: 'Fresno State Portal',
        date: 'Oct 2023 - Dec 2023',
        description: ['Enhanced Campus Map System with real-time location pointers, improving navigation by 40%.',
            'Optimized Class Search System, reducing enrollment time by 60% with real-time vacancy tracking.',
        ]
    },
    {
        title: 'Audit Management System',
        date: 'Jan 2020 - May 2020',
        description: ['Built a full-stack web application using Java, Spring Boot, and PostgreSQL for internal audits. ',
            '  Designed role-based authentication with JWT, ensuring secure access to audit records. ',
            ' Deployed on AWS (S3, EC2, RDS) using Docker for scalable infrastructure. ',
        ]
    },

];


export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];