import math from 'mathjs';

export default {

  calculateGroupA(context, input) {
    const {Meteor, LocalState} = context

    // const yield =
    //   2432.594 - (0.347 * Math.pow(input.plantingDate, 2))
    //   + (0.013 * Math.pow(input.solarRadiation, 3))
    //   + (0.022 * Math.pow(input.maximumTemperature, 3))
    //   - (0.045 * Math.pow(input.minimumTemperature, 3))
    //   + (36.1 * Math.log10(input.precipitation))
    //   + (3.904 * input.soilTexture)
    //   + (1.818 * input.elevation)

    const yield =
      2432.59404486491
      + (3.90414764709241 * input.soilTexture)
      - (0.346938786456479 * Math.pow(input.plantingDate, 2))
      + (0.0125682924413065 * Math.pow(input.solarRadiation, 2))
      + (0.0217200698493205 * Math.pow(input.maximumTemperature, 3))
      - (0.0448599600151181 * Math.pow(input.minimumTemperature, 3))
      + (36.0999453935368 * Math.log10(input.precipitation))
      + (1.81807619134458 * input.elevation)

    return yield
  },

  calculateGroupB(cnotext, input) {
    const {Meteor, LocalState} = context

    const yield =
      2659.781 - (0.366 * Math.pow(input.plantingDate, 2))
      + (0.012 * Math.pow(input.solarRadiation, 3))
      + (0.021 * Math.pow(input.maximumTemperature, 3))
      - (0.05 * Math.pow(input.minimumTemperature, 3))
      + (34.414* Math.log10(input.precipitation))

    return yield
  },

  calculateGroupC(context, input) {
    const {Meteor, LocalState} = context

    const yield =
      2641.275 - (0.334 * Math.pow(input.plantingDate, 2))
      + (0.012 * Math.pow(input.solarRadiation, 3))
      + (0.020 * Math.pow(input.maximumTemperature, 3))
      - (0.040 * Math.pow(input.minimumTemperature, 3))
      + (23.140 * Math.log10(input.precipitation))
      + (3.060 * input.soilTexture)
      + (1660.468 * (1/input.elevation))

    return yield
  },

  calculateGroupD(context, input) {
    const {Meteor, LocalState} = context

    const yield =
      2489.184
      - (0.316 * Math.pow(input.plantingDate, 2))
      + (0.014 * Math.pow(input.solarRadiation, 3))
      + (0.016 * Math.pow(input.maximumTemperature, 3))
      - (0.028 * Math.pow(input.minimumTemperature, 3))
      + (17.720 * Math.log10(input.precipitation))
      + (5.820 * input.soilTexture)
      + (0.863 * input.elevation)

    return yield
  },

  calculateGroupE(context, input) {
    const {Meteor, LocalState} = context

    const yield =
      2488.956
      - (0.306 * Math.pow(input.plantingDate, 2))
      + (0.012 * Math.pow(input.solarRadiation, 3))
      + (0.010 * Math.pow(input.maximumTemperature, 3))
      - (0.007 * Math.pow(input.minimumTemperature, 3))
      - (0.173 * Math.pow(input.precipitation, 2))
      + (0.171 * input.elevation)

    return yield
  },

  calculateGroupF(context, input) {
    const {Meteor, LocalState} = context

    const yield =
      2592.298
      - (0.297 * Math.pow(input.plantingDate, 2))
      + (0.009 * Math.pow(input.solarRadiation, 3))
      + (0.004 * Math.pow(input.maximumTemperature, 3))
      - (2569.109 * (1/Math.pow(input.minimumTemperature, 3)))
      - (0.244 * Math.pow(input.precipitation, 2))
      + (13.688 * input.soilTexture)
      + (2.320 * input.elevation)

    return yield
  },

  calculateGroupG(context, input) {
    const {Meteor, LocalState} = context

    const yield =
      3604.237
      - (0.342 * Math.pow(input.plantingDate, 2))
      + (0.014 * Math.pow(input.solarRadiation, 3))
      + (0.015 * Math.pow(input.maximumTemperature, 3))
      - (0.031 * Math.pow(input.minimumTemperature, 3))
      - (0.062 * Math.log10(input.precipitation))
      - (135.369 * input.soilTexture)
      - (2.606 * input.elevation)

    return yield
  }

}