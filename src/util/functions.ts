import moment from "moment";
import 'moment-precise-range-plugin';

export function returnDiffData(date: Date) {
    const birthdayData = moment(date)
    const currentData = moment();
    const dateDiff = currentData.preciseDiff(birthdayData, true);

    return { days: dateDiff.days.toString(), months: dateDiff.months.toString(), years: dateDiff.years.toString() };
}

export function verifyIfDayBelongsMonth(days: string, month: string) {
    const currentDate = new Date();
    const MAX_DAYS_IN_MONTH = new Date(currentDate.getFullYear(), Number(month), 0).getDate();

    return Number(month) !== 0 && Number(days) <= MAX_DAYS_IN_MONTH;
}