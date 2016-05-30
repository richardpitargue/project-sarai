import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import YCForm from './../../components/yield-calculator/yc-form.jsx'

const deps = (context, actions) => ({
  callback: actions.Weather.editWeatherStation,
  context: () => context
})

const WSEditRedux = ({context}, onData) => {
  const {dssAdminStore, Meteor, Collections} = context()
  const {YieldFormulas} = Collections

  const state = dssAdminStore.getState()

  if (Meteor.subscribe('yield-formulas').ready()) {

    const formula = YieldFormulas.findOne({_id: state.formulaID})

    const _id = formula._id
    const crop = formula.crop
    const variety = formula.variety
    const yearClassification = formula.yearClassification
    const label = formula.location.label
    const coords0 = formula.location.coords[0]
    const coords1 = formula.location.coords[1]
    const expression = formula.expression

    onData(null, {formula, _id, crop, variety, label, yearClassification, coords0, coords1, expression})
  }

}

export default composeAll(
  composeWithTracker(WSEditRedux),
  useDeps(deps)
)(YCForm);