export const getTemp = (params) => {
  return params.filter((param) => param.name === 't')[0].values[0]
}

export const getSymbolUnicode = (params) => {
  const wsymb2 = params.filter((param) => param.name === 'Wsymb2')[0].values[0]
  return weatherSymbols[wsymb2]?.unicode || ''
}

const weatherSymbols = {
  1: {
    name: 'Clear sky',
    unicode: '\u263C'
  },
  2: {
    name: 'Nearly clear sky',
    unicode: '\u2600'
  },
  3: {
    name: 'Variable cloudiness',
    unicode: '\u26C5'
  },
  4: {
    name: 'Halfclear sky',
    unicode: '\u26C5'
  },
  5: {
    name: 'Cloudy sky',
    unicode: '\u2601'
  },
  6: {
    name: 'Overcast',
    unicode: '\u2601'
  },
  7: {
    name: 'Fog',
    unicode: '\u2637'
  },
  8: {
    name: 'Light rain showers',
    unicode: '\u2614'
  },
  9: {
    name: 'Moderate rain showers',
    unicode: '\u2614'
  },
  10: {
    name: 'Heavy rain showers',
    unicode: '\u2614'
  },
  11: {
    name: 'Thunderstorm',
    unicode: '\u26C8'
  },
  12: {
    name: 'Light sleet showers',
    unicode: '\u2604'
  },
  13: {
    name: 'Moderate sleet showers',
    unicode: '\u2604'
  },
  14: {
    name: 'Heavy sleet showers',
    unicode: '\u2604'
  },
  15: {
    name: 'Light snow showers',
    unicode: '\u2603'
  },
  16: {
    name: 'Moderate snow showers',
    unicode: '\u2603'
  },
  17: {
    name: 'Heavy snow showers',
    unicode: '\u2603'
  },
  18: {
    name: 'Light rain',
    unicode: '\u2602'
  },
  19: {
    name: 'Moderate rain',
    unicode: '\u2602'
  },
  20: {
    name: 'Heavy rain',
    unicode: '\u2602'
  },
  21: {
    name: 'Thunder',
    unicode: '\u2608'
  },
  22: {
    name: 'Light sleet',
    unicode: '\u2604'
  },
  23: {
    name: 'Moderate sleet',
    unicode: '\u2604'
  },
  24: {
    name: 'Heavy sleet',
    unicode: '\u2604'
  },
  25: {
    name: 'Light snowfall',
    unicode: '\u2638'
  },
  26: {
    name: 'Moderate snowfall',
    unicode: '\u2638'
  },
  27: {
    name: 'Heavy snowfall',
    unicode: '\u2638'
  }
}
