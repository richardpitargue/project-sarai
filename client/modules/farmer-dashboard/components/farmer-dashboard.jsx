import React from 'react';
import FlowRouter from 'meteor/kadira:flow-router';

class FarmerDashboard extends React.Component {

    componentDidMount() {
        if(componentHandler) {
            componentHandler.upgradeDom();
        }
    }

    componentDidUpdate() {
        if(componentHandler) {
            componentHandler.upgradeDom();
        }
    }

    render() {
        const {plantingSeasons, selectPlantingSeason, addPlantingSeason} = this.props;

        const plantingSeasonsHTML = plantingSeasons.map((plantingSeason, key) => {
            return (
                <li className="mdl-list__item mdl-list__item--two-line list-hover" key={key} onClick={() => selectPlantingSeason(plantingSeason._id)}>
                    <span className="mdl-list__item-primary-content">
                        <span>{plantingSeason.crop} - {plantingSeason.variety}</span>
                        <span className="mdl-list__item-sub-title">{plantingSeason.startDate} - {plantingSeason.targetEndDate}</span>
                    </span>
                </li>
            );
        });

        return (
            <div>
            <form>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="cropName" />
                    <label className="mdl-textfield__label" htmlFor="amountField">Crop</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="cropVariety" />
                    <label className="mdl-textfield__label" htmlFor="amountField">Crop Variety</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="startDate" />
                    <label className="mdl-textfield__label" htmlFor="amountField">Start Date</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="targetEndDate" />
                    <label className="mdl-textfield__label" htmlFor="amountField">Target End Date</label>
                </div>
            </form>
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" 
                        onClick={() => addPlantingSeason($('#cropName').val(), $('#cropVariety').val(), new Date(), new Date())}
                >
                    <i className="material-icons">add</i>
                </button>
            <div className="mdl-grid">
                <div className="mdl-cell--6-col">
                    <ul className="mdl-list">
                        {plantingSeasonsHTML}
                    </ul>
                </div>
            </div>
            </div>
        );
    }

}

export default FarmerDashboard;