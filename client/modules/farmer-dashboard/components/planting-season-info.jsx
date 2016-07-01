import React from 'react';
import highcharts from 'highcharts';

class PlantingSeasonInfo extends React.Component {

    componentDidMount() {
        if(componentHandler) {
            componentHandler.upgradeDom();
        }

        const {plantingSeasonInfo} = this.props;

        if(plantingSeasonInfo.irrigationSchedule) {
            const plotData = [0]
                  plotAxis = [plantingSeasonInfo.startDate];
            for(const irrigation of plantingSeasonInfo.irrigationSchedule) {
                plotData.push(parseInt(irrigation.amount));
                plotAxis.push(irrigation.date);
            }

            $('#soil-moisture-graph').highcharts({
                title: {
                    text: 'Soil Moisture of ' + plantingSeasonInfo.crop + ' (' + plantingSeasonInfo.variety + ')',
                    x: -20 //center
                },
                subtitle: {
                    text: 'As of ' + new Date().toDateString(),
                    x: -20
                },
                xAxis: {
                    categories: plotAxis
                },
                yAxis: {
                    title: {
                        text: 'Soil Moisture (mm)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: 'mm'
                },
                series: [{
                    name: plantingSeasonInfo.crop + ' (' + plantingSeasonInfo.variety + ')',
                    data: plotData
                }]
            });
        }
    }

    componentDidUpdate() {
        if(componentHandler) {
            componentHandler.upgradeDom();
        }

        const {plantingSeasonInfo} = this.props;

        if(plantingSeasonInfo.irrigationSchedule) {
            const plotData = [0]
                  plotAxis = [plantingSeasonInfo.startDate];
            for(const irrigation of plantingSeasonInfo.irrigationSchedule) {
                plotData.push(parseInt(irrigation.amount));
                plotAxis.push(irrigation.date);
            }

            $('#soil-moisture-graph').highcharts({
                title: {
                    text: 'Soil Moisture of ' + plantingSeasonInfo.crop + ' (' + plantingSeasonInfo.variety + ')',
                    x: -20 //center
                },
                subtitle: {
                    text: 'As of ' + new Date().toDateString(),
                    x: -20
                },
                xAxis: {
                    categories: plotAxis
                },
                yAxis: {
                    title: {
                        text: 'Soil Moisture (mm)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: 'mm'
                },
                series: [{
                    name: plantingSeasonInfo.crop + ' (' + plantingSeasonInfo.variety + ')',
                    data: plotData
                }]
            });
        }
    }

    render() {
        const {plantingSeasonInfo, addIrrigation} = this.props;

        let irrigationScheduleHTML;

        if(plantingSeasonInfo.irrigationSchedule) {
            irrigationScheduleHTML = plantingSeasonInfo.irrigationSchedule.map((irrigation, key) => {
                return (
                    <li className="mdl-list__item mdl-list__item--two-line" key={key}>
                        <span className="mdl-list__item-primary-content">
                            <span>{irrigation.date}</span>
                            <span className="mdl-list__item-sub-title">Amount: {irrigation.amount} mm</span>
                        </span>
                    </li>
                );
            });
        }

        return (
            <div>
                <span><strong>Crop</strong>: {plantingSeasonInfo.crop}</span> <br />
                <span><strong>Crop Variety</strong>: {plantingSeasonInfo.variety}</span> <br />
                <span><strong>Start Date</strong>: {plantingSeasonInfo.startDate}</span> <br />
                <span><strong>Target End Date</strong>: {plantingSeasonInfo.targetEndDate}</span> <br />
                <form>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="amountField" />
                        <label className="mdl-textfield__label" htmlFor="amountField">Amount (mm)</label>
                        <span className="mdl-textfield__error">Please input a valid amount!</span>
                    </div>
                </form>
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" 
                        onClick={() => addIrrigation(plantingSeasonInfo._id, $('#amountField').val(), new Date())}
                >
                    <i className="material-icons">add</i>
                </button>
                <div className="mdl-grid">
                    <div className="mdl-cell--6-col">
                        <ul className="mdl-list">
                            {irrigationScheduleHTML}
                        </ul>
                    </div>
                    <div className="mdl-cell--6-col">
                        <div id="soil-moisture-graph" />
                    </div>
                </div>
            </div>
        );
    }
}

export default PlantingSeasonInfo;