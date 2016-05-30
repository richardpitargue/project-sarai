import actions from './actions';
import routes from './routes';

import _MapSelector from './components/dashboard/map-selector.jsx'
import _CurrentWeather from './components/ui-components/current-weather.jsx'

export default {
  actions,
  load: () => null,
  routes
};

export const MapSelector = _MapSelector
export const CurrentWeather = _CurrentWeather