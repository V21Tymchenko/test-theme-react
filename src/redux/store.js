import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const reset = createAction('counter/reset');
const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
  [reset]: (state, action) => (state = action.payload),
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
