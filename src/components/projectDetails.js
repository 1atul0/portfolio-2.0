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
import portfolioDesign from "../assets/portfoliodesign.png";
import signUp from "../assets/signUp.png";

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
      "I had made this project after learning full-stack web development from Udemy by Angela Yu(Web-Development Bootcamp by Angela Yu). This is my full-stack project where I used Firebase for handle backend related work like Authentication System, Saved items on cart i.e database etc. I made this full-stack web with the help of Clever programmer(Youtube channel).",
    features: (
      <p>
        <p>1. Beautifull and responsive user-interface and user-experience</p>
        <p>2. Added Authentication System of Firebase for secure logging </p>
        <p>3. Used usestate and Redux for handling change on content.</p>
        <p>
          4. used Firebase for handle user history like:- items in user's cart
          etc.{" "}
        </p>
        <p>
          5. Added different route for different work using React Link property.
        </p>
      </p>
    ),
    frontend: "ReactJS, React Hook Form, Redux",
    backend: "Firebase",
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
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu). This is the website where you save your daily story and work list which can be save after web closed  if I connect to database.Your saved notes see here. I have created this with good Ui.This website is also user-friendly and handy to use. I have also used Material Ui in this project.",
    features: (
      <p>
        <p>1. Beautifull UI/Ux for users. </p>
        <p>2. Handle save your content using React Hook Form.</p>{" "}
        <p>3. Handle content display using React UseState property. </p>
      </p>
    ),
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
      "I had made this full-stack website during Internship in Sparks Foundation. This is my first full-stack project. In this project, you can add new customer,see all customers and all transactions history. You can send money from one customer to another customer and its directely updated to database. I used mongodb for my database.",
    features: (
      <p>
        <p>1. Created a Beautifull Ui for Users.</p>
        <p>2. Added new Account opening form in first page.</p>
        <p>3. some navigation to check different things like- customers, transactions, contact and transactions history . </p>
        <p>4. All information is saved in database (MongoDB)</p>
        <p>see all existing customers. </p>
        <p>5.you can only  make valid transactions and transactions history is saved in database. </p>
      </p>
    ),
    frontend: "HTML, CSS, JavaScript, EJS, Bootstrap",
    backend: "Nodejs, ExpressJs, MongoDB",
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
      "I have made this authentication system during learning authentication from Udemy. Authentication have 6 layers.some of them are salting, hashing , session, open auth etc. I have add Open Auth which means Third-party authorisation system like Google, facebook authentication system (sign in with Google, Sign in with Facebook ) etc. For this project, first step:- You have to create Developer Id on these plateforms then use authentication features to sign in others users to using their Google,Facebook accounts. These plateforms send some information to verify users. ",
    features: (
      <p>
        <p>1. Not good Frontend</p>
        <p>2. Sing in with Google feature added.</p>
        <p>3. Sign in with Facebook feature added</p>
        <p>4. After successfull login, you have see others secret talk but their identity is anonymous.</p>
        <p>5. Same features also applied to you, You can also upload some secrets and your identity is also anonymous.</p>
    
      </p>
    ),
    frontend: "HTML, CSS, JavaScript, EJS",
    backend: "Nodejs, Expressjs, Third party Authentication",
  },
  {
    id: 4,
    title: "Portfolio Design",
    source:
      "https://www.figma.com/file/qJbsrokHR78q0EeiTgYIs0/portfolio?type=design&node-id=0%3A1&mode=design&t=PhCeQTgIINbOea3H-1",
    image: portfolioDesign,
    tag: "Design, Figma",
    teamSize: "1",
    linkStatus: "live here",
    link: "https://www.figma.com/file/qJbsrokHR78q0EeiTgYIs0/portfolio?type=design&node-id=0%3A1&mode=design&t=PhCeQTgIINbOea3H-1",
    description:
      "After learning Figma from Youtube tutorial, I build these portfolio design for my new portfolio which  I want to create in React.js. First, I made every pages and components in figma for visuals (How my new portfolio look). I had spent my lot of time to create this design. I had learnt a lot during building this design. ",
    features: (
      <p>
        <p>1. Designing in Figma Software.</p>
      </p>
    ),
    frontend: "Figma ",
    backend: "",
  },
  {
    id: 4,
    title: "SignUp Screen Design",
    source:
      "https://www.figma.com/file/yEOIUHYkCmEzZDv9WHh491/signup-screen?type=design&node-id=0%3A1&mode=design&t=PNMsvRnZ9e6sTljU-1",
    image: signUp,
    tag: "Design, Figma",
    teamSize: "1",
    linkStatus: "live here",
    link: "https://www.figma.com/file/yEOIUHYkCmEzZDv9WHh491/signup-screen?type=design&node-id=0%3A1&mode=design&t=PNMsvRnZ9e6sTljU-1",
    description:
      "After learning Figma from Youtube tutorial, I build this Sign up screen design for learning. This is my first figma design. I have cloned someone design perfectly but with another colors.",
    features: (
      <p>
        <p>1. Beautifull design in Figma Software</p>
      </p>
    ),
    frontend: "Figma ",
    backend: "",
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
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).Using this website , you can enjoy playing and listening different sounds with different key press. In this project , I learnt how to add EventListener and actually work.",
    features: <p>
      <p>1. You can play and listen your creativity during clicks on different buttons </p>
      <p>2. You can also play this sounds using marked keys.</p>
    </p>,
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
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).This is only fronted page where I used only HTML, CSS for making it. This is the cloned version of tindog website , I have added all visuals features in this project.",
    features:
      <p>
        <p>1. Created Beautifull User-Interface.</p>
        <p>2. Used diffent fonts, icons for diffent work.</p>
      </p>,
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
      "I have made this using Frontend(HTML,CSS,JS) and Backend(node.js,Express js ) I have used npm package like body-parser for getting data from 'contact us' page and used npm package nodemailer to send this data to my email. Currently this portfolio is hosted on cyclic for free version. This is the project where I learn how to build and host.  ",
    features:
     <p>
      <p> 1. I have added some creative visuals effect in first page.</p>
      <p>2. Added good and responsive navigation bar and all others elements.</p>
      <p>3. I have added almost my every information in this projects. </p>
      <p>4. Added Contact us page which is perfect working (made using nodemailer npm package)</p>
     </p>,
    frontend: "HTML, CSS, EJS, Bootsrap 5, JavaScript",
    backend: "Nodejs, Expressjs, Nodemailer npm package",
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
    backend: "Node.Js, nodemailer npm package, Express.Js",
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
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).You can calculate some expression using my this calculator website.",
    features:
    <p>
    <p>1. you can click nubmers as well as type that numbers using your keyboar</p>
    <p>2. If you type invalid character from keyboard, if typed characters is not numbers then it automatice ignore that characters.</p>
   </p>,
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
    "This is a restfull API , I have created for my Smart India Hackathon 2023 problem statement. I have chosen SIH problem statment is:- Real Time Bus Tracking System In Himachal pradesh. I have created original data with original distance gap between some cities with some bus stopes cities with their original distance and destination time. This data can be used , If I request my api to send corresponding data."
      ,
    features:
     <p>
      <p>you can click nubmers as well as type that numbers using your keyboar</p>
      <p>If you type invalid character from keyboard, if typed characters is not numbers then it automatice ignore that characters.</p>
     </p>,
    frontend: "",
    backend: "Nodejs, Expressjs, MongoDB",
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
      "This is the project I have made during learning Web Development from Udemy by Angela Yu (Web Development Bootcamp by Angela Yu).This is famous Japanese game . This game ideas is when a button is clicked automatically, you have to remember which one is glow first and which one is glow is at second number and so on. Every time you pressed correct button movement, you passed that level. ",
    features:
      <p>
        <p>1. One button is glow at random .</p>
        <p>2. at second time , button again glow and this series is saved for your turn.</p>
        <p>3. Added colors glow series in variable using JavaScript.</p>
      </p>,
    frontend: "HTML, CSS, JavaScript, Bootstrap",
    backend: "",
  },
];

export default projectDetails;
