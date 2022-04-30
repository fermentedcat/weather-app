export const getTemp = (params) => {
  return params.filter((param) => param.name === 't')[0].values[0]
}

export const getSymbol = (params) => {
  return params.filter((param) => param.name === 'Wsymb2')[0].values[0]
}