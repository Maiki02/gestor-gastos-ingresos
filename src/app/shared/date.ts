/**
 * Given a date of type Date. Returns a string in YYYY-MM-DD format
 * @param date Date
 * @returns string. Date in YYYY-MM-DD format
 */
export function getDateAAAAMMDD(date: Date): string {
    const year=date.getFullYear();
    const month=date.getMonth()<9? "0"+(date.getMonth()+1): date.getMonth()+1;
    const day=date.getDate()<10? "0"+date.getDate(): date.getDate();
    return `${year}-${month}-${day}`;
}