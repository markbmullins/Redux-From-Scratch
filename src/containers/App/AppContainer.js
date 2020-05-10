import React, { useState } from "react";
import App from "../../components/App/App";

import { INCREMENT_COUNT, DECREMENT_COUNT, LOG_MESSAGE } from "../../redux/actions";

const AppContainer = ({ store }) => {
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);

  const log = (msg) => {
    const logAction = {
      type: LOG_MESSAGE,
      payload: {
        message: msg,
      },
    };
    store.dispatch(logAction);
  };

  const format = (obj) => JSON.stringify(obj, undefined, 2);

  store.subscribe(() => {
    const state = store.getState();
    setCount(state.count);
    setMessages(state.messages);
  });

  const increaseCount = () => {
    const action = {
      type: INCREMENT_COUNT,
      payload: {
        count: 1,
      },
    };

    log(`Dispatching: ${format(action)}`);

    store.dispatch(action);
  };
  const decreaseCount = () => {
    const action = {
      type: DECREMENT_COUNT,
      payload: {
        count: 1,
      },
    };

    log(`Dispatching: ${format(action)}`);

    store.dispatch(action);
  };

  return (
    <App
      count={count}
      increaseCount={increaseCount}
      decreaseCount={decreaseCount}
      messages={messages}
    />
  );
};

export default AppContainer;
