import YieldCalculatorMap from './../components/yield-calculator-map.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({context, plantingDateOptions}, onData) => {
  onData(null, {plantingDateOptions});
};

const deps = (context, actions) => ({
  calculateGroupA: actions.yieldCalculator.calculateGroupA,
  calculateGroupB: actions.yieldCalculator.calculateGroupB,
  calculateGroupC: actions.yieldCalculator.calculateGroupC,
  calculateGroupD: actions.yieldCalculator.calculateGroupD,
  calculateGroupE: actions.yieldCalculator.calculateGroupE,
  calculateGroupF: actions.yieldCalculator.calculateGroupF,
  calculateGroupG: actions.yieldCalculator.calculateGroupG,
  context: () => context
})

export default composeAll(
  compose(composer),
  useDeps(deps)
)(YieldCalculatorMap);