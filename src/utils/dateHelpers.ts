export function dateString(date?: Date) {
  const dateWithoutTime = date || new Date();
  dateWithoutTime.setHours(0, 0, 0, 0);
  return dateWithoutTime.toDateString();
}

export function humanReadableDate(dateProp: any) {
  const date = new Date(dateProp);
  return `${date.toDateString()} at ${date.toLocaleTimeString()}`;
}
