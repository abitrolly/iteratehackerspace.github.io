import React from 'react';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import {Well, Table} from 'react-bootstrap';
import styled from 'styled-components';
// import styled from 'styled-components';
// import './style.css'


const coc_notes = [
  `iterate hackerspace is an inclusive society where everyone is
 welcome to discuss and learn more about technology regardless of age,
  ethnicity, gender, sexuality or religion. We want all
 participants to have an enjoyable and fulfilling experience.
 Hence, all participants are expected to behave with mutual respect, tolerance,
 encouragement in mind.`,
  `To clarify what is expected of members, everyone in iterate
   Hackerspace is obliged to follow this code of conduct. It applies to
   all of the association's physical gatherings and events,
   as well as to communication channels and other virtual activities.`,
  `Harassment includes offensive or unwanted comments
   concerning, but not limited to, gender, sexual orientation, disabilities,
   physical appearance, ethnicity or
   religion. The following actions and behaviors are cause for countermeasures to
   be taken: Sustained disruption of talks, deliberate intimidation, stalking, unwanted
   photographs or recording, inappropriate physical contact, unwelcome sexual attention,
   and pornographic pictures in public places (including slides and
   profile/avatar pictures).`,
  `The following countermeasures are to be
   expected: 1) The alleged offender may be confronted and asked to change their behavior.
   2) The alleged offender may be asked to leave the area until further notice. 3) If the behavior
   continues, the alleged offender may be prohibited from
   participating in all future events, and the incident will be reported to the
   appropriate authorities. Our main interest is to sustain a friendly and welcoming
   atmosphere for all those involved. Prohibition is a last resort.`,
];

const SocialBlock = () => {
  return (
      <div className="col-xs-5">
    <div id="social-block">
        <ul>
        <li><a data-sm="facebook" href="https://www.facebook.com/groups/410797219090898/"><i className
        ="fa fa-facebook" aria-hidden="true"></i></a></li>
        <li><a data-sm="twitter" href="https://twitter.com/iteratehckrspac"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
        </ul>
    </div>
      </div>
)};

const TopNav =() => {
  return (
	<nav id="main-nav" className="col-md-9 col-md-offset-1 col-xs-12 col-xs-offset-0">
    <ul>
	    <li><a data-scroll href="#purpose">Purpose</a></li>
	    <li><a data-scroll href="#edu">Educational materials</a></li>
	    <li><a data-scroll href="#schedule">Schedule</a></li>
	    <li><a data-scroll href="#location">Location</a></li>
	    <li><a data-scroll href="#conduct">Code of Conduct</a></li>
	    <li><a href="index.html"><img src="images/lang-eng.png" alt="English Language"/></a></li>
	    <li><a href="index-am.html"><img src="images/lang-arm.png" alt="Armenian Language"/></a></li>
	  </ul>
	</nav>
  )};


const HeaderSection = ()=> {
  return(
    <header className="container ">
    <div className="row padding-top-2 padding-bottom-2" id="purpose">
	    <div className="col-md-2 col-xs-5">
	    <a href="index.html"><img src="images/logo.png" alt="iterate hackerspace logo"/></a>
	    </div>
      <SocialBlock />
      <TopNav />
    </div>
  </header>
)};

const WelcomeSection = ()=> {
  return(
    <div className="container project-title">
      <div className="row padding-top-5">
	<div className="col-md-10 col-md-offset-1">
	  <h1 className="text-center ">Welcome to hackerspace.</h1>
	  <div className="divider-line"></div>
	  <p className="large-paragraph text-center padding-bottom-2">It&#x27;s a safe place where you can use our <span className="theme-color">Debian Linux computers </span>, experiment with <span className="theme-color">open-source </span> code, learn <span className="theme-color">new technologies</span> and make new friends! </p>
	</div>
	<div className="col-md-1"></div>
      </div>
    </div>
)};

const IntroItemOne =()=> {
  return (
  <div className="col-md-3">
	  <div className="round bg-green center-div">
	    <p className="text-center white text-medium">It&#x27;s<br/><span className="bold text-large">free</span><br/>to join!</p>
	  </div>
	</div>
)};

