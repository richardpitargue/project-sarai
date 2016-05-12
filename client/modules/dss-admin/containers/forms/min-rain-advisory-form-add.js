import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import MinRainAdvisoryForm from './../../components/forms/min-rain-advisory-form.jsx'

const deps = (context, actions) => ({
  callback: actions.Modules.insertMRAModule,
  context: () => context
})

const composer = ({context}, onData) => {
  const sample = ''

  onData(null, {sample})
}

export default composeAll(
  compose(composer),
  useDeps(deps)
)(MinRainAdvisoryForm);