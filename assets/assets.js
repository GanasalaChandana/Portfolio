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
            'Designed and developed a scalable, microservices-based e-commerce platform using Java, Spring Boot, and PostgreSQL.',
            'Built and optimized RESTful APIs & GraphQL endpoints, reducing response times by 40%.',
            'Developed a responsive UI using ReactJS, Tailwind CSS, and Redux, enhancing user experience.',
            'Implemented secure authentication & authorization with JWT, OAuth 2.0, and Spring Security.',
            'Integrated Stripe & PayPal for secure payment processing, improving checkout efficiency.',
            'Automated CI/CD pipelines with GitHub Actions & Docker, reducing deployment time by 50%.',
            'Deployed on AWS (EC2, S3, RDS, Lambda), handling 10,000+ concurrent users efficiently.',
            'Enhanced system efficiency using Redis caching, optimizing database performance.',
        ]
    },
    {
        title: 'Programmer Analyst',
        company: 'Cognizant Technology Services, India',
        icon: assets.cognizant_icon,
        date: 'Sep 2021 - Aug 2022',
        description: [
            'Developed and deployed full-stack web applications by integrating a React-based frontend with a Spring Boot backend, ensuring seamless communication through RESTful APIs. ',
            'Designed and implemented secure authentication and authorization using Spring Security OAuth 2.0 and JWT, enforcing robust access control. ',
            'Built dynamic, responsive user interfaces with React, HTML5, CSS3, and JavaScript, optimizing performance and user experience.',
            'Utilized Java 8 features, including Lambda expressions and Streams API, to enhance functional programming efficiency, optimizing data processing tasks. ',
            'Conducted Root Cause Analysis (RCA) to diagnose and resolve critical application issues, improving stability through targeted code optimizations. ',
            'Implemented Docker-based containerization, authoring Dockerfiles and managing container deployments to streamline CI/CD pipelines and ensure scalability across environments. ',
        ]
    },
    {
        title: 'Full Stack Intern',
        company: 'Cognizant Technology Services, India',
        icon: assets.cognizant_icon,
        date: 'Feb 2021 - Jul 2021',
        description: [
            'Developed a full-stack web application with an emphasis on responsive frImplemented authentication & authorization mechanisms for secure access.',
            'Created reusable components to standardize the user interface across the application. ',
            'Leveraged AWS services to deploy scalable solutions, including S3 buckets and EC2 instances.',
        ]
    },
    {
        title: 'Student Intern',
        company: 'ECIL , India',
        icon: assets.ecil_icon,
        date: 'May 2019 - Oct 2019',
        description: [
            'Designed a mobile-friendly interface for farmers to predict suitable crops based on weather conditions. ',
            'Implemented responsive design principles to ensure usability across devices. ',
        ]
    }
];

export const workData = [
    {
        title: 'Sentiment Analysis on Google Gemini LLM, Naive Bayes, Neural Network, and Logistic Regression',
        date: 'Mar 2024- May 2024',
        description: ['Performed Sentiment analysis initiative using the IMDB 50,000 dataset, showcasing deep learning and statistical analysis expertise.',
        'Utilized Google Gemini LLM API to achieve a high accuracy rate of 95% on a sample of 1,000 reviews. ',
        'Demonstrated versatility by applying Naïve Bayes, Neural Networks, and Logistic Regression algorithms, securing accuracies between 84% to 87% on samples ranging from 2,500 to 5,000 reviews. ',
        'Highlighted the efficiency of LLM in precision tasks, despite its computational intensity, underscoring the potential for AI innovation. ',
    ]
    },
    {
        title: 'Fresno State Portal',
        date: 'Oct 2023 - Dec 2023',
        description: ['Developed a comprehensive student portal for Fresno State University, streamlining access to academic resources and administrative services. ',
            'Improved Campus Map Systems by Introducing Real-Time Pointers in the maps using Adobe XD, where the user can use the maps more efficiently Customized design for the students based upon their class schedule. ',
            'Improved class search to be enrolled into and permission numbers to enroll for those classes by providing list of available classes and vacancies for the ongoing semester and the requisition for permission numbers. This enables the user accessibility as switching between the emails and the admission portal is reduced. ',
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