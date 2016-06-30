import '/node_modules/material-design-lite/material';
import highcharts from 'highcharts/highstock';
require('highcharts/modules/exporting')(highcharts)
require('highcharts/highcharts-more')(highcharts)

import {createApp} from 'mantra-core';
import {initContext} from './configs/context';


// This is deprecated...
import coreModule from './modules/core';

// import cmsModule from './modules/cms';
import coreModuleV2 from './modules/core-v2';
import eskwelaModule from './modules/eskwela';
import oldAboutModule from './modules/old-about-v1';
import oldInteractiveMaps from './modules/old-interactive-maps';
import experiment from './modules/experiment';
import dss from './modules/dss';
import dssAdmin from './modules/dss-admin';
import farmerDashboard from './modules/farmer-dashboard';

// These are the new ones
// import aboutModule from './modules/about-v1';
// import cmsModule from './modules/cms';
import weatherMonitoring from './modules/weather-monitoring';
import monitoring from './modules/monitoring';
import MdlCoreDeisgn from './modules/mdl-core-design';

const context = initContext();
const app = createApp(context);

// Load first modules
// Loading the deperacted
app.loadModule(coreModuleV2);
app.loadModule(coreModule);
app.loadModule(eskwelaModule);
app.loadModule(weatherMonitoring);
app.loadModule(monitoring);
app.loadModule(oldAboutModule);
app.loadModule(oldInteractiveMaps);
app.loadModule(experiment);
app.loadModule(dss);
app.loadModule(dssAdmin);
app.loadModule(farmerDashboard);

// Load the new ones here
app.loadModule(MdlCoreDeisgn);


// Load routes last.
app.init();
