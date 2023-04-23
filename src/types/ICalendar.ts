import moment from "moment";

export interface ICalendar {
    thisWeek: moment.Moment,
    startDay: moment.Moment,
}
