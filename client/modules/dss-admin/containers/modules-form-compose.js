import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import ModulesForm from './../components/forms/modules-form.jsx';

const deps = (context, actions) => ({
  // getYesterdayWeather: actions.Weather.getYesterdayWeather,
  context: () => context
})

const composer = ({context}, onData) => {
  const sample = ''
  onData(null, {sample})
}

export default composeAll(
  compose(composer),
  useDeps(deps)
)(ModulesForm);