module.exports = [
  // Lecture 0, JavaScript essentials + some essential functions
  {name: 'Essential JavaScript for React, modern Web Dev',
   byline: 'Common JavaScript idioms, an abridged whirlwind tour',
   slides: [
     // Lecture0-Slide 1
     {title: 'EcmaScript 6',
      content: [
        `Modern Web Development uses the latest versions and features of JavaScript,
which is offically known as EcmaScript`,
        `As of June 2017, most browsers support all of EcmaScript except
for the ES6 module system, aka`,
        {code: `import React, { Component } from 'react';`},
        `Technically that isn't even legal ES6 because the ES6 module loader specification
does not allow the creation of 'naked' imports, that is imports that don't
specify a specific path or URI. However in practice this doesn't really matter
because we use babel and webpack to compile
our JavaScript code into code that can run on today's browsers.
`,
        {link:'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import'},
        `Note, this lecture is going to move VERY fast and YOU MUST READ the links I post to MDN,
please look at `,
        {link:`http://iteratehackerspace.com/backend-bootcamp-english/lecture2.html`},
        `for a more comprehensive introduction to JavaScript (uses nodejs)`,
      ]},
     // Lecture0-Slide 2
     {title: 'Classes (not really, they are functions)',
      content: [
        `ES6 introduced the concept of classes, but these 'classes' are really just syntaxical
sugar on top of plain JavaScript functions.
`, {code: `
class Person {
  constructor(age, name) {this.age = age; this.name = name; }
  speak() { console.log('My name is', this.name); }
}

const friend = new Person(27, 'Ruzanna');
// This is the same as doing:
function Person(age, name) { this.age = age; this.name = name; }
Person.prototype.speak = function() { console.log('My name is', this.name); }

const acquaint = new Person(23, 'Tigran');
`}, `The benefit of using the class approach is that
1) Calling without 'new' is a TypeError exception,
2) The code looks more familiar to programmers coming from other languages`,
        {link: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes'}
      ]
     },
     // Lecture0-Slide3
     {title: 'Using prototypes',
      content: [
        `JavaScript is a prototype based language, that means that
every Object has a prototype. When we defined classes, all the 'methods' defined in the
class are functions that are created for the prototype and the properties
of the prototype (the things we access with . operator) are available for any Object
that is on that prototype chain. Having a function defined on the prototype is better for
memory usage than on each object because then we only make 1 copy of that function
rather for each instance of the object. This is a common pattern`,
        {code: `
class F {
  constructor() {
    this.speak = () => console.log('Hello world');
  }
  alternative_speak() { console.log('Hello world'); }
};
// Both a1, a2 have methods .speak and .alternative_speak
const a1 = new F;
const a2 = new F;
`}, `In this example the interpreter created only one alternative_speak function,
it is on the prototype of F, but the interpreter is forced to create two speak functions
because we have created the function (a fat arrow function) as a property created on each new
instance of F `,
        {link: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes`}
      ]},
     // Lecture0-Slide4
     {title: 'Binding context',
      content: [
        'JavaScript classes do not autobind their context, `this` object',
        'Practically speaking, that means you will often see React code that binds functions',
        {code: `
class F {
  constructor() {
    this.handler = this.handler.bind(this);
  }
  handler(e) {
    console.log(e.target.value);
  }
}
`}, `In class we showed an example of the issues of not having the right context, the
same issue comes up in React.`,
        {link: `https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this`}
      ]},
     // Lecture0-Slide5
     {title: 'static in JavaScript',
      content: [
        `The static keyword also exists in JavaScript, it creates a property on
the class object itself, not on the prototype. One library that uses this is
react-native-navigation`,
        {code: `
class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home Screen',
  });
  // the render function
}
`}, `The navigationOptions property is on the HomeScreen object,
not on the prototype of HomeScreen`,
        {link:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static`}
      ]},
     // Lecture0-Slide6
     {title: 'Object destructuring',
      content: [
        'In the previous example, this ',
        {code: `static navigationOptions = ({navigation}) => ({`},
        `might have looked strange, specifically the '({navigation})' part.
It is called object destructuring, its a way to pull out values from Objects
by key name directly. Here are some examples
`, {code: `
const foreman = {
  name: 'Gor', age: 28,
  location: 'Yerevan', profession(){ console.log(this.age, this.name); }
};
// We only pulled out name and age as variable names based on keys
const { name, age } = foreman;
console.log(name, age);
const { not_found } = foreman;
`}
      ]},
     // Show example of the profession blowing up
     // Lecture0-Slide6.5
     {title: 'Object destructuring in functions',
      content:[
        'The previous example',
        {code: `static navigationOptions = ({navigation}) => ({`},
        `Is actually an example of object destructuring in function parameters, we do this because
often times we pass Objects to function, so we might as well be able to pick out the fields right
from the beginning.`,
        {code: `
const person = {name: 'Lilit', profession: 'programmer'};
const say_profession = ({profession}) => {
  console.log('I am a ', profession);
}
say_profession(person);
`}, `Notice that we didn't have to give a name to all the fields in the object, we just
pick the key names that we care about`,
        {link: `https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment`}
      ]},
     // Lecture0-Slide7
     {title: 'Class properties',
      content: [
        `As of June 2017, Class properties are at stage-2 TC39. That means that they aren't
an official part of the EcmaScript specificiation but most likely will be. We can still use it with
the help of tools like babel, used under the hood of create-react-app`,
        {code: `
class F {
  state = { items: []};
  open_dropdown = () => {
     console.log('Some logic here');
  };
}
`}, `And that is really the same as`,
        {code: `
class F {
  constructor() {
    this.open_dropdown = () => {
      console.log('Some logic here');
    }
    this.state = { items: []};
  }
}
`}
      ]},
     // Lecture0-Slide8
     {title: 'Object spread',
      content: [
        `Another feature you'll often see is something called Object spread, this is also not
offical EcmaScript yet babel will compile it into Object.assign function calls`,
        {code: `
const professional = {name: 'Artur', langs: ['C#', 'JavaScript', 'Armenian']};
const with_more = {...professional, background: ['WebDevelopment']};

`}, `We are making a new object called with_more that is a copy of professiona, but with the
extra key background`,
        {link: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator'}
      ]},
     // Lecture0-Slide9
     {title: 'import/export in ES6',
      content: [
        `EcmaScript 2015 (ES6) finally provided the JavaScript language with a module system`,
        {code: `
// Assume this file is named funcs.js
export const f = () => console.log('Hello');
`}, `This says that this module will export something called f which we can then import and use`,
        {code: `
// Assume this file is called main.js
import { f } from './funcs';
f();
`}, `Notice that we did something that looks like object destructuring; its almost that but its not.
Also notice that there was no need to add the extension '.js'. ES6 modules are effectively
singletons, importing it multiple times in different parts of your
application does not make new 'instances' of the module`
      ]},
     // Lecture0-Slide9.5
     {title: 'import/export in ES6',
      content: [
        `Notice that we did export on that function f. Sometimes though you only want to export one
value from your module, in that case we use 'export default'`,
        {code: `
// assume this is called header.js
// Notice that it was not necessary to give the class a name
export default class extends Component {
  render() {
    return <h2>Hello World</h2>;
  }
}
`}, 'And we use it like so',
        {code: `
import call_it_anything_you_want from './header';
// Can also rename it
import * as Whatever from './header';
// renaming also works with named exports, this is usual in react-router
import { BrowserRouter as Router } from 'react-router-dom';
`}, {link: `https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export`}
      ]},
     // Lecture0-slide10
     {title: 'Promises',
      content: [
        `JavaScript coding focuses on asynchronous work, events. That means that we need a
way to say what to do in the future and the JavaScript langauge provides us
with something called Promises. A Promise is a way to defer work to the future`,
        {code: `
const promise_example = (success=true) => {
  return new Promise((accept, reject) => {
    const func = () => success
      ? accept('You waited 3 seconds, here is the data')
      // Always use an Error object, it preserves the stack
      : reject(new Error('failure'));
    setTimeout(func, 3 * 1000);
  })
}
promise_example().then(msg => console.log('Given', msg));
// Be sure to handle the errors with the .catch method
promise_example(false)
.then(msg => console.log('Given', msg));
.catch(error_handle => console.log(error_handle.message))
`},

        {link: 'https://developers.google.com/web/fundamentals/getting-started/primers/promises'}
      ]},
     // Lecture0-slide11
     {title: 'async/await',
      content: [
        `Working with Promises has one small hassle, that is that we have to
handle the .then and .catch. ES7, the next version of EcmaScript, provides new keywords
called async and await. async, await can only be used with functions and any function that
uses await must be wrapped with the async keyword. We can use this in browsers because babel
will compile the async,await into ES6 generator functions and using the yield keyword. Any function
wrapped with async returns a Promise`,
        {code: `
const load_data = async path => {
  // get a request object, fetch by default does a HTTP GET request
  const req = await fetch(path);
  // Get the HTTP body as JSON, no need to use JSON.parse
  const results = await req.json();
  return results;
}`}, `fetch is a function provided by the DOM API, (also implemented in React-Native),
that gives us the ability to download new data. fetch returns a promise so we can use
.then on the result, or we can use async/await which will 'unwrap' the promise for us`,
        {link: 'https://developer.mozilla.org/en/docs/Web/API/Fetch_API'}
      ]},
     // Lecture0-slide11.5
     {title: 'async/await error handling',
      content: [
        `async, await make asynchronous code LOOK as if it was synchronous, it
turns the .catch error from a Promise into an exception`,
        {code: `
const promise_example = (success=true) => {
  return new Promise((accept, reject) => {
    const func = () => success
      ? accept('You waited 3 seconds, here is the data')
      : reject(new Error('failure'));
    setTimeout(func, 3 * 1000);
  })
}
(async () => {
  try { await promise_example(false); }
  catch (e) { console.log(e.message); }
})()
`}, `Notice the sneaky way to do a top level async/await call since async/await can
only be used in functions`,
        {link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await'}
      ]}
   ]
  },
  // Lecture 1, introduction to React
  {name: 'Introduction to React',
   byline: 'What the browser gives us',
   slides: [
     {title: 'Purpose of React',
      content: [
        `The web browser provides us with an environment to run our
JavaScript code, of course we have the standard JavaScript objects like Array, Date,
but the browser also provides many more APIs, collectively this is called the DOM API,
where DOM stands for Document Object Model`,
        `Many of the objects and functions that the DOM provides we will use
in the front end of our web applications, for example here we used
fetch, Headers, URLSearchParams. All three are provided by the DOM and not by the
JavaScript language.`,
        {code: `
// function to get new data, remember that fetch returns a Promise
fetch('/login', {
  method: 'post',
  headers: new Headers({
    'Content-Type': 'application/json',
    Accept: 'Content-Type': 'application/json'
  }),
  body: JSON.stringify({username: 'barev', password: 'dzez'})
});
// object that helps us extract query parameters from a string, can be used as:
const params = new URLSearchParams(document.location.search)
`}]}, {title: 'What about making elements',
       content: [
        `Sometimes though using the DOM APIs directly is tedious and error prone.
for example, the API for controling and adding elements to the UI,
things like document.createElement`,
        {code:
         `
const elem = document.createElement('p');
elem.textContent = 'Hello world';
document.body.appendChild(elem);
`},
        `Of course we can build applications using the raw DOM API for making HTML
element but the DOM API is better not touched at all
and instead we use JavaScript libraries.`
      ]},
     {title: 'Getting started with React project',
      content: [
        `Getting started with React used to be a bit harder as you had to deal with
tools like webpack and babel. However now it is much easier and we will use yarn, the
new JavaScript package manager. Install yarn on your respective platform as described here:
`, {link: 'https://yarnpkg.com/lang/en/docs/install/'},
        `once you have yarn installed, you can make a new React project by doing:`,
        {code: `$ yarn create react-app istc_web_app`},
        `where istc_web_app can be whatever name you want for your project.`,
        `now after cd into the project directory, we can start the project by running`,
        {code: `$ yarn start `},
        `That will start a local development server, it will open a browser
for you and tell you in the terminal what is the location of the server.`
      ]},
     {title: 'Model of React',
      content: [
        `First it is important to note that React just by itself is
a library for making UI, it is the view layer of our application. React does not
reimplement the browser environment the way that other libraries like Angular do, instead
it emphasises using plain JavaScript idioms.`,
        `Because React is just a view library, you can integrate it into existing
projects, like existing Angular, Backbone or whatever project`,
        `Often though we will pair React with other libraries, usually react-router
for handling routing and redux or mobx for state management.`
      ]

     }
   ]
  },
  // Lecture 2
  {name: 'Passing Data to Components',
   byline: 'this.props & this.state',
   slides: [
     // slide 1
     {title: 'Giving data to components',
      content: [
        `Assume that we have this component, the 'export default' makes
it available to other ES6 modules`,
        {code: `
// This file is called banner.js
import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <section>
        <h3>Some shopping cart</h3>
        <p>item1</p>
      </section>
    );
  }
}
export default Banner;
`}, `This is a React component, it is called banner and it says
how to render a simple section tag with a h3 as a top banner, with one elem `
      ]},
     {title: 'Giving data to components cont...',
      content: [
        `Say that this is the root of our application`,
        {code: `
import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner';

// We ONLY need to call ReactDOM.render
// ONCE in our whole application
ReactDOM.render(<Banner />, document.getElementById('root'));
`}, `Here we made the Banner component and use the render function from the
react-dom package to mount the React component tree into the DOM element
we picked as the root of our React component tree.`
      ]
     },
     {title: 'Giving data to components cont...',
      content: [
        `Our Banner component doesn't get any data at the moment, it just is hardcoded
to show one p tag. We can change that with using props.`,
        {code: `
<Banner
  bannerHeader={'Shopping Cart'}
  items={['shoes', 'hats']}/>
`}, `
The bannerHeader and items that we passed in the JSX will be passed into the
component and we can access them using the this.props property inside the
component
`
      ]
     },
     {title: 'Giving data to components cont...',
      content: [
        {code: `
render() {
  const { bannerHeader, items } = this.props;
  const cart_items = items.map(elem => {
    return <p key={elem}>{elem}</p>;
  });
  return (
    <section>
      <h3>{bannerHeader}</h3>
      {cart_items}
    </section>
  );
}
`}
      ]
     }
   ]
  }
  // Lecture 3
  // Lecture 3
];
