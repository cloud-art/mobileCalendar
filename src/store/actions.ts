import moment from 'moment';
import { IEvent } from '../types/IEvent';
import { ADD_EVENT, SET_DAY, SET_UPDATING, REMOVE_EVENT, SET_THIS_WEEK} from './constants';

export function setSelectedDay(day: number|null) {
  return {
    type: SET_DAY,
    payload: day
  };
}

export function setUpdating(isUpdating: boolean) {
  return {
    type: SET_UPDATING,
    payload: isUpdating
  };
}

export function addEvent(event: IEvent) {
  return {
    type: ADD_EVENT,
    payload: event
  };
}

export function removeEvent(date: number) {
  return {
    type: REMOVE_EVENT,
    payload: date
  };
}

export function setThisWeek(date: moment.Moment) {
  return {
    type: SET_THIS_WEEK,
    payload: date
  };
}

