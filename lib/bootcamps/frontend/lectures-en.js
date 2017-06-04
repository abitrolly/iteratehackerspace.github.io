module.exports = [
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
         `const elem = document.createElement('p');
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
