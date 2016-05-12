import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import ModulesForm from './../../components/forms/modules-form.jsx';
import MinRainAdvisoryFormAdd from './min-rain-advisory-form-add'
import MinRainAdvisoryFormEdit from './min-rain-advisory-form-edit'


const deps = (context, actions) => ({
  setFormType: actions.Modules.setFormType,
  context: () => context
})

const modulesFormRedux = ({context}, onData) => {
  const {Meteor, dssAdminStore, Collections} = context()
  const {DSSModules} = Collections

  const state = dssAdminStore.getState()

  onData(null, {})

  if (state.formMode == 'EDIT'
      && Meteor.subscribe('dss-modules').ready()) {
    const module = DSSModules.find({"_id": state.moduleID}).fetch()[0]

    const moduleType = module.type
    let moduleForm = null
    const selectDisabled = true

    switch(module.type) {
      case 'MIN_RAIN_ADVISORY':
        moduleForm = React.createElement(MinRainAdvisoryFormEdit, {module, selectDisabled, moduleType
        })
        break
      // case 'YIELD_CALCULATOR':
      // case 'SOIL_MOISTURE':
      default:
        break
    }

    onData(null, {moduleForm})
  }

  return dssAdminStore.subscribe(() => {
    const {formMode, moduleFormType, moduleID} = dssAdminStore.getState()

    let moduleForm = null

    if (formMode == 'ADD') {
      switch(moduleFormType) {
        case 'MIN_RAIN_ADVISORY':
          moduleForm = React.createElement(MinRainAdvisoryFormAdd)
          break
        case 'YIELD_CALCULATOR':
          break
        case 'SOIL_MOISTURE':
          break
        default:
          break
      }
    }

    onData(null, {moduleForm})
  })

}

export default composeAll(
  compose(modulesFormRedux),
  useDeps(deps)
)(ModulesForm);