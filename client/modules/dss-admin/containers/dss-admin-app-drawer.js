import React from 'react';

import {AppDrawer} from '/client/modules/ui-components';
import {composeAll, compose, useDeps} from 'mantra-core';
import {CoreAppTitle} from '/client/modules/core';

import DSSNav from './dss-nav';

const composerApp = (obj, onData) => {
  const {title = CoreAppTitle, nav = DSSNav, module = 'dss', position = 'app-bar'} = obj;
  const options = {position, module};
  const appTitle = React.createElement(title, options);
  const appNav = React.createElement(nav, options);
  onData(null, {appTitle, appNav});
};

export default composeAll(
  compose(composerApp),
  useDeps()
)(AppDrawer)