import actions from './actions';
import routes from './routes';
import {AppBar} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer} from '/client/modules/core';

import _ICSSRootContent from './containers/icss-root-content';
import _ICSSRootBannerIconGroup from './containers/icss-root-banner-icon-group';

export default {
	AppBar,
	load: () => null,
	routes,
	actions
};

export const ICSSRootContent = _ICSSRootContent;
export const ICSSRootBannerIconGroup = _ICSSRootBannerIconGroup;

// const {key1, key2} = obj
// import * as variableName from ''
// variableName.key1