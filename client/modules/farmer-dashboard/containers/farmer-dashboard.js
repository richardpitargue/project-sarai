import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import FarmerDashboard from './../components/farmer-dashboard.jsx';

const composeDashboard = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {PlantingSeasons} = Collections;

    const userId = 'KaaEoaKnAo6NzksB7'; // this is currently hard coded!! change this

    if(Meteor.subscribe('planting-seasons', userId).ready()) {
        const plantingSeasons = PlantingSeasons.find().fetch();

        onData(null, {plantingSeasons});
    }
}

export default composeAll(
    composeWithTracker(composeDashboard),
    useDeps()
)(FarmerDashboard);