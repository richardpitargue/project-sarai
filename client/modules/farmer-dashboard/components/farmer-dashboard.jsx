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
        const {plantingSeasons, selectPlantingSeason} = this.props;

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
            <div className="mdl-grid">
                <div className="mdl-cell--6-col">
                    <ul className="mdl-list">
                        {plantingSeasonsHTML}
                    </ul>
                </div>
            </div>
        );
    }

}

export default FarmerDashboard;