import isSameDay from 'date-fns/isSameDay';

export function dateString(date?: Date) {
  const dateWithoutTime = date || new Date();
  dateWithoutTime.setHours(0, 0, 0, 0);
  return dateWithoutTime.toDateString();
}

export function humanReadableDate(dateProp: any) {
  const date = new Date(dateProp);
  return `${date.toDateString()} at ${date.toLocaleTimeString()}`;
}

export function twelveHourClockTime(date?: Date) {
  const today = date ? new Date(date) : new Date();
  return today.toLocaleString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });
}

export function determineIsSameDay(
  createdAt: string,
  prevDate?: string,
): boolean {
  const date = new Date(createdAt);
  let sameDay = false;
  if (prevDate) {
    // eslint-disable-next-line react/prop-types
    const previousChecklistDate = new Date(prevDate as any);
    if (previousChecklistDate) {
      sameDay = isSameDay(date, previousChecklistDate);
    }
  }
  return sameDay;
}