const IntroItemTwo =()=> {
  return (
	<div className="col-md-5 padding-top-2">
	  <div className="row">
	    <div className="col-xs-3">
	      <img src="images/chat.png" alt="Chat icon"/>
	    </div>
	    <div className="col-xs-9">
	      <p className="text-regular">Come <span className="par-link-bg"><a href="http://hyechat.herokuapp.com/">chat with us</a></span> on <em>our own</em> <b>Node.js, React.js, Websocket-powered</b> chat room running on an <b>IBM Bluemix</b> server.</p>
	      <p className="upper-link theme-color padding-top-half"><a href="https://github.com/iteratehackerspace/react-local-chat">Here&#x27;s the source code</a></p>
	    </div>
	  </div>
	</div>
)};

const IntroItemThree =()=> {
  return (
	<div className="col-md-4 padding-top-2">
	  <div className="row">
	    <div className="col-xs-3">
	      <img src="images/calendar.png" alt="calendar icon"/>
	    </div>
	    <div className="col-xs-9">
	      <p className="text-regular">Checkout <span className="par-link-bg"><a href="https://silicondzor.com"> silicondzor.com</a></span> to see <b>all tech events in Armenia </b> and to add your own 🤘</p>
	    </div>
	  </div>
	</div>
)};

const IntroSection = ()=> {
return(
    <div className="container project-title padding-bottom-7 padding-top-4">
      <div className="row">
        <IntroItemOne />
        <IntroItemTwo />
        <IntroItemThree />
      </div>
    </div>
)};

const HeaderPart = (props)=> {
  return(
  <div className="row padding-top-5">
	  <div className="col-md-10 col-md-offset-1">
	    <h2 className="text-center ">{props.cnt.title}</h2>
	    <div className="divider-line"></div>
	    <p className="text-medium text-center padding-top-half padding-bottom-2">{props.cnt.description}
      <b>{props.cnt.hlt}</b>{props.cnt.description ? '.' : ''}
      </p>
	  </div>
	  <div className="col-md-1"></div>
	</div>
)};

const lectures =
  ['Intro to Linux, shell, git',
'Intro to JavaScript',
'Node Module System & Event loop',
'Test-Driven Development',
'Networking TCP/IP & Sockets',
'UDP Multicast',
'Review',
'JavaScript Promises'
  ].map((data, idx) => {
    const page = `backend-bootcamp-english/lecture${idx + 1}.html`;
    const pic = `images/icon-${idx + 1}.png`;
    return (
      <li key={data}>
        <a href={page}>
          <img src={pic} alt=""/>
          <p className="padding-top-1">{data}</p>
        </a>
      </li>
    );
  });
  
const headerItemsLectures = {
  title: 'Educational Materials',
  description: 'Here are the lecture notes from our bootcamps'
}

const PageSectionLectures =(props)=> {
const styleString = "container  project-title padding-top-2 padding-bottom-7 " + props.bgk;
  return (
<div className={styleString}>
  <HeaderPart cnt={headerItemsLectures} />
	<div className="row">
	  <div className="col-md-12">
	    <ul className="course-box">
        {lectures}
	    </ul>
	  </div>
	</div>
</div>
)};

const EventsTable = (props)=> {

  const timeArr = ['19:00', '19:30', '20:00', '20:30'].map(
    (data)=>{
      return(
        <td key={data} className="grey">{data}</td>
      )
  });
    
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
    (data)=>{
      return(
          <tr key={data}>
      <td className="weekday">{data.substring(0, 3).toUpperCase()}</td>
      <td colSpan="6">
        <div className="course-title">{props.schedule[data]}</div>
      </td>
          </tr>
      )
  });

  return (
  <div className="col-md-7 col-md-offset-1">
    <div className="table-container">
      <table className="timetable">
      <thead>
        <tr>
          <td></td>
          <td><b>18:30</b></td>
          {timeArr}
          <td><b>21:00</b></td>
        </tr>
      </thead>
          <tbody>
            {weekDays}
          </tbody>
      </table>
    </div>
  </div>
)};

const TwoLineItem = ()=> {
  return (
  <div className="col-md-4 vertical-zigzag">
	  <p className="text-regular">The schedule is subject to change.</p>
	  <p className="text-regular">There is no formal registration process — <strong>just show up</strong>!</p>
	</div>
)};

