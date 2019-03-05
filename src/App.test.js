import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './containers/Quiz/Quiz';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quiz />, div);
  ReactDOM.unmountComponentAtNode(div);
});
