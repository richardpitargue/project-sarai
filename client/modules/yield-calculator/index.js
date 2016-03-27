import actions from './actions';
import routes from './routes';

import _YieldCalculatorRootContent from './containers/yield-calculator-root-content';

import _YieldCalculatorMap from './components/yield-calculator-map.jsx';

export default {
  actions,
  load: () => null,
  routes
};

export const YieldCalculatorRootContent = _YieldCalculatorRootContent;
export const YieldCalculatorMap = _YieldCalculatorMap;

