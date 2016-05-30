import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import YieldFormulasTable from './../../components/yield-calculator/yield-formulas-table.jsx';

const deps = (context, actions) => ({
  goToAddPage: actions.YieldCalculator.goToAddPage,
  goToEditPage: actions.YieldCalculator.goToEditPage,
  deleteItem: actions.YieldCalculator.deleteYieldFormula,
  context: () => context
})

const composer = ({context}, onData) => {

  onData(null, {})
}

export default composeAll(
  compose(composer),
  useDeps(deps)
)(YieldFormulasTable);