const headerItemsSchedule = {
  title: 'Course Schedule',
  description: 'All the workshops and usage of the computers is ',
  hlt: 'free'
}

const PageSectionSchedule =(props)=> {
const styleString = "container  project-title padding-top-2 padding-bottom-7 " + props.bgk;

  return (
    <div className={styleString}>
      <HeaderPart cnt={headerItemsSchedule} />

      <div className="row padding-top-5">
        <TwoLineItem />
        <EventsTable schedule={props.schedule}/>
      </div>

    </div>
)};

const DescriptionWithLinksItem = ()=> {
  return (
      <div className="col-md-5">
    <p className="text-regular">The hackerspace is open from <b>17:00-21:00, Monday-Saturday</b>.</p>
    <p className="text-regular">We are located in <b>ISTC</b> (IBM Innovative Solutions and Technologies Center), on the sixth floor of the Linguistics Building at Yerevan State University.</p>
    <div className="padding-top-2">
      <p className="text-uppercase green"><strong><i className="fa fa-heart" aria-hidden="true"></i> Big Thank You</strong></p>
      <p className="text-regular">We want to thank <span className="par-link"><a href="http://www.istc.am/">ISTC</a></span> and <span className="par-link"><a href="http://www.eif.am/">EIF</a></span> for providing us this space and supporting us with the necessary resources.</p>
    </div>
      </div>
)};

const MapItem = (props)=> {
  return (
    <div className="col-md-6 col-md-offset-1">
      <iframe src={props.location} width="600" height="350" allowFullScreen></iframe>
	  </div>
)};

const headerItemsLocation = {
  title: 'Location'
}
const PageSectionLocation =(props)=> {
const styleString = "container  project-title padding-top-2 padding-bottom-7 " + props.bgk;

  return (
    <div className={styleString}>
      <HeaderPart cnt={headerItemsLocation} />

      <div className="row">
        <DescriptionWithLinksItem />
        <MapItem location={props.location} />
      </div>
    </div>
)};

const CodeOfConductItem = ()=> {
  return (
      <div className="row padding-top-5">
	<div className="col-md-8 col-md-offset-2">
	  <ul className="conduct">
	    <li><p className="text-regular"><strong>iterate hackerspace</strong> is an inclusive society where everyone is welcome to discuss and learn more about technology regardless of age, ethnicity, gender, sexuality or religion. We want all participants to have an enjoyable and fulfilling experience. Hence, all participants are expected to behave with mutual respect, tolerance, encouragement in mind.</p>
	    </li>

	    <li><p className="text-regular">Everyone at <strong>iterate hackerspace</strong> is obliged to follow this code of conduct. It applies to all of the association&#x27;s physical gatherings and events, as well as to communication channels and other virtual activities.</p>
	    </li>

	    <li><p className="text-regular">Harassment includes offensive or unwanted comments concerning, but not limited to, gender, sexual orientation, disabilities, physical appearance, ethnicity or religion. The following actions and behaviors are cause for countermeasures to be taken: Sustained disruption of talks, deliberate intimidation, stalking, unwanted photographs or recording, inappropriate physical contact, unwelcome sexual attention, and pornographic pictures in public places (including slides and profile/avatar pictures).</p>
	    </li>

	    <li><p className="text-regular">The following countermeasures are to be expected:</p>
	      <ol>
		<li><p className="text-regular">The alleged offender may be confronted and asked to change their behavior.</p></li>
		<li><p className="text-regular">The alleged offender may be asked to leave the area until further notice.</p></li>
		<li><p className="text-regular">If the behavior continues, the alleged offender may be prohibited from participating in all future events, and the incident will be reported to the appropriate authorities. Our main interest is to sustain a friendly and welcoming atmosphere for all those involved. Prohibition is a last resort.</p></li>
	      </ol>
	    </li>
	  </ul>
	</div>
	<div className="col-md-7 col-md-offset-1"></div>
      </div>
)};

const headerItemsConduct = {
  title: 'Code of Conduct',
  description: 'These are adapted from Gothenburg Hackerspace.'
}
const PageSectionConduct =(props)=> {
const styleString = "container  project-title padding-top-2 padding-bottom-7 " + props.bgk;

  return (
    <div className={styleString}>
      <HeaderPart cnt={headerItemsConduct} />

      <div className="row">
        <CodeOfConductItem />
      </div>
    </div>
)};

