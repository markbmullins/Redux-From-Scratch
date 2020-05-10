import { INCREMENT_COUNT, DECREMENT_COUNT, LOG_MESSAGE } from "./actions";

const getInitialState = () => {
  return {
    count: 0,
    messages: [],
  };
};

const reducer = (prevState = getInitialState(), action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      // new state

      return {
        ...prevState,
        count: prevState.count + action.payload.count,
        messages: [
          ...prevState.messages,
          `Previous count: ${prevState.count}`,
          `Updated count: ${prevState.count + action.payload.count}`,
        ],
      };

    case DECREMENT_COUNT:
      // new state
      return {
        ...prevState,
        count: prevState.count - action.payload.count,
        messages: [
          ...prevState.messages,
          `Previous count: ${prevState.count}`,
          `Updated count: ${prevState.count - action.payload.count}`,
        ],
      };

    case LOG_MESSAGE:
      return {
        ...prevState,
        messages: [...prevState.messages, action.payload.message],
      };
    default:
      return prevState;
  }
};

export default reducer;
