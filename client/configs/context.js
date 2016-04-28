import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';
import {ValidatedMethod as Method} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {check} from 'meteor/check';
import {mount} from 'react-mounter';
import {createStore} from 'redux';
const mediaLibDefaultState = {
  files: [],
  token: null
};

const aaaDefaultState = {
  stationID: 0
}

const aaaStore = createStore((state = aaaDefaultState, action) => {

  switch (action.type) {
    case 'CLEAR':
      return aaaDefaultState
    case 'VIEW_STATION':
      return Object.assign({}, state, {
        stationID: action.stationID
      })
    case 'ADD':
      return Object.assign({}, state, {
        stationID: state.stationID +=1
      })
    default:
      return state
  }
});

const dssDefaultState = {}

const dssStore = createStore((state = dssDefaultState, action) => {
  switch (action.type) {
    case 'CLEAR':
      return dssDefaultState
    case 'SET-STATION-ID':
      return Object.assign({}, state, {
        stationID: action.stationID
      })
    default:
      return state
  }
});

// dssStore.dispatch({
//  action: 'ADD-WD',
//  wd: 'ICAGAYAN2'
// })

const mediaLib = createStore((state = mediaLibDefaultState, action) => {
  switch (action.type) {
  case 'CLEAR':
    return mediaLibDefaultState;
  case 'ADD':
    return Object.assign({}, state, {
      files: [
        ...state.files,
        ...action.files
      ]
    });
  case 'SET_TOKEN':
    return Object.assign({}, state, {
      token: action.token
    });
  case 'REMOVE_TOKEN':
    return Object.assign({}, state, {
      token: null
    });
  default:
    return state;
  }
});

export function initContext() {
  return {
    Accounts,
    Meteor,
    mount,
    FlowRouter,
    Collections,
    Tracker,
    Method,
    SimpleSchema,
    check,
    mediaLib,
    dssStore,
    aaaStore
  };
}
