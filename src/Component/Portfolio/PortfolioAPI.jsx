import tindog from '../pic/tindog.png';
import drumkit from '../pic/drumkit.png';
import adviceCard from '../pic/adviceCard.png';
import urlShortener from '../pic/urlShortener.jpg';

const Portfolio_data = [
    {
        id: 1,
        category: "Landing Page",
        title: "Tindog",
        image: tindog,
        featured: "Frontend website",
        githublink: "https://github.com/Kumar209/TinDog",
        live_website_link: "https://kumar209.github.io/TinDog/",
        desc1: "A landing page based on a social web app for dog lovers who want to connect with other owners nearby that share a similar passion for canines.",
        desc2: "Technology used are HTML, CSS , Bootstrap",
    },
    {
        id: 2,
        category: "Web Application",
        title: "Drum kit",
        image: drumkit,
        featured: "Frontend Web App",
        githublink: "https://github.com/Kumar209/Drum-Kit",
        live_website_link: "https://kumar209.github.io/Drum-Kit/",
        desc1: "It is Web App based on Drum Set. It basically play a sound on the click of the button of respective drum.",
        desc2: "Technology used are HTML, CSS, JavaScript",
    },
    {
        id: 3,
        category: "Web Application",
        title: "Advice Card - API based web app",
        image: adviceCard,
        featured: "API based Web Application",
        githublink: "https://github.com/Kumar209/Advice-card",
        live_website_link: "https://kumar209.github.io/Advice-card/",
        desc1: "It is a Web App which generates new adivce on reloading the page or by clicking on dice. It basically uses Advice Slip API for the advice generation.",
        desc2: "Technology used are HTML, CSS, JavaScript, API",
    },
    {
        id: 4,
        category: "Web Application",
        title: "URL Shortener - API based web app",
        image: urlShortener,
        featured: "API based Web Application",
        githublink: "https://github.com/Kumar209/URL-Shortener",
        live_website_link: "https://kumar209.github.io/URL-Shortener/",
        desc1: "It is a Web App which converts your very long url into short url for easy use. It basically uses shrtCode API for the short url generation.",
        desc2: "Technology used are HTML, CSS, JavaScript, API",
    },
];

export default Portfolio_data;