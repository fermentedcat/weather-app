export const getOffsetDate = (timeStamp) => {
  const date = new Date(timeStamp)
  // add +/- timezone offset
  let offset = date.getTimezoneOffset() / 60
  date.setHours(date.getHours() + offset)
  return date
}

export const checkIsNoon = (timeStamp) => {
  // add +/- timezone offset and check if 12 o'clock
  const date = getOffsetDate(timeStamp)
  return date.getHours() === 12
}

export const getTime = (timeStamp) => {
  // returns date ex. '2022-04-30'
  const time = timeStamp.substring(11, 16)
  return time
}

export const getDate = (timeStamp) => {
  // returns date ex. '2022-04-30'
  const date = timeStamp.substring(0, 10)
  return date
}

export const getFormattedDate = (timeStamp) => {
  const date = getOffsetDate(timeStamp)
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-GB', options)
}