import React from 'react';
import {ICSSLanding, AppBar} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';
import ICSSRootContent from './containers/icss-root-content';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const ICSSLandingCtx = injectDeps(ICSSLanding);

  FlowRouter.route('/icss', {
    name: 'icss.root',
    action() {
      mount(ICSSLandingCtx, {
         appBar: React.createElement(CoreAppBar),
         appDrawer: React.createElement(CoreAppDrawer),
         content: React.createElement(ICSSRootContent),
         footer: React.createElement(CoreFooter)
      });
    }
  });

};