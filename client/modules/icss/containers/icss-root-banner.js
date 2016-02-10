import React from 'react';
import {CoreRootBannerIconGroup} from '/client/modules/core';
import ICSSRootBannerIconGroup from './icss-root-banner-icon-group';
import {Banner, BannerTitle} from '/client/modules/ui-components';
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({banner}, onData) => {
	const leftSection = React.createElement(BannerTitle, {
		title: 'Integrated Crop Support System',
		text: 'Get recommendations on best farming practices to maximize your yield<br/>Farmers can register for integrated advisories or proceed directly to the different farming systems.'
	});
	
	const rightSection = React.createElement(ICSSRootBannerIconGroup, {
	    iconGroup: banner.iconGroup
  	});

	onData(null, {background: banner, leftSection, rightSection});
};

export default composeAll(
	compose(composer),
	useDeps()
)(Banner);