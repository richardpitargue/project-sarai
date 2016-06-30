import React from 'react';

import {Landing} from '/client/modules/ui-components';

import FarmerDashboard from './containers/farmer-dashboard';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);

  FlowRouter.route('/farmer', {
    name: 'farmer.root',
    action() {
      mount(LandingCtx, {
        content: React.createElement(FarmerDashboard),
      });
    }
  });
};