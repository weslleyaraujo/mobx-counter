import React from 'react';
import { observer } from 'mobx-react';

const App = observer(({ state }) => (
  <div>
    <div style={{
      position: 'relative',
      zIndex: 2,
      padding: 20,
    }}>
      <div className="flex justify-center p4 counter">
        {state.count}
      </div>
      <div className="lg-flex md-flex justify-center p4">
        <button className="m1 sm-col-12 col-12" onClick={_ => state.increment()}>Increment</button>
        <button className="m1 sm-col-12 col-12" onClick={_ => state.decrease()}>Decrement</button>
        <button className="m1 sm-col-12 col-12" onClick={_ => state.incrementIfOdd()}>Increment if odd</button>
        <button className="m1 sm-col-12 col-12" onClick={_ => state.incrementAsync()}>Increment async</button>
        <button className="m1 sm-col-12 col-12" onClick={_ => state.autoIncrement()}>Auto increment</button>
        <button className="m1 sm-col-12 col-12" onClick={_ => state.clearAutoIncrement()}>Stop auto-increment</button>
      </div>
    </div>
    <div style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        opacity: '0.3',
        left: 0,
        zIndex: 1,
      }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {[...Array(state.count).keys()].map(x => (
          <li
            key={x}
            style={{
              padding: 10,
              backgroundColor: `${(x % 2) ? 'pink' : '#DE6E82'}`,
              transition: '0.3s',
              width: `${Math.floor(Math.random() * 100) + 0}%`,
            }}
          >
          </li>
        ))}
      </ul>
    </div>
  </div>
));


export default App;
