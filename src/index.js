import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

const state = observable({
  count: 0,
});

state.increment = _ => state.count += 1;
state.decrease = _ => state.count -= 1;
state.incrementAsync = _ => setTimeout(_ => state.count += 1, 600);
state.incrementIfOdd = _ =>
  state.count = state.count % 2 !== 0 ? (state.count + 1) : state.count;

const App = observer(({ state }) => (
  <div>
    <div className="flex justify-center p4 counter">
      {state.count}
    </div>
    <div className="flex justify-center p4">
      <button onClick={_ => state.increment()}>Increase</button>
      <button onClick={_ => state.decrease()}>Decrease</button>
      <button onClick={_ => state.incrementIfOdd()}>Increment if odd</button>
      <button onClick={_ => state.incrementAsync()}>Increment async</button>
    </div>
  </div>
));

ReactDOM.render(
  <App state={state} />,
  document.getElementById('root')
);
