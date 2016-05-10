import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import ModulesForm from './../../components/forms/modules-form.jsx';
import MinRainAdvisoryForm from './../../components/forms/min-rain-advisory-form.jsx'

const deps = (context, actions) => ({
  setFormType: actions.Modules.setFormType,
  context: () => context
})

const modulesFormRedux = ({context}, onData) => {
  const {dssAdminStore} = context()

  onData(null, {})

  return dssAdminStore.subscribe(() => {
    const {moduleFormType} = dssAdminStore.getState()

    let moduleForm = null

    switch(moduleFormType) {
      case 'MIN_RAIN_ADVISORY':
        moduleForm = React.createElement(MinRainAdvisoryForm)
        break
      case 'YIELD_CALCULATOR':
        break
      case 'SOIL_MOISTURE':
        break
      default:
        break
    }

    onData(null, {moduleForm})
  })
}

export default composeAll(
  compose(modulesFormRedux),
  useDeps(deps)
)(ModulesForm);