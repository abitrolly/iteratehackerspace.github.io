'use strict';
const React = require('react'),
      fs = require('fs'),
      ReactDOMServer = require('react-dom/server'),
      JumboTron = require('react-bootstrap').Jumbotron,
      PageHeader = require('react-bootstrap').PageHeader,
      Well = require('react-bootstrap').Well,
      Table = require('react-bootstrap').Table;

class EventsTable extends React.Component {
  render () {
    return (
      <div className="table-responsive">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.schedule.Monday}</td>
              <td>{this.props.schedule.Tuesday}</td>
              <td>{this.props.schedule.Wednesday}</td>
              <td>{this.props.schedule.Thursday}</td>
              <td>{this.props.schedule.Friday}</td>
              <td>{this.props.schedule.Saturday}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
};

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

class HomePage extends React.Component {
  render () {
    let bstrap =
  "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css";
    let google_link = 'https://www.google.com/maps/place/\
IBM+Innovative+Solutions+and+Technologies+Center/@40.183162,\
44.5242933,17z/data=!3m1!4b1!4m5!3m4!1s0x406abd4e4c4a93a9:\
0xb1a196eecbc8204e!8m2!3d40.183162!4d44.526482';
    let meetup_link = 'https://www.meetup.com/Professional-Programming-in-Yerevan/';
    let fb_link = 'https://www.facebook.com/groups/410797219090898/';
    let istc_link = 'http://www.istc.am/';
    let eif_link = 'http://www.eif.am/';
    return (
      <html>
        <head>
          <meta charSet={'utf-8'}></meta>
          <link rel={"stylesheet"} href={bstrap}/>
        </head>
        <body>
          <div className="container">
            <PageHeader style={{paddingLeft: '1rem'}}>
              iterate hackerspace <small> in Yerevan, Armenia</small>
            </PageHeader>
            <Well style={{marginLeft: '1rem', marginRight: '1rem'}}>
              The hackerspace is a safe place where you can come and
              use our Debian Linux computers, experiment with open-source code,
              learn new technologies and make new friends!
              <br/>
              <br/>
              Հաքերսփեյս֊ը հուսալի վայր է, որտեղ կարող եք օգտվել մեր
              Debian Linux֊ով համակարգիչներից, ձեռք բերել open-source֊ի
              հետ աշխատելու փորձ, սովորել նոր տեխնոլոգիաներ և ձեռք բերել նոր ընկերներ
              <br/>
              <br/>
              The Hackerspace - безопасное место куда вы можете
              прийти одни или с друзьями, используя linux Debian
              машины поэкспериментировать с открытым исходным кодом,
              изучить новейшие технологии а также завести новых друзей
            </Well>
            <Well style={{marginLeft: '1rem', marginRight: '1rem'}}>
              The hackerspace is open from 9am-9pm, Monday through Saturday, and is
              located in ISTC (IBM Innovative Solutions and Technologies Center), on
              the sixth floor of the Linguistics Building at
              Yerevan State University: <a href={google_link}>Location</a>.
              Meetups are posted <a href={meetup_link}>here</a> and this is our
              <a href={fb_link}> Facebook group</a>. Thank you to
              <a href={istc_link}> ISTC </a> and <a href={eif_link}>EIF</a> for
              providing us this space and supporting us with the necessary resources.

              <br/>
              <br/>
              Հաքերսփեյս֊ը բաց է երկուշաբթիից շաբաթ՝ 9:00-21:00,
              ISTC (IBM Innovative Solutions and Technologies Center)
              ֊ի տարածքում՝ ԵՊՀ լեզվաբանության մասնաշենքի 6֊րդ հարկում։ Սա մեր
              <a href={fb_link}> ֆեյսբուքյան խումբն</a> է, որտեղ նույնպես
              տեղադրվում են հանդիպումների մասին տեղեկությունները։
              Շնորհակալություն <a href={istc_link}> ISTC </a>
              ֊ին և <a href={eif_link}>EIF</a>-ին
              Հաքերսփեյսի տարածքը տրամադրելու և անհրաժեշտ ռեսուրսներով աջակցելու համար։
              <br/>
              <br/>
              The Hackerspace  открыт с 9 утра до 9 вечера,
              с понедельника по субботу, территориалльно находится в
              ISTC (...) на 6 ом этаже, здания
              Linguistics около ЕГУ. Наша <a href={fb_link}>facebook группа </a>
              называется iterate в котором сообщается о каждой новой встрече.
              Спасибо <a href={istc_link}> ISTC </a> и <a href={eif_link}>EIF </a>
              за предоставление места, поддержку и всех необходимых ресурсов
            </Well>
            <Well style={{marginLeft: '1rem', marginRight: '1rem'}}>
              Subject to change, we have free workshops starting at 18:30.
              They usually last until around 20:40. There is no formal registration
              process, although signup on the specific Meetup date
              <a href={meetup_link}> here</a> is much appreciated.
              <br/>
              <br/>
              <EventsTable schedule={this.props.schedule_data}/>
            </Well>
            <Well style={{marginLeft: '1rem', marginRight: '1rem'}}>
              Code of Conduct: (adapted from Gothenburg Hackerspace)
              <br/>
              <br/>
              <ul>
                <li>
                  {coc_notes[0]}
                </li>
                <li>
                  {coc_notes[1]}
                </li>
                <li>
                  {coc_notes[2]}
                </li>
                <li>
                  {coc_notes[3]}
                </li>
              </ul>
            </Well>
            <Well style={{marginLeft: '1rem', marginRight: '1rem'}}>
              Special thanks to Sparik Hayrapetyan, Aram Gevorgyan and Robert Adamian
              for helping with Armenian & Russian translations.
              <br/>
              <br/>
              Built with server-side ReactJS & node; pull requests can be made
              <a
                href={'https://github.com/iteratehackerspace/iteratehackerspace.github.io'}>
               &#160;here</a>
            </Well>
          </div>
        </body>
      </html>
    );
  }
};

fs.readFile('schedule.json', 'utf8', (err, data) => {
  let as_data = JSON.parse(data);
  fs.writeFile('index.html',
               ReactDOMServer.renderToStaticMarkup(<HomePage schedule_data={as_data}/>));
});
