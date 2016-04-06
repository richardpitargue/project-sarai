import math from 'mathjs';

export default {

  calculateGroupA(context, input) {
    const {Meteor, LocalState} = context

    console.log(input)

    // const yield = 2432.594 - (0.347 * Math.pow(input.plantingDate))

    const yield =
      2432.594 - (0.347 * Math.pow(input.plantingDate, 2))
      + (0.013 * Math.pow(input.solarRadiation, 3))
      + (0.022 * Math.pow(input.maximumTemperature, 3))
      - (0.045 * Math.pow(input.minimumTemperature, 3))
      + (36.1 * Math.log10(input.precipitation))
      + (3.904 * input.soilTexture)
      + (1.818 * input.elevation)

    return yield
  },

  calculateGroupB(cnotext, input) {
    const {Meteor, LocalState} = context

  },

  calculateGroupC(context, input) {
    const {Meteor, LocalState} = context

  },

  calculateGroupD(context, input) {
    const {Meteor, LocalState} = context

  },

  calculateGroupE(context, input) {
    const {Meteor, LocalState} = context

  },

  calculateGroupF(context, input) {
    const {Meteor, LocalState} = context

  },

  calculateGroupG(context, input) {
    const {Meteor, LocalState} = context

  }

}