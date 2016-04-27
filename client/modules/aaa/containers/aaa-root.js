import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import AAARoot from  './../components/aaa-root.jsx';

const composer = ({}, onData) => {

  const someText = 'some text'

  onData(null, {someText});
};

const composeAAARedux = ({context}, onData) => {
  const {aaaStore} = context()

  onData(null, {stationID: 0})

  return aaaStore.subscribe(() => {
    const {stationID} = aaaStore.getState()
    onData(null, {stationID})
  })
}

const deps = (context, actions) => ({
  sample: actions.SampleActions.sample,
  addSomething: actions.SampleActions.addSomething,
  context: () => context
})

export default composeAll(
  compose(composeAAARedux),
  useDeps(deps)
)(AAARoot);