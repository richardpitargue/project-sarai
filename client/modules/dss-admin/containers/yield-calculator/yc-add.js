import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import YCForm from './../../components/yield-calculator/yc-form.jsx'
import DSSAdminHeader from './../../components/ui-components/dss-admin-header.jsx'

const deps = (context, actions) => ({
  callback: actions.YieldCalculator.addYieldFormula,
  context: () => context
})

const YCAddRedux = ({context}, onData) => {
  const header = React.createElement(DSSAdminHeader, {title: 'Add New Formula'})

  onData(null, {header})
}

export default composeAll(
  composeWithTracker(YCAddRedux),
  useDeps(deps)
)(YCForm);