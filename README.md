# Weather By Numbers
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>

## Installation

- Clone the repo
- In a terminal, run `npm install`
- To start the project in Development mode, run `npm run start`
- It is now running at http://localhost:3000/

## Available scripts / commands

- `npm run start` - Starts in development mode
- `npm run build` - Creates a build version

## Deployment

-

# Some notes on framework and architectural choices

## Frameworks

### View management with React

-

### State management

-

### Styling with SASS

Since node-sass is deprecated, I am using Dart Sass. I have chosen SASS over styled-components because I'm more familiar with it
and I don't see a need for additional programmatical styling.

### Animations

-

## Code organisation

Code is organized into the following folders:

- api - data fetching from SMHI weather API
- components - reusable components
- utils - reusable functions

---

## SMHI weather API
API url (example): `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/13.819552/lat/55.433993/data.json`

### Corner points (lon, lat)
- SW	2.250475, 52.500440
- SE	27.348870, 52.547483
- NE	37.848053, 70.740996
- NW	-8.541278, 70.655722

### SMHI weather API params
- t - value: temperature in celcius
- validTime - date and hour of the forecast
- Wsymb2 - value: symbol ref, 1 - 27

---
## Code formatter

Nope
