/** Edgar Aroutiounian, twitter.com/@edgararout */

import React, { Component } from 'react';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';

import lectures_en from './lib/bootcamps/frontend/lectures-en';
import lectures_am from './lib/bootcamps/frontend/lectures-am';
import make_lecture from './lib/slides';

const LectureSlide = ({title, content, step}) => {
  const inner = content.map(c => {
    const content = typeof c === 'string' ?
          <p key={c.slice(0, 10)}>{c.trim()}</p> : (
            <pre key={c.code.slice(0, 10)}>
              <code className={'javascript hljs'}>{c.code.trim()}</code>
            </pre>
          );
    return content;
  });
  return (
	  <section>
	    <h4>{title} <meter min={"0"} max={"100"} value={`${step}`}/></h4>
	    <hr/>
      {inner}
	  </section>
  );
};

const TitleSlide = ({lecture_name, byline}) => (
  <section>
	  <h3>{lecture_name}</h3>
	  <hr/>
	  <p>{byline}</p>
	  <p style={{textDecoration: 'underline'}}>ISTC -- Yerevan, Armenia</p>
	  <p>By Edgar Aroutiounian</p>
	  <p>Progress: <meter min={'0'} max={'100'} value={'0'}/></p>
	</section>
);

const build_lectures = (lectures, lang) => {

  const compiled_lectures = lectures.map((lecture, idx) => {

    const title_slide =
          <TitleSlide lecture_name={lecture.name} byline={lecture.byline}/>;

    const slides = lecture.slides.map((slide, idx) => (
      <LectureSlide key={slide.content}
                    step={idx}
                    title={slide.title}
                    content={slide.content}/>
    ));

    const all_slides =
          (title, slides) => <div className={'slides'}>{title}{slides}</div>;

    return make_lecture(lecture.name,
                        ReactDOMServer.renderToStaticMarkup(all_slides(title_slide,
                                                                       slides)));
  });

  const path = `frontend-bootcamp-${lang === 'en' ? 'english' : 'armenian'}`;

  try { fs.mkdirSync(path); }
  catch (e) { }

  compiled_lectures.forEach((slide, index) => {

    try { fs.mkdirSync(`${path}/lecture-${index + 1}`); }
    catch (e) {}

    fs.writeFileSync(`${path}/lecture-${index + 1}/index.html`, slide);
  });

};

build_lectures(lectures_en, 'en');
build_lectures(lectures_am, 'am');