const AcknowledgmentsItem = ()=> {
  return (
    	<div className="row">
	  <div className="col-md-8 col-md-offset-2">
	    <p className="text-regular">
	      And huge appreciation and thanks to Mariam Melkumyan for
	      completely redoing this site and making it gorgeous.
	    </p>
	    <p className="text-regular">Thanks to <em>Sparik Hayrapetyan</em>, <em>Aram Gevorgyan</em> and <em>Robert Adamian</em> for helping with Armenian translations. </p>
	    <p className="padding-top-5">Built with server-side ReactJS &amp; node. Please, make pull requests on<span className="par-link"> <a href="https://github.com/iteratehackerspace/iteratehackerspace.github.io">our GitHub page</a></span>.</p>
	  </div>
	</div>
)};

const headerItemsThanks = {
  title: 'Acknowledgments'
}
const PageSectionThanks =(props)=> {
const styleString = "container  project-title padding-top-2 padding-bottom-5 " + props.bgk;

  return (
    <div className={styleString}>
      <HeaderPart cnt={headerItemsThanks} />

      <div className="row">
        <AcknowledgmentsItem />
      </div>
    </div>
)};

const GoogleAnal = `
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;
    i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-97398197-1', 'auto');
    ga('send', 'pageview');
  </script>
`
// AG TODO gives error
// const ga_markup = ReactDOMServer.renderToString(GoogleAnal);

const HomePage = ({schedule_data}) => {
  const bstrap =
        "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css";
  const google_link = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.086132529425!2d44.525368880284454!3d40.18297960298937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd4e4c4a93a9%3A0xb1a196eecbc8204e!2sInnovative+Solutions+and+Technologies+Center+(ISTC)!5e0!3m2!1sen!2s!4v1495270031654';
  const meetup_link = 'https://www.meetup.com/Professional-Programming-in-Yerevan/';
  const fb_link = 'https://www.facebook.com/groups/410797219090898/';
  const istc_link = 'http://www.istc.am/';
  const eif_link = 'http://www.eif.am/';
  const lectures =
    ['Intro to Linux, shell, git',
	'Intro to JavaScript',
	'Node Module System & Event loop',
	'Test-Driven Development',
	'Networking TCP/IP & Sockets',
	'UDP Multicast',
	'Review',
	'JavaScript Promises'
    ].map((lecture_title, idx) => {
      const page = `backend-bootcamp-english/lecture${idx + 1}.html`;
      return (
	<th key={lecture_title}>
	  <a href={page}>{lecture_title}</a>
	</th>
      );
    });
  return (
    <html>
      <head>
	<title>Armenia&#x27;s only hackerspace, in Yerevan</title>
	<link rel={"shortcut icon"} href={"favicon.ico"} />
	<link rel={"icon"} type={"image/gif"} href={"animated_favicon1.gif"} />
  <meta charSet={'utf-8'}/>
  <meta name={"Armenian hackerspace"}
  content={"Programmer Hackerspace in Yerevan, the capital of Armenia"}/>
  <meta name={"viewport"}
  content={"width=device-width, initial-scale=1"}/>
  <link rel={"stylesheet"} href={bstrap}/>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,400i,700&amp;subset=cyrillic" rel="stylesheet"/>
  <link rel="stylesheet" href="fonts/font-awesome/css/font-awesome.min.css"/>
      </head>
      <body>
        <HeaderSection />
        <WelcomeSection />
        <IntroSection />
        <PageSectionLectures bgk='bg-sky' />
        <PageSectionSchedule schedule={schedule_data} />
        <PageSectionLocation bgk='bg-sky' location={google_link} />
        <PageSectionConduct />
        <PageSectionThanks bgk='bg-sky' />
      </body>
    </html>
)};

fs.readFile('schedule.json', 'utf8', (err, data) => {
  const as_data = JSON.parse(data);
  const page = ReactDOMServer.renderToStaticMarkup(
    <HomePage schedule_data={as_data}/>
  );
  fs.writeFile('index.html', page, () => {return null;});
});
