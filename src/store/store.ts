import { combineReducers, createStore } from 'redux';

import { selectedDayReducer } from './reducers/selectedDay';
import { eventsReducer } from './reducers/events';

const rootReducer = combineReducers({
  selectedDay: selectedDayReducer,
  events: eventsReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;

export type RootState = ReturnType<typeof rootReducer>