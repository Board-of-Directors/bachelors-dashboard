import { CalendarDate, parseDate } from "@internationalized/date";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.locale("ru");
dayjs.extend(customParseFormat);

/**
 * Function **gteFormattedDate** formats date and returns ISO-standartized date.
 * 
 * @param date - current date in format DD.MM.YYYY
 * @returns parsed ISO-standartized date
 */
export const getFormattedDate = (date: string | undefined): CalendarDate => {
    let isoFullDate: string;

    if (date) {
        isoFullDate = dayjs(date, "DD.MM.YYYY", true).locale("ru").toISOString();
    } else {
        isoFullDate = dayjs(Date.now()).toISOString();
    }

    const isoShort = isoFullDate.slice(0, isoFullDate.lastIndexOf("T"));
    const parsedDate = parseDate(isoShort);

    return date ? parsedDate.add({ days: 1 }) : parsedDate;
};