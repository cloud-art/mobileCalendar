import moment from 'moment';
import { IEvent } from '../../types/IEvent';
import { ADD_EVENT, REMOVE_EVENT } from '../constants';

const initialState:Array<IEvent> = [
    {
        id: 1681563600,
        desc: 'do smth',
        date: 1681563600,
    },
    {
        id: 1681506000,
        desc: 'do smth',
        date: 1681506000
    },
    {
        id: 1681783200,
        desc: 'do smth',
        date: 1681783200
    },
    {
        id: 1682049600,
        desc: 'do smth',
        date: 1682049600
    },
    {
        id: 1681704000,
        desc: 'do smth',
        date: 1681704000
    },
    {
        id: 1682035200,
        desc: 'do smth',
        date: 1682035200
    },
];

type AddEventAction = {type: string; payload: IEvent}
type DeleteEventAction = {type: string; payload: number}
type Action = AddEventAction | DeleteEventAction

export const eventsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [ ...state, action.payload ];
    case REMOVE_EVENT:
        console.log(action.payload.toString())
        console.log(state.filter(obj =>
            parseInt(moment(obj.date, 'X').startOf('hour').format('X')) !== 1682049600
        ))
      return state.filter(obj =>
            parseInt(moment(obj.date, 'X').startOf('hour').format('X')) !== action.payload
        )
    default:
      return state;
  }
};
