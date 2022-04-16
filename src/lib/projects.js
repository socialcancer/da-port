// takes the all keys from require.context and returns an array
// loops through each item of an array and populates 'images' object
// sets key name to name of image file, but replaces './' prefix
// sets value to item object
function importAll(req) {
    let images = {};
    req.keys().forEach(item => {
        images[item.replace('./', '')] = req(item)
    });

    return images;
};

// passes in assets/images/projects folder to importAll() function
const images = importAll(require.context('../assets/images/projects/thumbnails', false, /\.png$/));

// array of projects to display
export const projects = [
    {
        id: 1,
        name: 'Password Generator',
        text: 'Password Generator, my first assignment with JavaScript.',
        technologies: 'JavaScript',
        deployed: true,
        link: 'https://krutipatel07.github.io/password-generatore/',
        github: 'https://github.com/krutipatel07/password-generatore',
        description: 'The Password Generator was my first JavaScript assignment.  Upon clicking "Generate Password," the user is given a series of prompts to design the password composition.  A pool of possible password characters is created based off of user response, and the password is generated with Math.random().'
    },
    {
        id: 2,
        name: 'JavaScript Code Quiz',
        text: 'JavaScript Code Quiz, an interactive quiz that implements DOM manipulation.',
        technologies: 'JavaScript, HTML, CSS',
        deployed: true,
        link: 'https://krutipatel07.github.io/code-quiz/',
        github: 'https://github.com/krutipatel07/code-quiz',
        description: 'This quick and simple JavaScript assignment dynamically creates DOM elements to render questions and answers.  Scores are saved using local storage and can be viewed on the ranked scoreboard.'
    },
    {
        id: 3,
        name: 'Work Day Scheduler',
        text: 'Work Day Scheduler, an productivity application that utilizes JQuery and Bootstrap.',
        technologies: 'JQuery, Moment.js, Bootstrap, HTML, CSS',
        deployed: true,
        link: 'https://krutipatel07.github.io/Work-Day-Scheduler/',
        github: 'https://github.com/krutipatel07/Work-Day-Scheduler',
        description: 'Built with JQuery and Bootstrap, this Work Day Scheduler allows users to plan their 9 to 5 day.  The scheduler is updated in real time using Moment.js with the current time block being highlighted in red and future time blocks displayed in green.'
    },
    {
        id: 4,
        name: 'Weather Dashboard',
        text: 'Weather Dashboard, a weather application using the OpenWeather API.',
        technologies: 'Open Weather API, Moment.js, JavaScript, Bootstrap, HTML',
        deployed: true,
        link: 'https://krutipatel07.github.io/Weather-Dashboard/',
        github: 'https://github.com/krutipatel07/Weather-Dashboard',
        description: 'This weather application uses the OpenWeather API to display the daily and 5-day forecast of the user searched U.S. city.  Up to five of the most recently searched cities are saved.'
    },
    {
        id: 5,
        name: 'README Generator',
        text: 'README Generator, a Node.js application to generate a professional README with Inquirer.',
        technologies: 'Node.js, Inquirer.js, JavaScript',
        deployed: false,
        github: 'https://github.com/krutipatel07/README-generator',
        description: 'The README Generator is a Node.js application built with Inquirer.js.  The README Generator a professional README markdown file based on user input for desired sections.'
    },
    {
        id: 6,
        name: 'Team Profile Generator',
        text: 'Team Profile Generator, an application for creating a team roster using Node.js and Inquirer.',
        technologies: 'Node.js, Inquirer.js, Jest, JavaScript',
        deployed: false,
        github: 'https://github.com/krutipatel07/TeamProfileGenerator',
        description: 'The Team Profile Generator was an exercise in object-oriented programming and test-driven developement.  The application itself runs in Node.js and uses Inquirer.js to create a simple webpage featuring a development team\'s roster.  Tests for the application were written using Jest.'
    },
    {
        id: 7,
        name: 'Note Taker',
        text: 'Note Taker, an Express.js application for taking notes.',
        technologies: 'Express.js, Node.js, UUID, JavaScript',
        deployed: true,
        link: 'https://express-js-challenge.herokuapp.com/',
        github: 'https://github.com/krutipatel07/Note-Taker',
        description: 'Note Taker was my first Express.js assignment.  It uses POST and DELETE routes to create, edit, and delete notes from the db.json file.'
    },
    {
        id: 8,
        name: 'Employee Tracker',
        text: 'Employee Tracker, an application that allows business owners to manage employees.',
        technologies: 'MySQL, Node.js, Inquirer.js, JavaScript',
        deployed: false,
        github: 'https://github.com/krutipatel07/Employee-Tracker',
        description: 'Employee Tracker uses MySQL to track employees and their roles, departments, and salaries within a company.  The application was built in Node.js and uses Inquirer.js to allow the user to interact with the database.'
    },
    {
        id: 9,
        name: 'e-Commerce Back End',
        text: 'e-Commerce Back End, the back-end of an e-commerce site.',
        technologies: 'MySQL, Sequelize, Node.js, Express.js, JavaScript',
        deployed: false,
        github: 'https://github.com/krutipatel07/E-commerce',
        description: 'The e-Commerce Back End application was an exercise in REST APIs and CRUD operations.  The application does not have a front-end for public use, but API GET, POST, PUT, and DELETE routes are fully functional for maintaining a commerce database of products, product tags, and product categories.'
    },
    {
        id: 10,
        name: 'The Tech Blog',
        text: 'The Tech Blog, a REST API blog.',
        technologies: 'MySQL, Sequelize, Express.js, Express Sessions, Node.js, Bcrypt, Handlebars',
        deployed: true,
        link: 'https://quiet-escarpment-26240.herokuapp.com/',
        github: 'https://github.com/krutipatel07/MVC-TechBlog',
        description: 'The Tech Blog is a REST API blog created with MySQL and Sequelize.  Users can create accounts to post to the blog or comment on existing posts.  A user\'s post and comment history can be viewed from their dashboard.'
    },
    {
        id: 11,
        name: 'Social Network API',
        text: 'Social Network API, a REST API built with MongoDB and Mongoose.',
        technologies: 'MongoDB, Mongoose, Express.js, Node.js',
        deployed: false,
        github: 'https://github.com/krutipatel07/API-Social-Network',
        description: 'This Social Network API was a REST API exercise built with MongoDB and Mongoose.  It does not have a front-end for public use, but API GET, POST, PUT, and DELETE routes can be tested in clients such as Insomnia Core or Postman.'
    },
    {
        id: 12,
        name: 'Budget Tracker',
        text: 'Budget Tracker, a simple progressive web application to track finances.',
        technologies: 'IndexedDB, Service Workers, JavaScript',
        deployed: true,
        link: 'https://budget-tracker-pwa01.herokuapp.com/',
        github: 'https://github.com/krutipatel07/PWA-Budget-Tracker',
        description: 'The Budget Tracker is a progressive web application that uses IndexedDB and service workers to be fully functional offline.'
    }
];

