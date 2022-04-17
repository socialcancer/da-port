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
        name: 'Work Day Scheduler',
        text: 'Using local storage, js, jquery, and moment.js. I created a daily planner which gives the ability to track activities within a work day.',
        technologies: 'Bootstrap, HTML, CSS, Moment, Lock Animation, JS',
        deployed: true,
        link: 'https://krutipatel07.github.io/password-generatore/',
        github: 'https://github.com/krutipatel07/password-generatore',
        description: 'The User must input text into each block and hit the lock to save to local storage. Clicking the lock once the text has been inputed will give the User the ability to edit the text once more.'
    },
    {
        id: 2,
        name: 'Git it Done',
        text: 'Started working on a web app that will search GitHub for open source projects with open issues and pull requests',
        technologies: 'JavaScript, HTML, CSS',
        deployed: true,
        link: 'https://socialcancer.github.io/06-git-it-done/',
        github: 'https://github.com/socialcancer/06-git-it-done',
        description: 'The User will have the ability to search for repos by username, filter repos by HTML, JS, and or CSS. Additionally, the User will be able to view open and not repos associated with the github user.'
    },
    {
        id: 3,
        name: 'Web-APIs-Challenge-Code-Quiz',
        text: 'Create a JS code quiz',
        technologies: 'JQuery, Bootstrap, HTML, CSS',
        deployed: true,
        link: 'https://danielcreate.com/web-api//',
        github: 'https://github.com/socialcancer/4-Web-APIs-Challenge-Code-Quiz',
        description: 'This week’s Challenge invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface.'
    },
    {
        id: 4,
        name: 'Weather Dashboard',
        text: 'Weather Dashboard which pulls in data from OpenWeather',
        technologies: 'HTML, CSS, Javascript, Node.js, Express.js',
        deployed: true,
        link: 'https://circuitapp.xyz/weather-api/',
        github: 'https://github.com/socialcancer/server-side-api',
        description: 'Weather app is an application that can be used to search for weather in different areas.'
    },
    {
        id: 5,
        name: 'Team Profile Generator',
        text: 'A profile generator',
        technologies: 'Jest, Inquirer',
        deployed: false,
        github: 'https://github.com/socialcancer/team-profile-generator',
        description: 'The Team Profile Generator is a command-line-input application that is run in Node, which requests information from the user about members of an engineering team and generates an HTML file displaying that information. Prior to running the application, the user must perform an NPM install to install all of the required dependencies.'
    },
    {
        id: 6,
        name: 'NoSQL Social Network',
        text: 'Social Network API, a REST API built with MongoDB and Mongoose.',
        technologies: 'MongoDB, Mongoose, Express.js, Node.js',
        deployed: false,
        github: 'https://github.com/socialcancer/18-NoSQL-Social-Network',
        description: 'Your challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list..'
    },
    {
        id: 7,
        name: 'Tracker Budget-O-Rama',
        text: 'Budget Tracker, a simple progressive web application to track finances.',
        technologies: 'IndexedDB, Service Workers, JavaScript',
        deployed: true,
        link: 'https://pwa-money-tracker.herokuapp.com/',
        github: 'https://github.com/socialcancer/tracker-budget-o-rama',
        description: 'The user will be able to add expenses and deposits to their budget with or without a connection.'
    },
    {
        id: 8,
        name: 'Vans',
        text: 'Vans is an American manufacturer of skateboarding shoes and related apparel, established in Anaheim.',
        technologies: 'HTML,Service Workers, SASS, Gulp, JavaScript',
        deployed: true,
        link: 'https://www.vans.com/en-us/custom-shoes',
        description: 'Managed and created bi-weekly Vans Customs campaign.'
    },
    {
        id: 9,
        name: 'Dr. Schulze American Botanical',
        text: 'E-commerce website',
        technologies: 'HTML, CSS, Ruby on Rails, MongoDB',
        deployed: true,
        link: 'https://www.herbdoc.com/',
        description: 'Dr. Schulze’s ABP, located in Marina del Rey, has helped hundreds of thousands of people create powerful health naturally.  Our craft is our product and this focus has elevated us to being one of the top leaders in the natural health and wellness industry.'
    },

];

// adds images to projects array
projects.forEach((project, i) => {
    i < 9 ?
        project.image = images[`0${i + 1}.png`].default :
        project.image = images[`${i + 1}.png`].default
});

// displays newest projects first
projects.reverse();
