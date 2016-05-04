import React from 'react';

import {Landing, DSSAdmin} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';

import DSSAdminAppDrawer from './containers/dss-admin-app-drawer';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(DSSAdmin);

  FlowRouter.route('/dss/admin', {
    name: 'dss.admin',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(DSSAdminAppDrawer),
        // content: React.createElement(DSSRootContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });
};