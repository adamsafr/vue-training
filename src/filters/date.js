export default value => {
  const date = new Date(value);
  const diffMs = new Date() - date;

  if (diffMs < 0) {
    return toDayMonthYearFormat(date);
  }

  const diffMinutes = diffMs / 1000 / 60;

  if (diffMinutes < 1) {
    return 'just now';
  }

  if (diffMinutes < 60) {
    return timeAgo(diffMinutes, 'minute');
  }

  const diffHours = diffMinutes / 60;

  if (diffHours < 24) {
    return timeAgo(diffHours, 'hour');
  }

  const diffDays = diffHours / 24;

  if (diffDays < 7) {
    return timeAgo(diffDays, 'day');
  }

  return toDayMonthYearFormat(date);
};

function toDayMonthYearFormat(date) {
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year }
  ] = dateTimeFormat.formatToParts(date);

  return `${day}-${month}-${year}`;
}

function timeAgo(value, amountString) {
  const intValue = Math.floor(value);

  let result = `${intValue} ${amountString}`;

  if (intValue > 1) {
    result += 's';
  }

  return result + ' ago';
}
