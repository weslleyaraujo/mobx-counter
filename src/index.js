import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { observable } from 'mobx';

import App from './App';
import './index.css';

const state = observable({
  count: 0,
});

state.increment = _ => state.count += 1;
state.decrease = _ => state.count -= 1;
state.incrementAsync = _ => setTimeout(_ => state.count += 1, 600);
state.incrementIfOdd = _ =>
  state.count = state.count % 2 !== 0 ? (state.count + 1) : state.count;
state.autoIncrement = _ => state.interval = setInterval(_ => state.increment(), 1000);
state.clearAutoIncrement = _ => state.interval = clearInterval(state.interval);
  

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component state={state} />
    </AppContainer>,
    document.getElementById('root')
  );
};


render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    render(App);
  });
}
