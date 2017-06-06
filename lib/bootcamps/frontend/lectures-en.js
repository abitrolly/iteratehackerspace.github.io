module.exports = [
  // Lecture 0
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
        {link:`http://iteratehackerspace.com`},
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
It is called object destructuring`
      ]},

     // Lecture0-Slide7
     {title: 'Class properties',
      content: [

      ]},
     // Lecture0-Slide8
     {title: 'Object spread',
      content: [

      ]},
     // Lecture0-Slide9
     {title: 'import/export in ES6',
      content: [

      ]}
   ]
  },
  // Lecture 1
  {name: 'Introduction to React',
   byline: 'First experience with React',
   slides: [
     // Slide 1
     {title: 'Purpose of React',
      content: [
        `Recall how we used the DOM APIs directly, how tedious that was and
how error prone it was. Using things like document.createElement`,
        {code:
         `
const elem = document.createElement('p');
elem.textContent = 'Hello world';
document.body.appendChild(elem);
`},
        `was 1) error prone, 2) too low level and 3) extremely tedious`,
        `Of course we can build applications like this but the DOM API is
better not touched at all and instead we use JavaScript libraries.`
      ]},
     {title: 'Model of React',
      content: [
        `React is View layer`
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
