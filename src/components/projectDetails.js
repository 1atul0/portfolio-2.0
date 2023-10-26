import bank from "../assets/bank.png";
import busApi from "../assets/bus-api.png";
import amazon1 from "../assets/amazon.png";
import amazon2 from "../assets/amazon2.png";
import calculator from "../assets/calculator.png";
import authentication from "../assets/authentication.png";
import drumkit from "../assets/drumkit.png";
import keeper from "../assets/keeper.png";
import portfolio from "../assets/portfolio.png";
import portfolionew from "../assets/portfolionew.png";
import simon from "../assets/simon.png";
import tindog from "../assets/tindog.png";
import portfolioDesign from "../assets/portfoliodesign.png"
import signUp from "../assets/signUp.png"

const projectDetails = [
  {
    id: 2,
    title: "Amazon Clone",
    source: "https://github.com/1atul0/Amazon-clone",
    image: amazon1,
    tag: "clone, Authentication, Firebase, ReactJS",
    teamSize: "1",
    linkStatus: "not hosted",
    link: "#",
    description:
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).This is the website where you save your daily story and work list which can be save if I connect to database.Your saved notes see here .I have created this with good Ui.This website is also user-friendly and handy to use.",
    features:
    <p >
        <p>Handle save your story using React Hook Form.</p> <p>Handle content display using React UseState property. </p>
    </p>
      ,
    frontend: "ReactJS, React Hook Form, Redux",
    backend: "Firebase"
  },
  {
    id: 1,
    title: "Keeper App",
    source: "https://github.com/1atul0/Keeper",
    image: keeper,
    tag: "note-taking app, ReactJS",
    teamSize: "1",
    linkStatus: "not hosted",
    link: "#",
    description:
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).This is the website where you save your daily story and work list which can be save if I connect to database.Your saved notes see here .I have created this with good Ui.This website is also user-friendly and handy to use.",
    features:
    <p >
        <p>Handle save   your story using React Hook Form.</p> <p>Handle content display using React UseState property. </p>
    </p>
      ,
    frontend: "ReactJS, React Hook Form",
  },
  {
    id: 2,
    title: "Banking System App",
    source: "https://github.com/1atul0/Basic_Banking_system",
    image: bank,
    tag: "Spark Foundation, full-stack, Nodejs, MongoDB",
    teamSize: "1",
    linkStatus: "not hosted",
    link: "#",
    description:
      "Internship during the Sparks Foundation. In this project, you can add new customer,see all customers and all transactions history. You can send money from one customer to another customer and its directely updated to database. I used mongodb for my database.",
    features:
    <p >
        <p>Handle save   your story using React Hook Form.</p> <p>Handle content display using React UseState property. </p>
    </p>
      ,
    frontend: "HTML, CSS, JavaScript, EJS",
    backend:"Nodejs, ExpressJs, MongoDB",
  },
  {
    id: 2,
    title: "Authentication System",
    source: "https://github.com/1atul0/Authentication_web",
    image: authentication,
    tag: " full-stack, Nodejs, Authentication, OAuth",
    teamSize: "1",
    linkStatus: "not hosted",
    link: "#",
    description:
      "Internship during the Sparks Foundation. In this project, you can add new customer,see all customers and all transactions history. You can send money from one customer to another customer and its directely updated to database. I used mongodb for my database.",
    features:
    <p >
        <p>Handle save   your story using React Hook Form.</p> <p>Handle content display using React UseState property. </p>
    </p>
      ,
    frontend: "HTML, CSS, JavaScript, EJS",
    backend:"Nodejs, Expressjs, Third party Authentication",
  },
  {
    id: 4,
    title: "Portfolio Design",
    source: "https://www.figma.com/file/qJbsrokHR78q0EeiTgYIs0/portfolio?type=design&node-id=0%3A1&mode=design&t=PhCeQTgIINbOea3H-1",
    image: portfolioDesign,
    tag: "Design, Figma",
    teamSize: "1",
    linkStatus: "live here",
    link: "https://www.figma.com/file/qJbsrokHR78q0EeiTgYIs0/portfolio?type=design&node-id=0%3A1&mode=design&t=PhCeQTgIINbOea3H-1",
    description:
      "Internship during the Sparks Foundation. In this project, you can add new customer,see all customers and all transactions history. You can send money from one customer to another customer and its directely updated to database. I used mongodb for my database.",
    features:
    <p >
        <p>Handle save   your story using React Hook Form.</p> <p>Handle content display using React UseState property. </p>
    </p>
      ,
    frontend: "Figma ",
    backend:"",
  },
  {
    id: 4,
    title: "SignUp Screen Design",
    source: "https://www.figma.com/file/yEOIUHYkCmEzZDv9WHh491/signup-screen?type=design&node-id=0%3A1&mode=design&t=PNMsvRnZ9e6sTljU-1",
    image: signUp,
    tag: "Design, Figma",
    teamSize: "1",
    linkStatus: "live here",
    link: "https://www.figma.com/file/yEOIUHYkCmEzZDv9WHh491/signup-screen?type=design&node-id=0%3A1&mode=design&t=PNMsvRnZ9e6sTljU-1",
    description:
      "Internship during the Sparks Foundation. In this project, you can add new customer,see all customers and all transactions history. You can send money from one customer to another customer and its directely updated to database. I used mongodb for my database.",
    features:
    <p >
        <p>Handle save   your story using React Hook Form.</p> <p>Handle content display using React UseState property. </p>
    </p>
      ,
    frontend: "Figma ",
    backend:"",
  },
  {
    id: 1,
    title: "Drum Kit play",
    source: "https://github.com/1atul0/drum-kit",
    image: drumkit,
    tag: "play drum-kit using key, HTML, CSS, JS",
    teamSize: "1",
    linkStatus: "live here",
    link: "https://1atul0.github.io/drum-kit/",
    description:
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).Using this website , you can enjoy playing and listening different sounds with different key press.",
    features:
      "",
    frontend: "HTML, CSS, JS Event Handler",
  },
  {
    id: 1,
    title: "Tindog web clone",
    source: "https://github.com/1atul0/tindog-web_clone",
    image: tindog,
    tag: "Tindog landing page, HTML, CSS",
    teamSize: "1",
    linkStatus: "Live here",
    link: "https://1atul0.github.io/tindog-web_clone/",
    description:
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).This is the website where you save your daily story and work list which can be save if I connect to database.Your saved notes see here .I have created this with good Ui.This website is also user-friendly and handy to use.",
    features:
      "<p>Handle save   your story using React Hook Form<p> <p>Handle display using React UseState property ",
    frontend: "HTML, CSS, Bootstrap 4",
  },
  {
    id: 2,
    title: "Portfolio WebApp",
    source: "https://github.com/1atul0/atul-portfolio-webapp",
    image: portfolio,
    tag: "Portfolio , Full-stack ",
    teamSize: "1",
    linkStatus: "Live here",
    link: "https://1atul0.cyclic.app/",
    description:
      "I have made this using Frontend(HTML,CSS,JS) and Backend(node.js,Express js ) I have used npm package like body-parser for getting data from 'contact us' page and used npm package nodemailer to send this data to my email. Currently this portfolio is hosted on netlify for free version;",
    features:
      "<p>Handle save   your story using React Hook Form<p> <p>Handle display using React UseState property ",
    frontend: "HTML, CSS, EJS, Bootsrap 5, JavaScript",
    backend:"Nodejs, Expressjs, Nodemailer npm package"
  },
  {
    id: 2,
    title: "Portfolio 2.0 WebApp",
    source: "#",
    image: portfolionew,
    tag: "Portfolio App, ReactJS",
    teamSize: "1",
    linkStatus: "not hosted",
    link: "#",
    description:
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).This is the website where you save your daily story and work list which can be save if I connect to database.Your saved notes see here .I have created this with good Ui.This website is also user-friendly and handy to use.",
    features:
      "<p>Handle save   your story using React Hook Form<p> <p>Handle display using React UseState property ",
    frontend: "ReactJS, React Hook Form, React useState",
    backend:"Node.Js, nodemailer npm package, Express.Js"
  },
  {
    id: 1,
    title: "Calculator ",
    source: "https://github.com/1atul0/calculator",
    image: calculator,
    tag: "Calculator app, Frontend, HTML, CSS, JS",
    teamSize: "1",
    linkStatus: "Live here",
    link: "https://1atul0.github.io/calculator/",
    description:
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).This is the website where you save your daily story and work list which can be save if I connect to database.Your saved notes see here .I have created this with good Ui.This website is also user-friendly and handy to use.",
    features:
      "<p>Handle save   your story using React Hook Form<p> <p>Handle display using React UseState property ",
    frontend: "HTML, CSS, JavaScript",
  },
  {
    id: 3,
    title: "Bus-data Api",
    source: "#",
    image: busApi,
    tag: "RESTfull Api, Nodejs, MongoDB, Expressjs",
    teamSize: "1",
    linkStatus: "not hosted",
    link: "#",
    description:
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).This is the website where you save your daily story and work list which can be save if I connect to database.Your saved notes see here .I have created this with good Ui.This website is also user-friendly and handy to use.",
    features:
      "<p>Handle save   your story using React Hook Form<p> <p>Handle display using React UseState property ",
    frontend: "",
    backend:"Nodejs, Expressjs, MongoDB"
  },
  {
    id: 1,
    title: "Simon Game",
    source: "https://github.com/1atul0/simon-game",
    image: simon,
    tag: "web game, HTML, CSS,JS",
    teamSize: "1",
    linkStatus: "Live here",
    link: "https://1atul0.github.io/simon-game/",
    description:
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).This is the website where you save your daily story and work list which can be save if I connect to database.Your saved notes see here .I have created this with good Ui.This website is also user-friendly and handy to use.",
    features:
      "<p>Handle save   your story using React Hook Form<p> <p>Handle display using React UseState property ",
    frontend: "HTML, CSS, JavaScript, Bootstrap",
    backend:"",
  },
];

export default projectDetails;