// adds images to projects array
projects.forEach((project, i) => {
    i < 9 ?
        project.image = images[`0${i + 1}.png`].default :
        project.image = images[`${i + 1}.png`].default
});

// displays newest projects first
projects.reverse();

// same logic for showcase items below this point

const showcaseImages = importAll(require.context('../assets/images/showcase/thumbnails', false, /\.png$/));

export const showcase = [
    {
        id: 1,
        name: 'COVIINFO',
        text: 'COVIINFO?, my first group project.',
        technologies: 'JavaScript, covid-19 and news API, chart.js, HTML, Materialize',
        deployed: true,
        link: 'https://group6-uot.github.io/uot-project1-group6/',
        github: 'https://github.com/Group6-UoT/uot-project1-group6',
        description: 'COVIINFO gives the information about the covid-19 realted data. It includes the total number of the cases in the canada. It also give the information about the total vaccinated people in the city vise and provide the information abot the covide speread in world wide. The informatoon is displayed in a chart form so that easy to get the informations and also use can slect the startes in the canada and find such informations!'
    },
    {
        id: 2,
        name: 'window shoppers',
        text: 'Something Special, a buying and selling products application created with MySQL and Handlebars',
        technologies: 'Node.js, Express.js, MySQL, Sequelize, Firebase, Handlebars',
        deployed: true,
        link: 'https://project2-window-shopper.herokuapp.com/',
        github: 'https://github.com/Gr0upFour/projectTwo',
        description: 'window shoppers allow user to buy and sell their products online. In this application the chat feature also provided so that user and buyer can communicate with eachother. Also there are some other feed are in the main page, which show the latest top rating news and products so that use can get more idias about that.'
    }
];

showcase.forEach((project, i) => project.image = showcaseImages[`0${i + 1}.png`].default)