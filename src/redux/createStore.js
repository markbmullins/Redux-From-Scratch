// const store = {
//   state: {}, // state is a plain object
//   listeners: [], // listeners is an array of functions
//   // Update state
//   dispatch: () => {}, // dispatch is a function
//   // Read state
//   subscribe: () => {}, // subscribe is function
//   getState: () => {}, // get state is a function
// };

const createStore = (reducer, initialState) => {
  const store = {};
  store.state = initialState;
  store.listeners = [];

  store.getState = () => store.state;

  store.subscribe = (listener) => {
    store.listeners.push(listener);
  };

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    store.listeners.forEach((listener) => listener());
  };

  return store;
};

export default createStore;

// TODO: Check if this works
// const createStore = (reducer, initialState) => {
//   return {
//     state: initialState,
//     listeners: [],
//     subscribe: (listener) => {
//       this.listeners.push(listener);
//     },
//     dispatch: (action) => {
//       this.state = reducer(this.state, action);
//       this.listeners.forEach((listener) => listener());
//     },
//   };
// };
