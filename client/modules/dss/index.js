import actions from './actions';
import routes from './routes';

import _CustomModules from './containers/custom-modules'

export default {
  actions,
  load: () => null,
  routes
};

export const CustomModules = _CustomModules