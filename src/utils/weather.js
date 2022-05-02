import { checkIsDayTime } from "./date"

export const getTemp = (params) => {
  return params.filter((param) => param.name === 't')[0].values[0]
}

const getSymbol = (params) => {
  const wsymb2 = params.filter((param) => param.name === 'Wsymb2')[0].values[0]
  return wsymb2
}

export const getUnicodeSymbol = (params) => {
  const wsymb2 = getSymbol(params)
  return weatherSymbols[wsymb2]?.unicode || ''
}

export const getReactSymbol = (params, timeStamp) => {
  // get weather symbol by day/nighttime
  const isDaytime = checkIsDayTime(timeStamp)
  const wsymb2 = getSymbol(params)
  const variant = isDaytime ? 'day' : 'night'
  return weatherSymbols[wsymb2]?.reactIcon[variant]
}

const weatherSymbols = {
  1: {
    name: 'Clear sky',
    unicode: '\u263C',
    reactIcon: {
      day: 'WiDaySunny',
      night: 'WiNightClear',
    },
  },
  2: {
    name: 'Nearly clear sky',
    unicode: '\u2600',
    reactIcon: {
      day: 'WiDaySunny',
      night: 'WiNightClear',
    },
  },
  3: {
    name: 'Variable cloudiness',
    unicode: '\u26C5',
    reactIcon: {
      day: 'WiDayCloudy',
      night: 'WiNightAltCloudy',
    },
  },
  4: {
    name: 'Halfclear sky',
    unicode: '\u26C5',
    reactIcon: {
      day: 'WiDaySunnyOvercast',
      night: 'WiNightPartlyCloudy',
    },
  },
  5: {
    name: 'Cloudy sky',
    unicode: '\u2601',
    reactIcon: {
      day: 'WiCloudy',
      night: 'WiCloudy',
    },
  },
  6: {
    name: 'Overcast',
    unicode: '\u2601',
    reactIcon: {
      day: 'WiCloudy',
      night: 'WiCloudy',
    },
  },
  7: {
    name: 'Fog',
    unicode: '\u2637',
    reactIcon: {
      day: 'WiDayFog',
      night: 'WiNightFog',
    },
  },
  8: {
    name: 'Light rain showers',
    unicode: '\u2614',
    reactIcon: {
      day: 'WiDayShowers',
      night: 'WiNightShowers',
    },
  },
  9: {
    name: 'Moderate rain showers',
    unicode: '\u2614',
    reactIcon: {
      day: 'WiDayShowers',
      night: 'WiNightAltShowers',
    },
  },
  10: {
    name: 'Heavy rain showers',
    unicode: '\u2614',
    reactIcon: {
      day: 'WiDayRain',
      night: 'WiNightAltRain',
    },
  },
  11: {
    name: 'Thunderstorm',
    unicode: '\u26C8',
    reactIcon: {
      day: 'WiDayThunderstorm',
      night: 'WiNightAltThunderstorm',
    },
  },
  12: {
    name: 'Light sleet showers',
    unicode: '\u2604',
    reactIcon: {
      day: 'WiDaySleet',
      night: 'WiNightAltSleet',
    },
  },
  13: {
    name: 'Moderate sleet showers',
    unicode: '\u2604',
    reactIcon: {
      day: 'WiDaySleet',
      night: 'WiNightAltSleet',
    },
  },
  14: {
    name: 'Heavy sleet showers',
    unicode: '\u2604',
    reactIcon: {
      day: 'WiDaySleet',
      night: 'WiNightAltSleet',
    },
  },
  15: {
    name: 'Light snow showers',
    unicode: '\u2603',
    reactIcon: {
      day: 'WiDaySnow',
      night: 'WiNightAltSnow',
    },
  },
  16: {
    name: 'Moderate snow showers',
    unicode: '\u2603',
    reactIcon: {
      day: 'WiDaySnow',
      night: 'WiNightAltSnow',
    },
  },
  17: {
    name: 'Heavy snow showers',
    unicode: '\u2603',
    reactIcon: {
      day: 'WiDaySnow',
      night: 'WiNightAltSnow',
    },
  },
  18: {
    name: 'Light rain',
    unicode: '\u2602',
    reactIcon: {
      day: 'WiDaySprinkle',
      night: 'WiNightAltSprinkle',
    },
  },
  19: {
    name: 'Moderate rain',
    unicode: '\u2602',
    reactIcon: {
      day: 'WiDayShowers',
      night: 'WiNightAltShowers',
    },
  },
  20: {
    name: 'Heavy rain',
    unicode: '\u2602',
    reactIcon: {
      day: 'WiDayRain',
      night: 'WiNightAltRain',
    },
  },
  21: {
    name: 'Thunder',
    unicode: '\u2608',
    reactIcon: {
      day: 'WiDayThunderstorm',
      night: 'WiNightAltThunderstorm',
    },
  },
  22: {
    name: 'Light sleet',
    unicode: '\u2604',
    reactIcon: {
      day: 'WiDaySleet',
      night: 'WiNightAltSleet',
    },
  },
  23: {
    name: 'Moderate sleet',
    unicode: '\u2604',
    reactIcon: {
      day: 'WiDaySleet',
      night: 'WiNightAltSleet',
    },
  },
  24: {
    name: 'Heavy sleet',
    unicode: '\u2604',
    reactIcon: {
      day: 'WiDaySleet',
      night: 'WiNightAltSleet',
    },
  },
  25: {
    name: 'Light snowfall',
    unicode: '\u2638',
    reactIcon: {
      day: 'WiDaySnow',
      night: 'WiNightAltSnow',
    },
  },
  26: {
    name: 'Moderate snowfall',
    unicode: '\u2638',
    reactIcon: {
      day: 'WiDaySnow',
      night: 'WiNightAltSnow',
    },
  },
  27: {
    name: 'Heavy snowfall',
    unicode: '\u2638',
    reactIcon: {
      day: 'WiDaySnow',
      night: 'WiNightAltSnow',
    },
  },
}
