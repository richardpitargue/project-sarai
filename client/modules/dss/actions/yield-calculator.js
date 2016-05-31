export default {

  spy(context, predictedYield) {
    const {dssStore} = context

    dssStore.dispatch({
      type: 'SET-PREDICTED-YIELD',
      predictedYield
    })
  }
}