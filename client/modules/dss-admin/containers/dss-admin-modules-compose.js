import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import DSSAdminModules from './../components/dss-admin-modules.jsx';

const deps = (context, actions) => ({
  setFormModeAdd: actions.Modules.setFormModeAdd,
  setModuleToEdit: actions.Modules.setModuleToEdit,
  context: () => context
})

const composer = ({context, modules}, onData) => {

  onData(null, {modules})
}

export default composeAll(
  compose(composer),
  useDeps(deps)
)(DSSAdminModules);