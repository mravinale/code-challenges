
// https://www.hackerrank.com/challenges/time-conversion
export class TimeConversion {
    public execute(timeString: string): string {

        // detect if the time is AM or PM
        let isPM = timeString.endsWith('PM');

        // remove the AM or PM from the time string and split the time string into hours, minutes and seconds
        let time = timeString.substring(0, 8).split(':');

        // convert the hours into an integer
        let hour = parseInt(time[0], 10);

        // if the time is PM, add 12 hours to the time
        if (isPM && hour !== 12) time[0] = (hour += 12).toString();

        // if the time is 12 AM, set it to 00
        if (!isPM && hour === 12) time[0] = "00";

        // convert the time to string
        return `${time[0]}:${time[1]}:${time[2]}`;
    }
}
