/** Edgar Aroutiounian, twitter.com/@edgararout */

import React, { Component } from "react";
import fs from "fs";
import ReactDOMServer from "react-dom/server";

import lectures_en from "./lib/bootcamps/frontend/lectures-en";
import lectures_am from "./lib/bootcamps/frontend/lectures-am";
import make_lecture from "./lib/slides";

const LectureSlide = ({ title, content, step }) => {
  const inner = content.map(c => {
    let content = null;
    // Hack of Math.random to force unique keys, NEVER DO THIS in non static context
    if (typeof c === "string")
      content = <p key={`${c.slice(10, 30)}${Math.random()}`}>{c.trim()}</p>;
    else if (c.code !== undefined)
      content = (
        <pre key={`${c.code.slice(10, 30)}${Math.random()}`}>
          <code className={"javascript hljs"}>{c.code.trim()}</code>
        </pre>
      );
    else if (c.link !== undefined)
      content = (
        <a key={`${c.link.slice(10, 30)}${Math.random()}`} href={c.link}>
          {c.link}
        </a>
      );
    else throw new Error("Unknown input", JSON.stringify(c));
    return content;
  });
  return (
    <section>
      <h4>{title} <meter min={"0"} max={"100"} value={`${step}`} /></h4>
      <hr />
      {inner}
    </section>
  );
};

const TitleSlide = ({ lecture_name, byline }) =>
  <section className={"title-slide"}>
    <h1 style={{ fontSize: "xx-large" }}>{lecture_name}</h1>
    <hr />
    <p>{byline}</p>
    <p style={{ textDecoration: "underline" }}>
      <a href={"http://istc.am/en/"}>
        Innovative Solutions and Technologies Center
      </a>(ISTC)
    </p>
    <p style={{ textDecoration: "underline" }}>Yerevan, Armenia</p>
    <p style={{ fontStyle: "italic" }}>
      By <a href={"https://twitter.com/edgararout"}>Edgar Aroutiounian</a>,
      Summer 2017
    </p>
    <p>Progress: <meter min={"0"} max={"100"} value={"0"} /></p>
  </section>;

const build_lectures = (lectures, lang) => {
  const compiled_lectures = lectures.map((lecture, idx) => {
    const title_slide = (
      <TitleSlide lecture_name={lecture.name} byline={lecture.byline} />
    );

    const total = lecture.slides.length;

    const slides = lecture.slides.map((slide, idx) =>
      <LectureSlide
        key={slide.content}
        step={idx / total * 100}
        title={slide.title}
        content={slide.content}
      />
    );
    const all_slides = (title, slides) =>
      <div className={"slides"}>{title}{slides}</div>;
    return make_lecture(
      lecture.name,
      ReactDOMServer.renderToStaticMarkup(all_slides(title_slide, slides))
    );
  });

  const path = `frontend-bootcamp-${lang === "en" ? "english" : "armenian"}`;

  try {
    fs.mkdirSync(path);
  } catch (e) {}

  compiled_lectures.forEach((slide, index) => {
    try {
      fs.mkdirSync(`${path}/lecture-${index + 1}`);
    } catch (e) {}

    fs.writeFileSync(`${path}/lecture-${index + 1}/index.html`, slide);
  });
};

build_lectures(lectures_en, "en");
// build_lectures(lectures_am, "am");
