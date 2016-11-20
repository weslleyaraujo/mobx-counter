import React from 'react';
import { observer } from 'mobx-react';

const App = observer(({ state }) => (
  <div>
    <div style={{
      position: 'relative',
      zIndex: 2,
    }}>
      <div className="flex justify-center p4 counter">
        {state.count}
      </div>
      <div className="flex justify-center p4">
        <button onClick={_ => state.increment()}>Increment</button>
        <button onClick={_ => state.decrease()}>Decrement</button>
        <button onClick={_ => state.incrementIfOdd()}>Increment if odd</button>
        <button onClick={_ => state.incrementAsync()}>Increment async</button>
        {state.interval ?
          <button onClick={_ => state.autoIncrement()}>Auto increment</button> :
          <button onClick={_ => state.clearAutoIncrement()}>Stop auto-increment</button>
        }
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
