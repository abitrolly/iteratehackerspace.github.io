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
   byline: 'Why do we even want React?',
   slides: [
     {title: 'What the browser gives us',
      content: [
        `The web browser provides us with an environment to run our
JavaScript code, of course we have the standard JavaScript objects like Array, Date,
but the browser also provides many more APIs, collectively this is called the DOM API,
where DOM stands for Document Object Model`,
        `Many of the objects and functions that the DOM provides we will use
in the front end of our web applications, for example here we used
fetch, Headers, URLSearchParams and document; all four are provided by the
DOM API and not by the JavaScript language.`,
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
element but the DOM API for creating elements is better not touched at all
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
     {title: 'Model of React (Jargon)',
      content: [
        `First it is important to note that React just by itself is
a library for making UI, it is the view layer of our application. React does not
reimplement the browser environment the way that other libraries like Angular do, instead
it emphasises using plain JavaScript idioms.`,
        `Because React is just a view library, you can integrate it into existing
projects, like existing Angular, Backbone or whatever project. Often though we
will pair React with other libraries, usually react-router
for handling routing and redux or mobx for state management and some library to help
us with CSS styling`,
        `In the Web version, React creates an abstraction layer for us over the DOM. We
create something called 'Components' and these Components collectively create a tree that
represents the UI.`,
        `The great thing about React is that it does not assume the existence
of the DOM and hence we can use our React code on the server side, this lets us render
our React components on the server, known as Server Side Rendering (SSR)`
      ]},
     {title: 'Components (JSX)',
      content: [
        `React uses a special syntax extension to JavaScript called JSX. JSX
looks like HTML but it is not, it is a syntax transformation that is changed into
React function calls`,
        {code: `
// We must have this import for JSX to work
import React from 'react';
class Header extends React.Component {
  render() {
    return (
      <section><h3>Hello World</h3></section>
    );
  }
}
`}, `And that is the same as`,
        {code: `
render() {
  return (
    React.createElement('section', {},
      React.createElement('h3', {}, 'Hello World'));
  );
}
`}
      ]},
     {title: 'JSX, a more complicated example',
      content: [
        {code:`
render() {
  const s = { backgroundColor:'red' };
  const header_s = { fontSize: '1rem' };
  return (
    <section style={s}>
      <h3 style={header_s}>Hello World</h3>
    </section>
  );
}
`}, `again, same as`,
        {code: `
render() {
  const s = { backgroundColor:'red' };
  const header_s = { fontSize: '1rem' };
  return (
    React.createElement('section', {style: { backgroundColor:'red' }},
      React.createElement('h3', {style: { fontSize: '1rem' }}, 'Hello World'))
  );
}
`}]},
     {title: `What's the point of JSX?`,
      content: [
        `You can see that writing JSX is clearer than using the React.createElement
function call. This way we can type less and you can 'see' the structure of the UI that
you are creating, like the hierarchy and you can reference any
JavaScript expression in the JSX, but you need to wrap it with
{}`, {code: `
render () {
  const name = 'First name';
  const teacher = 'Edgar';
  return <p> My {name} is {teacher}</p>;
}
`}, {link: `https://facebook.github.io/react/docs/introducing-jsx.html`}
      ]},
     {title: 'Conditionally render',
      content: [
        `Sometimes we want to conditionally include a component,
there's a few ways to do that but here is one way`,
        {code: `
render() {
  let content = null;
  if (this.props.showName === true) {
    content = <p>I am {this.props.first_name}</p>;
  } else {
    content = <p>Please provide your name</p>;
  }
  return <div>{content}</div>;
}
`}, {link: 'https://facebook.github.io/react/docs/jsx-in-depth.html'}
      ]},
     {title: `Component Lifecycles`,
      content: [
        `Notice that we made Components by extending React.Component,
why do we do that and what do we get from that?`,
        `First notice that we always define a render method. This is because every
React component must provide a render method, the render must return something that
says how this component must look on the UI, React is a view library afterall.`,
        `In general, the lifecycle methods are different hooks in the life of the
Component, as it mounts, as it renders, when it receives props, when it unmounts.
Implementing a lifecycle method will be your chance to hook onto that event`,
        {link: `https://facebook.github.io/react/docs/react-component.html`}
      ]},
     {title: 'Example of lifecycle method',
      content: [
        `One of the most important lifecycle methods is componentDidMount`,
        {code: `
import React from 'react';

class Profile extends React.Component {
  // CDM is also a place to put a call to fetch
  componentDidMount() {
    console.log('Component successfully mounted into DOM');
  }
  render() {
    return <p>I am {this.props.name}</p>;
  }
}
`}, `Look at the other lifecycle methods, not each of them run on the server side.
For example CDM does not run on the server side, but componentWillMount does
run on the server side.`,
        `Assignment: Implement each of the lifecycle methods, add a console.log
there so that you see the order of lifecycle methods being called`
      ]},
     {title: 'Event handling',
      content: [
        'We can handle events as well with methods',
        {code: `
class Header extends React.Component {
  constructor() {
    super();
    this.click_handler = this.click_handler.bind(this);
  }
  click_handler(e) { console.log(e.target.value); }
  render() {
    return (
      <div>
        <input type={'button'} value={'Hello World'} onPress={this.click_handler} />
      </div>
    );
  }
}
`}
      ]},
     {title: 'Event handling (Context issues)',
      content: [
        `Notice that we did`,
        {code: `this.click_handler = this.click_handler.bind(this);`},
        `This is because ES6 classes do not autobind their context
and hence we have to make a new function (Remember that .bind returns
a new function) with the context (this) bound to the React Component`,
        `We don't have this problem is we use fat arrows class properties
because class properties, as we have shown in lecture one, are really shortcuts
for making properties on the instance itself`,
        {code: `
class Header extends React.Component {

  click_handler = e => {
    console.log(e.target.value);
  }
}
`}
      ]},
     {title: 'Using Components in other Components',
      content: [
        `We saw that the render method must give back a UI element, but we can
also give back custom components that we make. React will just recursively ask
each Component how it looks like, aka calling that Component's render method`,
        {code: `
class ShoppingItem extends React.Component {
  render() {
    return <p style={{backgroundColor:'aliceblue'}}>This is a shopping Item</p>;
  }
}
`}, {code: `
class Cart extends React.Component {
  render() {
    return (
    <div>
      <ShoppingItem/>
      <ShoppingItem/>
    </div>
    );
   }
}
`}
      ]},
     {title: 'Using Components in other Components cont...',
      content: [
        `Notice, to use custom Components as elements to render in another
Component's render function, that Component must have a capital letter. ShoppingItem,
not shoppingItem. This is how React knows whether it is a native HTML element or a
custom component.`
      ]}
   ]
  },
  // Lecture 2
  {name: 'Passing Data to Components',
   byline: 'this.props & this.state & Pure Components',
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
`}
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
        `We can use object destructuring to easily pick out the keys we want in
this.props`,
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
`},
        `Notice that we can use an array of React elements in the return of render,
also notice that we gave a key prop to the p element. This is so that we help the
React diffing algorithm know which p elements to rerender when React needs to
rerender based on new data. Do not use array index values as keys.`
      ]},
     {title: 'Meaning of this.props',
      content: [
        `Although this.props is just a plain object, it represents immutable
data. It is data that is passed to a Component from another Component and we
never mutate this.props because even if we did it would be meaningless as the
next render will provide us with a new this.props.`,
        `Most applications though are not static, that is, their data changes over
time and so we need a way to model that; for that we need to talk about state.`
      ]},
     {title: 'State in React',
      content: [
        `React Components also can hold state, that is data that changes over time.`,
        {code: `
class Cart extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
}
`}, `Or in a faster way using class properties`,
        {code: `
class Cart extends React.Component {
  state = { items: [] };
}
`}
      ]},
     {title: 'Updating state (sort of)',
      content: [
        `The React API, aka the methods that we get when we extend Component, gives
us a method called setState. `,
        `setState, which we call with this.setState takes two arguments, the first must
be an object with key(s) which were the same as the original state object. The second
parameter, which we usually omit, is a function callback. Often times though we
only use the first parameter. After calling setState, React will queue up the
update and update in this case means calling render again, but this time with the
new state object.`,
        `We often use this.setState after we get data from the outside world, that is
like data coming from the result of a fetch or user input`
      ]},
     {title: 'this.setState example',
      content: [
        {code: `
class GithubUser extends React.Component {
  state = { followers : 0 };
  componentDidMount() {
    fetch('https://api.github.com/users/fxfactorial')
    .then(req => req.json())
    .then(({followers}) => {
      this.setState({followers});
    })
  }
  render() {
    return <p> I have {this.state.followers}</p>;
  }
}
`}
      ]},
     {title: 'Props also get updated',
      content: [
        `React knows with its difference algorithm which Components need
to be rerendered whenever any of the data that they depend changes/get updated,
continuing with the last example`,
        {code: `
class Profile extends React.Component {
  render() {
    const { followers } = this.props;
    return <p> I have {followers}</p>;
  }
}

// and in the render method of GithubUser
render() {
  return <Profile followers={this.state.followers}/>;
}
`}
      ]},
     {title: 'Prefer Components with no state',
      content: [
        `We prefer to have Components that have no state and pass down to their
child components whatever data they need via props.`,
        `Most software mistakes are because of state changing when we didn't expect
it to change, hence making most Components only rely on this.props it easier to
reason about our application. We control state changes with this.setState`
      ]},
     {title: 'Prefer functional components',
      content: [
        `Because we prefer to have Components with no state, we can use
something called 'Functional Components'. These are just functions that return
React elements without having to have first made a class. If your Component
has no state, then prefer these instead of using class.`,
        {code: `
const Profile = ({followersCount, imgUri}) => {
  return (
    <div>
      <img href={imgUri}/>
      <p> I have {followersCount}</p>
    </div>
  );
};
`}, ` Can be shorted as`,
        {code:`
const ProfileView = ({followersCount, imgUri}) => (
    <div>
      <img href={imgUri}/>
      <p> I have {followersCount}</p>
    </div>
);
`}
      ]}
   ]},
  // Lecture 3
  {name: 'Styling Components',
   byline: 'FlexBox, inline styling and styled-components',
   slides: [
     {title:'Making a real application',
      content: [
        `So far we have only made Components on bland HTML elements. HTML
elements however only describe the content of our application. They don't talk
about layout or styling.`,
        `Styling and intelligent layout is what will make our applications
really shine and show quality work.`,
        {link: 'https://alistapart.com/article/indefenseofeyecandy'}
      ]},
     {title: 'Layout using CSS, the point of it',
      content: [
        `You should start by understanding the Browser's model for showing elements
on the screen. To the browser, everything is a box.`,
        {link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model'},
        `Elements are either blocks or inline by default, this roughly means that block
elements will start a new line whereas inline elements will stay on the same line.
An Example of a block element is a <p> tag, example of inline is <span>.`,
        `We can control this with CSS with the display property`,
        {code: `
p { display: inline; }
`}, `Controlling the layout of our application is critical to making a great user
experience and having the UI adapt to whatever screen size we might encounter
(Responsive design)`
      ]},
     {title: 'Styling in React',
      content: [
        `Of course we can style our Components as well using existing CSS`,
        {code: `
const Banner = () => (
  <nav className={'top-nav-bar'}>
    <p className={'top-nav-bar-elem'}>First</p>
    <p className={'top-nav-bar-elem'}>Second</p>
  </nav>
)
`},
        `Notice that unlike HTML we write in .html files, we said 'className' instead
of class. That is because class is a reserved keyword in JavaScript`
      ]},
     {title: 'Styling in React cont...',
      content: [
        `We can also apply styling directly to elements and this is
called inline-styling.`,
        {code: `
const AboutMe = ({pageMaker}) => {
  const me_style = {fontSize: '24px',  fontFamily: 'Optima'};
  return <p style={me_style}>{pageMaker}</p>;
};
`}, `This will end up creating a HTML element that will look like this in the
web browser`,
        {code: `
<p style='font-size:24px; font-family:Optima'>
`}, `Notice that the key names in the JavaScript object are camel cased (fontFamily).
This is because JavaScript keynames, identifiers can't have a - in their name. Keep
this in mind when you're reading CSS docs and trying to write the styles as an object.`
      ]},
     {title: 'Flexbox overview',
      content: [
        `Flexbox is a 2 dimensional layout algorithm. We turn it on with 'display: flex'
in our container elements.`,
        {code: `
render () {
  return (
    <div style={{display: 'flex'}}>
      <p>first</p>
      <p>second</p>
    </div>
  )
}
`}, `The enclosing div is now the flex container and the child elements are the
flex children. This is an important distinction because once we turn on flex, then
some properties only make sense for the parent and some only do for the child.`
      ]},
     {title: 'Flexbox overview cont...',
      content: [
        `Flexbox makes many traditionally hard things to do in CSS (vertical centering)
very easy to do. Flexbox is so nice that Facebook reimplemented the algorithm for
ReactNative and it is the only layout system available there.`,
        `On web, the default direction of flex is row oriented, you can control that
property with 'flex-direction' on the container element
(The element with display: flex). The alternative is to make it column oriented, that is
to make the children elements be displayed from top to bottom instead of left to right,
try it!`,
        {code: `
// Change flexDirection to 'row', see what happens
// Also change justifyContent to space-around or space-between
return (
  <div style={{display: 'flex', justifyContent: 'center',
               flex: 1, flexDirection: 'column', height: '400px'}}>
    <p style={{padding: '1rem', backgroundColor:'aliceblue'}}>First</p>
    <p style={{padding: '1rem', backgroundColor:'aliceblue'}}>Second</p>
    <p style={{padding: '1rem', backgroundColor:'aliceblue'}}>Third</p>
  </div>
);
`}]},
     {title: 'Flexbox overview cont...',
      content: [
        `Learning Flexbox is one of the most important web technologies.`,
        `Avoid too many tutorials, all you really need is to study this page
over and over again, along with lots of practice.`,
        {link: `https://css-tricks.com/snippets/css/a-guide-to-flexbox/`}
      ]},
     {title: 'CSS in JS',
      content: [
        `Traditionally, web applications separated out the HTML from CSS and from
JavaScript. Since React, the whole landscape has changed and now we are adding
all that logic seemingly in the same place, with Components. Now we have shown
inline styling but inline styling has some limitation, namely that we can't do
CSS pseduo-selectors and media queries.`,
        {link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries'},
        ` `,
        {link: 'https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes'},
        `With React Components though, you can get around this by using className and
still having some CSS style sheets.`
      ]},
     {title: 'Styled Components',
      content: [
        `Quite a few libraries have come about to solve this problem of CSS in JS,
along with the limitations of inline-styling; we will emphasis styled-components.`,
        {code: `
$ yarn add styled-components
`},
        `styled-components takes the idea of React to the next level allowing us to
add styling as a reusable Component. As an added benefit, styled-components also
works on React-Native.`,
        `Be sure to read the docs after this lecture`,
        {link: 'https://www.styled-components.com/docs'}
      ]},
     {title: `styled-components, cont...`,
      content: [
        {code: `
import styled from 'styled-components';

const BoxWrapper = styled.div\`
  display: flex;
  height: 400px;
  justify-content: space-around;
\`;

const content = (
  <BoxWrapper>
    <p>Hello</p>
    <p>World</p>
  </BoxWrapper>
);
`}, `Let's break this down. Noticed that we used styled.div with two backticks.
This is a regular feature of the JavaScript language. It is actually a function
call to the styled.div function. Also notice that the CSS we use in the template
string is 100% CSS, with all the power of CSS, this means we can use media queries,
and pseudo-selectors with no problems and now whenever we make a BoxWrapper component,
it will have this CSS applied to it with a real CSS class. Just we don't make that
class name for the div, it will be auto generated for us by styled-components.`
      ]},
     {title: 'styled-components, cont...',
      content: [
        {code: `
const TextContent = styled.p\`
  padding: 1rem;
  text-align: center;
  background-color: red;
  &:hover {
    background-color: orange;
  }
\`;
const make_text = t => <TextContent>{t}</TextContent>;
const content = (
  <BoxWrapper>
    {make_text('Hello')}
    {make_text('World')}
  </BoxWrapper>
);
`}, `See the '&:hover'? Its technically not legal CSS but styled-components
allows us to use the sass syntax helpers. Try this out.`
      ]},
     {title: 'styled-components, cont...',
      content: [
        `Notice that the components made by styled components are plain React
components, this means that we can also even pass props to them!`,
        {code: `
const TextContent = styled.p\`
  padding: 1rem;
  text-align: center;
  color: \${props => props.main === true ? 'orange': 'blue'\};
  background-color: red;
\`;
// Or even shorter in the styled.p call
// color: \${({main}) => main === true ? 'orange': 'blue'\};

const make_main_text = t => <TextContent main={true}>{t}</TextContent>;

`}, `Since remember that props is just a JavaScript Object passed to
components when they are created, we can just object destructure on them immediately`
      ]},
     {title: 'styled-components, cont...',
      content: [
        `We can also override styles!`,
        {code: `
const TextWithMorePadding = styled(TextContent)\`
  padding: 1.75rem;
\`;
`}, `This will take the styled component that we previously made, the TextContent
and it will override the padding of 1rem but the newer 1.75rem while still keeping the
other CSS values. This way we can easily make base components of styling and then
make other, specialized Components.I recommend making a single styles.js file
where you place all your styled-components and then export them for your project`,
        {code: `
import styled from 'styled-components';
const TextContent = styled.p\`
  padding: 1rem;
  text-align: center;
  color: \${({main}) => main === true ? 'orange': 'blue'\};
  background-color: red;
\`;
export { TextContent };
`}
      ]}
   ]},
  {name: 'Various lesser known features in React',
   byline: `Forms, uncontrolled components, Server Side Render (SSR) and various
tips, tricks in React`,
   slides: [
     {title: 'Outline of this lecture',
      content: [
        `React has many tips and tricks, this lecture will touch on quite a few
of these lesser known and used capabilities.`
      ]},
     {title: 'Forms forms forms',
      content: [
        `Form input is one of the most basic things that any web application can
and should do. Think of all the times you have to input password, usernames,
first names, last names, etc etc. All of these are web forms and the issue they
raise is who should hold the state? Think of the text that is typed in an input,
it naturally has some state, it is keeping what the user wrote.`,
        `With React we have a choice as so who should manage that state,
the React code (us) or the browser. The difference between this is
the difference between controlled and uncontrolled components.`
      ]},
     {title: 'Controlled Components',
      content: [
        `If we control the form, then we call it a controlled Component`,
        {code: `
import React, { Component } from 'react';
class UserInput extends Component {
  state = { username: '' };
  user_changed = e => this.setState({username: e.target.value});
  render() {
    return (
      <div>
        <p>User is: {this.state.username}</p>
        <input type={'text}
               value={this.state.username}
               onChange={this.user_changed}/>
      </div>
    );
  }
}
`}, `Notice that using controlled components forces us to use a class as we
need to have this.state. It is called controlled because we are controlling
the value of the input, not the browser.`
      ]},
     {title: 'Uncontrolled Components',
      content: [
        {code: `
class UserInputExample extends React.Component {
  show_input_value = () => {
    const { value } = this.real_input;
    alert(\`Real value was: \${value\}\`)
  }
  render() {
    return (
      <div>
        <input type={'text'} ref={ref => this.real_input = ref}/>
        <input type={'button'}
               value={'Click me to do alert'}
               onClick={this.show_input_value}/>
      </div>
    );
  }
}
`}, `Every HTML component gives you a chance to let you have
the real HTML element. Remember that React is a view library abstraction,
it sits on top of the real DOM elements. However, sometimes we do have to have
the real HTML element. React gives us that chance with the ref prop, which
needs to be a callback. Your callback will receive the actual HTML element.`
      ]},
     {title: 'Why use uncontrolled Components?',
      content: [
        `You really shouldn't use refs, they break the model of React but
one area where they are useful, as you can see, is with Forms (all
the different types of input HTML elements elements).`,
        `Imagine a healthcare form with 10 different input,
for each of those form inputs, you'd have to write the value in
this.state, write that for the value, aka value={this.state.something}
and of course the onChange handler, which needs to
be a function. This is a lot of coding clutter and boilerplate. Hence using
uncontrolled components is sometimes a cleaner solution but when you are first
starting out, you should probably use the React way, aka controlled Components.`,
        {link: 'https://facebook.github.io/react/docs/forms.html'}
      ]},
     {title: 'Children of Components',
      content: [
        `React also lets the parent Components somewhat know about their
children. We have a handle to that in props, this.props.children`,
        {code: `
class Container extends Component {
  render () {
    return (
      <div>{this.props.children}</div>
    );
  }
};

const App = () => (
  <Container>
    <p> first</p>
    <p> Second</p>
  </Container>
);
`}, `This is useful when the parent component doesn't know what its children
components will be, you will see this in libraries like react-router.`,
        {link: 'https://facebook.github.io/react/docs/react-api.html#react.children'}
      ]},
     {title: 'Default props',
      content: [
        `Sometimes we know ahead of time what props our Components should use,
in those cases we can assign default props`,
        {code: `
class Container extends Component {
  render () {
    const { name, age} = this.props;
    return <p> I am {name}, and am {age} years old</p>;
  }
};

Container.defaultProps = {
  name: 'Spitak',
  age: 23
};
`}, `But of course if you explicitly give different props when making
the Component in JSX, then those will be used instead.`
      ]},
     {title: 'Server Side Rendering',
      content: [
        `One of the best features of React is that the core of the library
does not assume the existence of the DOM. This means that we can use React on
the server side.`,
        `The benefit of it is multifold but the top reasons are that we actually
have a site to show search engines when they crawl our site so SEO improves and
we lessen the work for the client since we have initial HTML to show rather
than force the client to run a lot of JavaScript code before having the user
see anything at all.`,
        `This is easiest done with a node backend`
      ]},
     {title: 'Server Side Rendering Example',
      content: [
        {code: `
import { renderToString } from 'react-dom/server';
import Application from '../lib/silicondzor';
// Somewhere in our request handler
...
    const html = renderToString(<Application/>);
          res.end(\`
<!doctype html>
...some standard link, meta tags
<div id={'root}>\${html}</div>
\`);
`}, {link: 'https://github.com/fxfactorial/silicondzor/blob/refactor/backend/server.jsx#L83'},
        '',
        {link: 'https://facebook.github.io/react/docs/react-dom-server.html'}
      ]},
     {title: 'Cloning children with new Props',
      content: [
        `Sometimes we want to have a React element but with different props,
this usually comes up in the context of this.props.children`,
        {code: `
class Parent extends React.Component {
  use_this_handler = (e) => {// Some code};
  render() {
    const with_props =
       React.Children.map(this.props.children,
         child => React.cloneElement(child, {click_handler: this.use_this_handler})
    );
    return <div>{with_props}</div>;
  }
};
`}, `Here we are going over each of the children that this component would
usually have, but we're replacing the click_handler prop with a different
handler. You can see that the second argument to cloneElement is the new props
and they will be merged with the existing props of that element.`,
        {link: 'https://facebook.github.io/react/docs/react-api.html#cloneelement'}
      ]},
     {title: 'Example usage of cloneElement',
      content: [
        `Here we want to change just the size while keeping the color the same`,
        {code:`
import React, { Component } from 'react';
import Star from 'react-icons/lib/fa/star';
import styled from 'styled-components';

const Wrapper = styled.div\`
 display:flex;
 flex:1;
 height: 500px;
 flex-direction: column;
 background-color: hsla(5, 10%, 10%, 1);
 align-items: center;
 justify-contents: center;
\`;

class MyStar extends Component {
    render() {
        return <Star
        style={{color:this.props.color}}
        size={this.props.size}/>;
    }
}

class App extends Component {
    render() {
        const elem = (
            <MyStar
               size={150}
               color={'hsla(100, 50%, 50%, 1)'}/>
        );
        const copied =
                  React.cloneElement(elem, {size: 400});
    return (
      <Wrapper>
        {elem}
        {copied}
      </Wrapper>
    );
  }
}

export default App;
`},
        `This examples uses styled-components and react-icons, but neither are
 strictly necessary.`,
        {code:`$ yarn add styled-components react-icons`}
      ]}
   ]},

  // Lecture 6
  {name: 'Routing',
   byline: 'Making a SPA feel like a routed app',
   slides: [
     {title:'SPA',
      content: [
        `SPA stand for Single-Page-Application. These are Web
Applications which don't use separate URLs for different pages. If we step
back to the 90s and early 2000's, when you went to foo.com/bar.html from
foo.com/home.html then that would give you a new bar.html file from
the server. This meant a new HTTP request and a new document, different
JavaScript for each HTML page.`,
        `As JavaScript became more powerful, programmers starting building
entire applications in just one HTML page, continuously changing the HTML
elements with JavaScript and the DOM API.`,
        `Some downsides of SPA are that JavaScript bundle sizes became large,
it takes time to run the HTML, JavaScript is blocking, the user doesn't see
anything in the beginning and then everything at once and we lose routes.`
      ]
     },
     {title:'Routes',
      content:[
        `Losing routes was a big downside to SPA based applications because
routes convey semantic information. For example, everyone knows that
foo.com/login means a login page, or foo.com/friends-list means we expect to see
some kind of social media. A SPA that only shows foo.com and continuously
mutates the DOM without letting the user know what route we're on loses a critical
chance to have a good experience with the application.`,
        `The browser gives us a way to manipulate the browser history/URL
with the history API.`,
        {link: 'https://developer.mozilla.org/en/docs/Web/API/History'}
      ]},
     {title:'React-Router',
      content: [
        `React applications are all SPAs since React is changing the contents
of the DOM for us whenever render is called. We use a library called React-Router
to manage the history API for us whenever different components render. It is
not strictly necessary to use React-Router but it will make the experience much
better for our users. With React-Router we get to keep our React SPA model
and still have beautiful routes.`,
        {code: `$ yarn add react-router react-router-dom`},
        `Notice that this is two separate packages, just like React, the core
react-router library does not assume the existence of the DOM.`,
        `react-router uses some deeper concepts, like
Higher Order Components (HOC), this basically means we give Components to
other Components and those Components decide what to render 😲`,
        {link: 'https://reacttraining.com/react-router/web/example/basic'}
      ]},
     {title: 'Getting started (Offical example)',
      content: [
        `NOTE: There should be no space between $ and {} in the match usages,
this is because of how the lecture notes are made using ES6 template strings`,
        {code:`
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={\`\$ {match.url}/rendering\`}>Rendering with React</Link></li>
      <li><Link to={\`$ {match.url}/components\`}>Components</Link></li>
      <li><Link to={\`$ {match.url}/props-v-state\`}>Props v. State</Link></li>
    </ul>
    <Route path={\`$ {match.url}/:topicId\`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
const Topic = ({ match }) => <div><h3>{match.params.topicId}</h3></div>
`},
        `Notice how we use Route, Link and Router. We will use these Components
very often, they are the building blocks of react-router.`
      ]},
     {title: 'Assignment',
      content:[
        `Now let's do something practical. Let's make a UI to display
currency conversion rates. Use this API to get the currency rate:`,
        {link: 'http://api.fixer.io/latest?base=USD'},
        `Using react-router and giving a dedicated route, show the
prices for JPY, EUR, GBP and USD. You can do this by replacing
the query parameter here: base=CURRENCY_NAME_HERE .`,
        `HINT: Make your Root component hold the state, when will it get it?,
How will you pass data around?`
      ]}
   ]},

  // Lecture 7
  {name: 'Data management solutions',
   byline: 'State management',
   slides: [
     {title:'State management',
      content: [
        `You might have noticed that `
      ]
     }
   ]},
  // Lecture 8
  {name: 'Advanced React, debugging and performance',
   byline: 'Using context, devtools and getting performance',
   slides: [

   ]}
  // Lecture
];
