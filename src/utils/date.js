export const checkIsNoon = (timeStamp) => {
  const date = new Date(timeStamp)
  // add +/- timezone offset and check if 12 o'clock
  let offset = date.getTimezoneOffset() / 60
  date.setHours(date.getHours() + offset)
  return date.getHours() === 12
}

export const getDate = (timeStamp) => {
  // returns date ex. '2022-04-30'
  const date = timeStamp.substring(0, 10)
  return date
}