export default {

  setPredictedYield(context, predictedYield) {
    const {dssStore} = context

    dssStore.dispatch({
      type: 'SET-PREDICTED-YIELD',
      predictedYield
    })
  }
}