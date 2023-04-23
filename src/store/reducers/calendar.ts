import moment from 'moment';
import { SET_THIS_WEEK } from '../constants';
import { ICalendar } from '../../types/ICalendar';

const initialState:ICalendar = {
    thisWeek: moment(),
    startDay: moment().startOf('isoWeek'),
};

type setThisWeek = {type: string; payload: moment.Moment}
type Action = setThisWeek

export const calendarReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_THIS_WEEK:
      return {thisWeek: action.payload, startDay: action.payload.startOf('isoWeek')};
    default:
      return state;
  }
};
