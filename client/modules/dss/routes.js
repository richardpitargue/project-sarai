import React from 'react';

import {Landing} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';

import DSSRootContent from './containers/dss-root-content';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);

  FlowRouter.route('/dss', {
    name: 'dss.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(CoreAppDrawer),
        content: React.createElement(DSSRootContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });
};