import React from 'react';
import {render} from 'react-dom';
import Site from './english-version';
import {BrowserRouter as Router} from 'react-router-dom';

class Page extends React.Component {
  render() {
    return (
      <Router>
        <Site />
      </Router>
    );
  }
}

render(<Page />, document.querySelector('#container'));
