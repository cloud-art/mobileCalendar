import { ISelectedDay } from '../../types/ISelectedDay';
import { SET_DAY, SET_UPDATING } from '../constants';

const initialState:ISelectedDay = {
    date: null,
    isUpdating: false
};

type Action = {type: string, payload: number}

export const selectedDayReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_DAY:
      return { ...state, date: action.payload };
    case SET_UPDATING:
      return { ...state, isUpdating: action.payload };
    default:
      return state;
  }
};
