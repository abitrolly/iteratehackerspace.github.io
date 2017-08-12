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
                Նպատակը
              </a>
            </li>
            <li>
              <a data-scroll href="#edu">
                Կրթական Նյութեր
              </a>
            </li>
            <li>
              <a data-scroll href="#schedule">
                Դասացուցակ
              </a>
            </li>
            <li>
              <a data-scroll href="#location">
                Հասցե
              </a>
            </li>
            <li>
              <a data-scroll href="#conduct">
                Կանոններ
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
          <h1 className="text-center ">Բարի Գալուստ Հաքերսփեյս</h1>
          <div className="divider-line" />
          <p className="large-paragraph text-center padding-bottom-2">
            Հաքերսփեյս֊ը հուսալի վայր է, որտեղ կարող եք օգտվել մեր{' '}
            <span className="theme-color">Debian Linux֊ով</span>{' '}
            համակարգիչներից, ձեռք բերել{' '}
            <span className="theme-color">open-source֊ի</span> հետ աշխատելու
            փորձ, սովորել <span className="theme-color">
              նոր տեխնոլոգիաներ
            </span>{' '}
            և ձեռք բերել նոր ընկերներ։
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
              Այս ամենն<br />
              <span className="bold text-small">անվճար է</span>
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
                Եկեք{' '}
                <span className="par-link-bg">
                  <a href="http://hyechat.herokuapp.com/">զրուցելու մեզ հետ</a>
                </span>
                <em> մեր իսկ </em> <b>
                  Node.js, React.js, Websocket-powered֊ի
                </b>{' '}
                հիման վրա ծրագրավորած զրուցարանում, որը տեղակայված է{' '}
                <b>IBM Bluemix</b> բաշխիչի վրա.
              </p>
              <p className="upper-link theme-color padding-top-half">
                <a href="https://github.com/iteratehackerspace/react-local-chat">
                  Կոդը կարող եք տեսնել այստեղ
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
                Պարբերաբար այցելելով<span className="par-link-bg">
                  <a href="https://silicondzor.com"> silicondzor.com</a>
                </span>՝ կծանոթանաք{' '}
                <b>Հայաստանում տեղի ունեցող բոլոր tech միջոցառումներին</b> կամ
                կարող եք ավելացնել ձեր սեփական միջոցառումը 🤘
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
            <h2 className="text-center ">Կրթական Նյութեր</h2>
            <div className="col-md-1" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="course-box">
                <li>
                  <a href="backend-bootcamp-armenian/lecture1.html">
                    <img src="static/images/icon-linux.png" alt />
                    <p className="padding-top-1">Intro to Linux, Shell, Git</p>
                  </a>
                </li>
                <li>
                  <a href="backend-bootcamp-armenian/lecture2.html">
                    <img src="static/images/icon-js.png" alt />
                    <p className="padding-top-1">Intro to JavaScript</p>
                  </a>
                </li>
                <li>
                  <a href="backend-bootcamp-armenian/lecture3.html">
                    <img src="static/images/icon-js2.png" alt />
                    <p className="padding-top-1">
                      Node Module System &amp; Event Loop
                    </p>
                  </a>
                </li>
                <li>
                  <a href="backend-bootcamp-armenian/lecture4.html">
                    <img src="static/images/icon-test.png" alt />
                    <p className="padding-top-1">Test-Driven Development</p>
                  </a>
                </li>
                <li>
                  <a href="backend-bootcamp-armenian/lecture5.html">
                    <img src="static/images/icon-network.png" alt />
                    <p className="padding-top-1">
                      Networking TCP/IP &amp; Sockets
                    </p>
                  </a>
                </li>
                <li>
                  <a href="backend-bootcamp-armenian/lecture6.html">
                    <img src="static/images/icon-udp.png" alt />
                    <p className="padding-top-1">UDP Multicast</p>
                  </a>
                </li>
                <li>
                  <a href="backend-bootcamp-armenian/lecture7.html">
                    <img src="static/images/icon-review.png" alt />
                    <p className="padding-top-1">Review</p>
                  </a>
                </li>
                <li>
                  <a href="backend-bootcamp-armenian/lecture8.html">
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
            <h2 className="text-center ">Դասացուցակ</h2>
            <div className="divider-line" />
            <p className="text-medium text-center padding-top-half padding-bottom-2">
              Բոլոր դասընթացները և համակարգիչների օգտագործումն <b>անվճար է</b>.
            </p>
          </div>
          <div className="col-md-1" />
        </div>
        <div className="row padding-top-5">
          <div className="col-md-4 vertical-zigzag">
            <p className="text-regular">
              Այս դասացուցակը ենթակա է փոփոխության։
            </p>
            <p className="text-regular">
              Դասերին մասնակցելու համար գրանցվելու անհրաժեշտություն չկա{' '}
              <strong>պարզապես եկեք</strong>!
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
                    <td className="weekday">Երկ</td>
                    <td colSpan={6}>
                      <div className="course-title">
                        NSS-alive (JavaScript, Sqlite, Python)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="weekday">Երեք</td>
                    <td colSpan={6}>
                      <div className="course-title">
                        NSS-alive (JavaScript, Sqlite, Python)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="weekday">Չոր</td>
                    <td colSpan={6}>
                      <div className="course-title">
                        Beginner Project (JavaScript + ReactJS)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="weekday">Հինգ</td>
                    <td colSpan={6}>
                      <div className="course-title">
                        Beginner Project (JavaScript + ReactJS)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="weekday">Ուրբ</td>
                    <td colSpan={6}>
                      <div className="course-title">Iterate Shell (C/C++)</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="weekday">Շաբ</td>
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
              <h2 className="text-center ">Հասցեն</h2>
              <div className="divider-line" />
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="text-regular">
                Հաքերսփեյսը բաց է <b>17:00-21:00, երկուշաբթի֊շաբաթ</b>.
              </p>
              <p className="text-regular">
                Մենք գտնվում ենք <b>ISTC֊ում</b> (IBM Ինովացիոն լուծումների և
                տեխնոլոգիաների կենտրոնում), Ա․ Մանուկյան 1, ԵՊՀ 7րդ մասնաշենք
                6րդ հարկ
              </p>
              <div className="padding-top-2">
                <p className="text-uppercase green">
                  <strong>
                    <i className="fa fa-heart" aria-hidden="true" /> Հայտնում
                    ենք մեր խորին շնորհակալությունը
                  </strong>
                </p>
                <p className="text-regular">
                  <span className="par-link">
                    <a href="http://www.istc.am/">ISTC֊ին</a>
                  </span>{' '}
                  և{' '}
                  <span className="par-link">
                    <a href="http://www.eif.am/">EIF֊ին</a>
                  </span>{' '}
                  մեզ տարածքով և անհրաժեշտ ռեսուրսներով ապահովելու համար։
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
            <h2 className="text-center ">Վարվեցողության Կանոնները</h2>
            <div className="divider-line" />
            <p className="text-medium text-center padding-top-half ">
              Այս կանոնները ադապտացվել են Gothenburg հաքերսփեյսից.
            </p>
          </div>
          <div className="col-md-1" />
        </div>
        <div className="row padding-top-5">
          <div className="col-md-8 col-md-offset-2">
            <ul className="conduct">
              <li>
                <p className="text-regular">
                  <strong>iterate հաքերսփեյսը</strong> հասարակության բոլոր
                  շերտերը ներառող խումբ է, որտեղ մարդիկ խրախուսվում են սովորել և
                  քննարկել տեխնոլոգիա անկախ տարիքից, ազգային ու կրոնական
                  պատկանելիությունից, սեռից ու սեռական կողմնորոշվածությունից;
                  Մենք ցանկանում ենք բոլոր մասնակիցների համար ապահովել հաճելի և
                  օգտակար փորձ։ Այս պատճառով էլ բոլոր մասնակիցներից ակնկալվում է
                  փոխադարձ հարգանքով, հանդուրժողականությամբ ու աջակցությամբ
                  վերաբերմունք։
                </p>
              </li>
              <li>
                <p className="text-regular">
                  Որպեսզի ավելի պարզ լինի, թե ինչ է ակնկալվում անդամներից՝
                  բոլորը <strong>iterate հաքերսփեյսում</strong> պարտավոր են
                  պահել վարվեցողության հետևյալ կանոնները։ Սրանք վերաբերվում են
                  թե՛ խմբի հավաքույթներին, թե՛ կապի բոլոր միջոցներին ու այլ
                  վիրտուալ իրադարձություններին։
                </p>
              </li>
              <li>
                <p className="text-regular">
                  Խախտումները ընդգրկում են վիրավորական, ոչ ցանկալի ակնարկներ
                  հետևյալ թեմաներով՝ սեռ, սեռական կողմորոշվածություն,
                  սահմանափակումներ (մտավոր կամ ֆիզիկական), տեսք, ազգային
                  պատկանելություն, կրոն։ Հետևյալ գործողությունները կստիպեն
                  ձեռնարկել համապատասխան քայլեր՝ քննարկումների,
                  խոսակցությունների խաթարում, նպատակաուղղված սպառնալիքներ, ոչ
                  ցանկալի նկարներ կամ տեսանյութեր, անտեղի ֆիզիկական կոնտակտ, ոչ
                  ցանկալի սեքսուալ ուշադրություն, պոռնոգրաֆիկ բնույթի նկարներ
                  հասարակական վայրերում (ընդգրկում է սլայդեր և սոցիալական
                  ցանցերի ավատարներ / նկարներ)։
                </p>
              </li>
              <li>
                <p className="text-regular">
                  Վերոնշյալից որևէ խախտում նկատելու դեպքում կիրականացվեն հետևյալ
                  քայլերը՝
                </p>
                <ol>
                  <li>
                    <p className="text-regular">
                      Ոչ ցանկալի գործողությունն իրականացրած անձին կխնդրենք փոխել
                      իր վարվելակերպը։
                    </p>
                  </li>
                  <li>
                    <p className="text-regular">
                      Ոչ ցանկալի գործողություններ իրականացրած անձին կխնդրենք
                      լքել տարածքը մինչև հետագա ծանուցում։
                    </p>
                  </li>
                  <li>
                    <p className="text-regular">
                      Եթե նման վարվելակերպը կրի շարունակական բնույթ, տվյալ անձին
                      կարգելվի մասնակցել բոլոր ապագա իրադարձություններին, և
                      միջադեպը կծանուցվի համապատասխան մարմիններին։ Մեր հիմնական
                      նպատակն է ստեղծել ընկերական, ջերմ մթնոլորտ բոլոր
                      մասնակիցների համար։ Արգելքը կկիրառվի միայն ծայրահեղ
                      դեպքերում։
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
              <p className="text-center green">
                <i className="fa fa-heart" aria-hidden="true" />
              </p>
            </div>
          </div>
          <div className="row padding-top-2">
            <div className="col-md-8 col-md-offset-2">
              <p className="text-regular">
                Հատուկ շնորհակալություն ենք հայտնում{' '}
                <em>Սպարիկ Հայրապետյանին</em>, <em>Արամ Գևորգյանին</em> և{' '}
                <em>Ռոբերտ Ադամյանին</em> թարգմանությունների հարցում օգնության
                համար։
              </p>
              <p className="padding-top-5">
                Կայքը ստեղծվել է server-side ReactJS &amp; node֊ի միջոցով։
                Փոփոխություններ անելու նպատակով կարող եք դիմել{' '}
                <span className="par-link">
                  {' '}<a href="https://github.com/iteratehackerspace/iteratehackerspace.github.io">
                    մեր GitHub֊ի էջին։
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
