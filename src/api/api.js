const BASE_URL = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/'

export const fetchWeather = async (lon, lat) => {
  try {
    const response = await fetch(`${BASE_URL}lon/${lon}/lat/${lat}/data.json`)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to fetch weather')
  }
}