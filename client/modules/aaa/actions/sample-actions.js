export default {

  sample(context) {

    console.log('Sample...')

    const {aaaStore} = context

    aaaStore.dispatch({
      type: 'VIEW_STATION',
      stationID: 35
    })
  },

  addSomething(context) {
    const {aaaStore} = context

    aaaStore.dispatch({
      type: 'ADD'
    })
  }
}