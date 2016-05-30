import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import YieldFormulasTable from './../../components/yield-calculator/yield-formulas-table.jsx';

const deps = (context, actions) => ({
  // goToAddPage: actions.Weather.goToAddPage,
  // add: actions.Weather.insertWeatherStation,
  goToEditPage: actions.YieldCalculator.goToEditPage,
  // edit: actions.Weather.editWeatherStation,
  // deleteWS: actions.Weather.deleteWeatherStation,
  // getYesterdayWeather: actions.Weather.getYesterdayWeather,
  context: () => context
})

const composer = ({context}, onData) => {

  onData(null, {})
}

export default composeAll(
  compose(composer),
  useDeps(deps)
)(YieldFormulasTable);