import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { observable } from 'mobx';

import App from './App';
import './index.css';

const state = observable({
  count: 0,
});

const isOdd = n => n % 2 !== 0;

// actions (?)
state.intervalTime = 600;
state.increment = () => state.count += 1;
state.decrease = () => state.count -= 1;
state.incrementAsync = () => setTimeout(state.increment, state.intervalTime);
state.incrementIfOdd = () =>
  state.count = isOdd(state.count) ? (state.count + 1) : state.count;
state.autoIncrement = _ => {
  state.increment();
  state.interval = setInterval(state.increment, 1000);
}
state.clearAutoIncrement = () => state.interval = clearInterval(state.interval);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component state={state} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// should be removed in production bundle
if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    render(App);
  });
}
