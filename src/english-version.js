import React from 'react';
import {Link} from 'react-router-dom';

export default () =>
  <div>
    <header className="container ">
      <div className="row padding-top-2 padding-bottom-2" id="purpose">
        <div className="col-md-2 col-xs-5">
          <Link to="/">
            <img src="static/images/logo.png" alt="iterate hackerspace logo" />
          </Link>
        </div>
        <div className="col-xs-5">
          <div id="social-block">
            <ul>
              <li>
                <a
                  data-sm="facebook"
                  href="https://www.facebook.com/groups/410797219090898/">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a data-sm="twitter" href="https://twitter.com/iteratehckrspac">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav
          id="main-nav"
          className="col-md-9 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <ul>
            <li>
              <a data-scroll href="#purpose">
                Purpose
              </a>
            </li>
            <li>
              <a data-scroll href="#edu">
                Educational materials
              </a>
            </li>
            <li>
              <a data-scroll href="#schedule">
                Schedule
              </a>
            </li>
            <li>
              <a data-scroll href="#location">
                Location
              </a>
            </li>
            <li>
              <a data-scroll href="#conduct">
                Code of Conduct
              </a>
            </li>
            <li>
              <Link to="/">
                <img src="static/images/lang-eng.png" alt="English Language" />
              </Link>
            </li>
            <li>
              <Link to="/hayeren">
                <img src="static/images/lang-arm.png" alt="Armenian Language" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div className="container project-title">
      <div className="row padding-top-5">
        <div className="col-md-10 col-md-offset-1">
          <h1 className="text-center ">Welcome to hackerspace.</h1>
          <div className="divider-line" />
          <p className="large-paragraph text-center padding-bottom-2">
            It's a safe place where you can use our{' '}
            <span className="theme-color">Debian Linux computers </span>,
            experiment with <span className="theme-color">
              open-source{' '}
            </span>{' '}
            code, learn <span className="theme-color">
              new technologies
            </span>{' '}
            and make new friends!{' '}
          </p>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
    <div className="container project-title padding-bottom-7 padding-top-4">
      <div className="row">
        <div className="col-md-3">
          <div className="round bg-green center-div">
            <p className="text-center white text-medium">
              It's<br />
              <span className="bold text-large">free</span>
              <br />to join!
            </p>
          </div>
        </div>
        <div className="col-md-5 padding-top-2">
          <div className="row">
            <div className="col-xs-3">
              <img src="static/images/chat.png" alt="Chat icon" />
            </div>
            <div className="col-xs-9">
              <p className="text-regular">
                Come{' '}
                <span className="par-link-bg">
                  <a href="http://hyechat.herokuapp.com/">chat with us</a>
                </span>{' '}
                on <em>our own</em> <b>
                  Node.js, React.js, Websocket-powered
                </b>{' '}
                chat room running on an <b>IBM Bluemix</b> server.
              </p>
              <p className="upper-link theme-color padding-top-half">
                <a href="https://github.com/iteratehackerspace/react-local-chat">
                  Here's the source code
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 padding-top-2">
          <div className="row">
            <div className="col-xs-3">
              <img src="static/images/calendar.png" alt="calendar icon" />
            </div>
            <div className="col-xs-9">
              <p className="text-regular">
                Checkout{' '}
                <span className="par-link-bg">
                  <a href="https://silicondzor.com"> silicondzor.com</a>
                </span>{' '}
                to see <b>all tech events in Armenia </b> and to add your own 🤘
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-sky padding-bottom-7">
      <div className="container  project-title padding-top-2">
        <div className="row padding-top-5" id="edu">
          <div className="col-md-10 col-md-offset-1">
            <h2 className="text-center ">Educational Materials</h2>
            <div className="divider-line" />
            <p className="text-medium text-center padding-top-half padding-bottom-2">
              Here are the lecture notes from our bootcamps.
            </p>
          </div>
          <div className="col-md-1" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="course-box">
              <li>
                <a href="backend-bootcamp-english/lecture1.html">
                  <img src="static/images/icon-linux.png" alt />
                  <p className="padding-top-1">Intro to Linux, Shell, Git</p>
                </a>
              </li>
              <li>
                <a href="backend-bootcamp-english/lecture2.html">
                  <img src="static/images/icon-js.png" alt />
                  <p className="padding-top-1">Intro to JavaScript</p>
                </a>
              </li>
              <li>
                <a href="backend-bootcamp-english/lecture3.html">
                  <img src="static/images/icon-js2.png" alt />
                  <p className="padding-top-1">
                    Node Module System &amp; Event Loop
                  </p>
                </a>
              </li>
              <li>
                <a href="backend-bootcamp-english/lecture4.html">
                  <img src="static/images/icon-test.png" alt />
                  <p className="padding-top-1">Test-Driven Development</p>
                </a>
              </li>
              <li>
                <a href="backend-bootcamp-english/lecture5.html">
                  <img src="static/images/icon-network.png" alt />
                  <p className="padding-top-1">
                    Networking TCP/IP &amp; Sockets
                  </p>
                </a>
              </li>
              <li>
                <a href="backend-bootcamp-english/lecture6.html">
                  <img src="static/images/icon-udp.png" alt />
                  <p className="padding-top-1">UDP Multicast</p>
                </a>
              </li>
              <li>
                <a href="backend-bootcamp-english/lecture7.html">
                  <img src="static/images/icon-review.png" alt />
                  <p className="padding-top-1">Review</p>
                </a>
              </li>
              <li>
                <a href="backend-bootcamp-english/lecture8.html">
                  <img src="static/images/icon-js-promises.png" alt />
                  <p className="padding-top-1">JavaScript Promises</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container project-title padding-top-2 padding-bottom-7">
      <div className="row padding-top-5" id="schedule">
        <div className="col-md-10 col-md-offset-1">
          <h2 className="text-center ">Course Schedule</h2>
          <div className="divider-line" />
          <p className="text-medium text-center padding-top-half padding-bottom-2">
            All the workshops and usage of the computers is <b>free</b>.
          </p>
        </div>
        <div className="col-md-1" />
      </div>
      <div className="row padding-top-5">
        <div className="col-md-4 vertical-zigzag">
          <p className="text-regular">The schedule is subject to change.</p>
          <p className="text-regular">
            There is no formal registration process —{' '}
            <strong>just show up</strong>!
          </p>
        </div>
        <div className="col-md-7 col-md-offset-1">
          <div className="table-container">
            <table className="timetable">
              <tbody>
                <tr>
                  <td />
                  <td>
                    <b>18:30</b>
                  </td>
                  <td className="grey">19:00</td>
                  <td className="grey">19:30</td>
                  <td className="grey">20:00</td>
                  <td className="grey">20:30</td>
                  <td>
                    <b>21:00</b>
                  </td>
                </tr>
                <tr>
                  <td className="weekday">MON</td>
                  <td colSpan={6}>
                    <div className="course-title">
                      NSS-alive (JavaScript, Sqlite, Python)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="weekday">TUE</td>
                  <td colSpan={6}>
                    <div className="course-title">
                      NSS-alive (JavaScript, Sqlite, Python)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="weekday">WED</td>
                  <td colSpan={6}>
                    <div className="course-title">
                      Beginner Project (JavaScript + ReactJS)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="weekday">THU</td>
                  <td colSpan={6}>
                    <div className="course-title">
                      Beginner Project (JavaScript + ReactJS)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="weekday">FRI</td>
                  <td colSpan={6}>
                    <div className="course-title">Iterate Shell (C/C++)</div>
                  </td>
                </tr>
                <tr>
                  <td className="weekday">SAT</td>
                  <td colSpan={6}>
                    <div className="course-title">
                      Iterate Shell (C/C++) + Capture The Flag
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-sky padding-bottom-7">
      <div className="container project-title padding-top-2">
        <div className="row padding-top-5" id="location">
          <div className="col-md-10 col-md-offset-1">
            <h2 className="text-center ">Location</h2>
            <div className="divider-line" />
            {/* <p class="text-medium text-center padding-top-half padding-bottom-2">Here are the lecture notes from our bootcamps.</p> */}
          </div>
          <div className="col-md-1" />
        </div>
        <div className="row">
          <div className="col-md-5">
            <p className="text-regular">
              The hackerspace is open from <b>17:00-21:00, Monday-Saturday</b>.
            </p>
            <p className="text-regular">
              We are located in <b>ISTC</b> (IBM Innovative Solutions and
              Technologies Center), on the sixth floor of the Linguistics
              Building at Yerevan State University.
            </p>
            <div className="padding-top-2">
              <p className="text-uppercase green">
                <strong>
                  <i className="fa fa-heart" aria-hidden="true" /> Big Thank You
                </strong>
              </p>
              <p className="text-regular">
                We want to thank{' '}
                <span className="par-link">
                  <a href="http://www.istc.am/">ISTC</a>
                </span>{' '}
                and{' '}
                <span className="par-link">
                  <a href="http://www.eif.am/">EIF</a>
                </span>{' '}
                for providing us this space and supporting us with the necessary
                resources.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-md-offset-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.164070699225!2d44.52429331538868!3d40.18316197939299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd4e4c4a93a9%3A0xb1a196eecbc8204e!2sInnovative+Solutions+and+Technologies+Center+(ISTC)!5e0!3m2!1sen!2sus!4v1491031883044"
              width={600}
              height={350}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container project-title padding-top-2 padding-bottom-7">
      <div className="row padding-top-5" id="conduct">
        <div className="col-md-10 col-md-offset-1">
          <h2 className="text-center ">Code of Conduct</h2>
          <div className="divider-line" />
          <p className="text-medium text-center padding-top-half ">
            These are adapted from Gothenburg Hackerspace.
          </p>
        </div>
        <div className="col-md-1" />
      </div>
      <div className="row padding-top-5">
        <div className="col-md-8 col-md-offset-2">
          <ul className="conduct">
            <li>
              <p className="text-regular">
                <strong>iterate hackerspace</strong> is an inclusive society
                where everyone is welcome to discuss and learn more about
                technology regardless of age, ethnicity, gender, sexuality or
                religion. We want all participants to have an enjoyable and
                fulfilling experience. Hence, all participants are expected to
                behave with mutual respect, tolerance, encouragement in mind.
              </p>
            </li>
            <li>
              <p className="text-regular">
                Everyone at <strong>iterate hackerspace</strong> is obliged to
                follow this code of conduct. It applies to all of the
                association's physical gatherings and events, as well as to
                communication channels and other virtual activities.
              </p>
            </li>
            <li>
              <p className="text-regular">
                Harassment includes offensive or unwanted comments concerning,
                but not limited to, gender, sexual orientation, disabilities,
                physical appearance, ethnicity or religion. The following
                actions and behaviors are cause for countermeasures to be taken:
                Sustained disruption of talks, deliberate intimidation,
                stalking, unwanted photographs or recording, inappropriate
                physical contact, unwelcome sexual attention, and pornographic
                pictures in public places (including slides and profile/avatar
                pictures).
              </p>
            </li>
            <li>
              <p className="text-regular">
                The following countermeasures are to be expected:
              </p>
              <ol>
                <li>
                  <p className="text-regular">
                    The alleged offender may be confronted and asked to change
                    their behavior.
                  </p>
                </li>
                <li>
                  <p className="text-regular">
                    The alleged offender may be asked to leave the area until
                    further notice.
                  </p>
                </li>
                <li>
                  <p className="text-regular">
                    If the behavior continues, the alleged offender may be
                    prohibited from participating in all future events, and the
                    incident will be reported to the appropriate authorities.
                    Our main interest is to sustain a friendly and welcoming
                    atmosphere for all those involved. Prohibition is a last
                    resort.
                  </p>
                </li>
              </ol>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-md-offset-1" />
      </div>
    </div>
    <div className="bg-sky padding-bottom-5">
      <div className="container">
        <div className="row padding-top-5">
          <div className="col-md-10 col-md-offset-1">
            <h3 className="text-center">Acknowledgments</h3>
            <p className="text-center green">
              <i className="fa fa-heart" aria-hidden="true" />
            </p>
          </div>
        </div>
        <div className="row padding-top-2">
          <div className="col-md-8 col-md-offset-2">
            <p className="text-regular">
              And huge appreciation and thanks to Mariam Melkumyan for
              completely redoing this site and making it gorgeous.
            </p>
            <p className="text-regular">
              Thanks to <em>Sparik Hayrapetyan</em>, <em>Aram Gevorgyan</em> and{' '}
              <em>Robert Adamian</em> for helping with Armenian translations.{' '}
            </p>
            <p className="padding-top-5">
              Built with ReactJS, please, make a pull requests on<span className="par-link">
                {' '}<a href="https://github.com/iteratehackerspace/iteratehackerspace.github.io">
                  our GitHub page
                </a>
              </span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>;
