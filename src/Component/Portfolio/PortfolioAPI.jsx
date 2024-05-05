import tindog from '../pic/tindog.png';
import drumkit from '../pic/drumkit.png';
import adviceCard from '../pic/adviceCard.png';
import urlShortener from '../pic/urlShortener.jpg';
import Hostel from '../pic/HostelComplain.jpeg';
import Eshop from '../pic/Eshop.png';
import form from '../pic/MultiStepForm.jpg';


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
        title: "Multi Step Form Frontent_Mentor Challenge",
        image: form,
        featured: "Frontend Web App",
        githublink: "https://github.com/Kumar209/Multi-Step-Form-Frontend-Mentor-Challenge",
        live_website_link: "https://kumar209.github.io/Multi-Step-Form-Frontend-Mentor-Challenge/",
        desc1: "Fontend Mentor Challenge for Multi-Step Form",
        desc2: "Technology used are ReactJs, Tailwind, React-hook-form, Redux toolkit",
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
    {
        id:5,
        category: "Web Application",
        title: "BIAS Hostel Complaint System",
        image: Hostel,
        featured: "Full Stack Web App",
        githublink: "https://github.com/Kumar209/Bias-Hostel-Complain-System",
        live_website_link: "https://bias-hostel-complaint-system.onrender.com/",
        desc1:"It is group project. We Digitilized out Hostel complain system",
        desc2: "Technology used are HTML, CSS, JavaScript, EJS, expressJs, JWT, MongoDb"
    },
    {
        id:6,
        category: "Web Application",
        title: "Ecommerce Website",
        image: Eshop,
        featured: "NextJs Web App",
        githublink: "https://github.com/Kumar209/Eshop_NextJs",
        live_website_link: "https://eshop-next-js.vercel.app/",
        desc1:"It is NexJs project. Ecommerce Website where you can buy amazing accessories , labtop, watches, etc.",
        desc2: "Technology used are ReactJS, NextJs, NextAuth, Prisma, MongoDb"
    }
];

export default Portfolio_data;