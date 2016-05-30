export default {

  goToEditPage(context, formulaID) {
    const {dssAdminStore, FlowRouter} = context

    dssAdminStore.dispatch({
      type: 'SET-FORMULA-ID',
      formulaID
    })

    FlowRouter.go('/dss/admin/yield-calculator/edit')
  }
}