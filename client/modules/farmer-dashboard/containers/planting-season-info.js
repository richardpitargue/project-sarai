import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import PlantingSeasonInfo from './../components/planting-season-info.jsx';

const composePlantingSeasonInfo = ({context, plantingSeasonId}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {PlantingSeasons} = Collections;

    const userId = 'FppLeCMyWNku2iiX2'; // this is currently hard coded!! change this

    if(Meteor.subscribe('planting-seasons', userId).ready()) {
        const plantingSeasonInfo = PlantingSeasons.find({
            '_id': plantingSeasonId
        }).fetch()[0];

        onData(null, {plantingSeasonInfo});
    }
}

const deps = (context, actions) => ({
    addIrrigation: actions.FarmerActions.addIrrigation,
    context: () => context
});

export default composeAll(
    composeWithTracker(composePlantingSeasonInfo),
    useDeps(deps)
)(PlantingSeasonInfo);