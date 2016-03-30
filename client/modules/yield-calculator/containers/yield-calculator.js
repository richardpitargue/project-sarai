import YieldCalculatorMap from './../components/yield-calculator-map.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({context, plantingDateOptions}, onData) => {
  onData(null, {plantingDateOptions});
};

const deps = (context, actions) => ({
  calculateGroupA: actions.yieldCalculator.calculateGroupA,
  context: () => context
})

export default composeAll(
  compose(composer),
  useDeps(deps)
)(YieldCalculatorMap);