import React, { Component } from 'react';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';

import lectures_en from './lib/bootcamps/frontend/lectures-en';
// import lecture_am from './lib/bootcamps/frontend/lectures-am';
import make_lecture from './lib/slides';

const LectureSlide = ({title, content, step}) => {
  const inner = content.map(c => {
    const content = typeof c === 'string' ?
          <p key={c.slice(0, 10)}>{c}</p> :
          <pre key={c.code.slice(0, 10)}>{c.code}</pre>;
    return content;
  });
  return (
	  <section>
	    <h4>{title} <meter min={"0"} max={"100"} value={step}/></h4>
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
	  <p style={{textDdecoration: 'underline'}}>ISTC -- Yerevan, Armenia</p>
	  <p>By Edgar Aroutiounian</p>
	  <p>Progress: <meter min={'0'} max={'100'} value={'0'}/></p>
	</section>
);


const build_lectures = (lectures, language) => {

  const compiled_lectures = lectures.map((lecture, idx) => {
    const title_slide = ReactDOMServer.renderToStaticMarkup(
      <TitleSlide lecture_name={lecture.name} byline={lecture.byline}/>
    );
    const slides = lecture.slides.map((slide, idx) => {
      const compiled_slide = ReactDOMServer.renderToStaticMarkup(
        <LectureSlide step={idx + 7} title={slide.title} content={slide.content}/>
      );
      return compiled_slide;
    });

    return make_lecture(lecture.name, title_slide, slides);

  });

  try { fs.mkdirSync('frontend-bootcamp'); }
  catch (e) { }

  compiled_lectures.forEach((slide, index) => {

    try { fs.mkdirSync(`frontend-bootcamp/lecture-${index + 1}`); }
    catch (e) {}

    fs.writeFileSync(`frontend-bootcamp/lecture-${index + 1}/index.html`, slide);
  });

};

build_lectures(lectures_en, 'en');
