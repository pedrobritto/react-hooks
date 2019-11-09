import React from "react";

import { useCounter, useModal, useToggle } from "@pbritto/react-hooks";

const App = () => {
  const counter = useCounter(0);
  const modal = useModal();
  const toggle = useToggle();

  return (
    <div>
      <div>
        <div>{counter.value}</div>
        <button onClick={counter.increment}>+</button>
        <button onClick={counter.decrement}>-</button>
        <button onClick={counter.reset}>reset</button>
        <button onClick={counter.set(10)}>set 10</button>
      </div>

      <div>
        <div>{JSON.stringify(modal.isOpen)}</div>
        <button onClick={modal.open}>open</button>
        <button onClick={modal.close}>close</button>
      </div>
      <div>
        <div>{JSON.stringify(toggle.value)}</div>
        <button onClick={toggle.switch}>switch</button>
      </div>
    </div>
  );
};
export default App;
