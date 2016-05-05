import React from 'react';

import {Landing, DSSAdmin} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';

import DSSAdminAppDrawer from './containers/dss-admin-app-drawer';
import DSSAdminRootContent from './containers/dss-admin-root-content';
import DSSAdminWeatherStations from './containers/dss-admin-ws';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(DSSAdmin);

  FlowRouter.route('/dss/admin', {
    name: 'dss.admin',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(DSSAdminAppDrawer),
        content: React.createElement(DSSAdminRootContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/dss/admin/weather-stations', {
    name: 'dss.admin.ws',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(DSSAdminAppDrawer),
        content: React.createElement(DSSAdminWeatherStations),
        footer: React.createElement(CoreFooter)
      });
    }
  });


};