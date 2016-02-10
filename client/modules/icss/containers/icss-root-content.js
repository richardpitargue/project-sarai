import React from 'react';
import ICSSRootBanner from './icss-root-banner';
import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const composerLandingPage = ({context}, onData) => {
	const sections = [];
	const spacing = false;

	sections.push(React.createElement(ICSSRootBanner, {
		banner: '/images/icss/icss-landing-banner.JPG'
	}));

	onData(null, {sections, spacing});
};

export default composeAll(
	composeWithTracker(composerLandingPage),
	useDeps()
)(SectionList);