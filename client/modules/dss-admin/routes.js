import React from 'react';

import {Landing, DSSAdmin} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';

import DSSAdminAppDrawer from './containers/ui-components/dss-admin-app-drawer';
import DSSAdminDash from './containers/dss-admin-dash';
import DSSAdminWeatherStations from './containers/dss-admin-ws';
import DSSAdminYieldCalculator from './containers/dss-admin-yc';
import DSSAdminModules from './containers/dss-admin-modules';
import ModulesForm from './containers/forms/modules-form';
import WSEdit from './containers/weather-stations/ws-edit'
import WSAdd from './containers/weather-stations/ws-add'

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(DSSAdmin);

  FlowRouter.route('/dss/admin', {
    name: 'dss.admin',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(DSSAdminAppDrawer),
        content: React.createElement(DSSAdminDash),
        // footer: React.createElement(CoreFooter)
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
        // footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/dss/admin/modules', {
    name: 'dss.admin.modules',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(DSSAdminAppDrawer),
        content: React.createElement(DSSAdminModules),
        // footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/dss/admin/modules/add', {
    name: 'dss.admin.modules.add',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(DSSAdminAppDrawer),
        content: React.createElement(ModulesForm),
        // footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/dss/admin/modules/edit', {
    name: 'dss.admin.modules.edit',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(DSSAdminAppDrawer),
        content: React.createElement(ModulesForm),
        // footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/dss/admin/weather-stations/edit', {
    name: 'dss.admin.ws.edit',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(DSSAdminAppDrawer),
        content: React.createElement(WSEdit)
      });
    }
  });

  FlowRouter.route('/dss/admin/weather-stations/add', {
    name: 'dss.admin.ws.add',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(DSSAdminAppDrawer),
        content: React.createElement(WSAdd)
      });
    }
  });

  FlowRouter.route('/dss/admin/yield-calculator', {
    name: 'dss.admin.ws.add',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(DSSAdminAppDrawer),
        content: React.createElement(DSSAdminYieldCalculator)
      });
    }
  });

};