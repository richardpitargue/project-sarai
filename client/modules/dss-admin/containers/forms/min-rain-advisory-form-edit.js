import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import MinRainAdvisoryForm from './../../components/forms/min-rain-advisory-form.jsx'

const deps = (context, actions) => ({
  callback: actions.Modules.updateMRAModule,
  context: () => context
})

const composer = ({context, module}, onData) => {
  onData(null, {
          title: module.title,
          minimumRainfall: module.data.minimumRainfall,
          m1: module.data.messages[0].message,
          m2: module.data.messages[1].message,
          m3: module.data.messages[2].message,
          id: module._id})
}

export default composeAll(
  compose(composer),
  useDeps(deps)
)(MinRainAdvisoryForm);