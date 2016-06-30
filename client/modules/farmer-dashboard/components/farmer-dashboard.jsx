import React from 'react';

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
        const {plantingSeasons} = this.props;

        const plantingSeasonsHTML = plantingSeasons.map((plantingSeason, key) => {
            return (
                <li className="mdl-list__item mdl-list__item--two-line" key={key}>
                    <span className="mdl-list__item-primary-content">
                        <span>{plantingSeason.crop} - {plantingSeason.variety}</span>
                        <span className="mdl-list__item-sub-title">{plantingSeason.startDate} - {plantingSeason.targetEndDate}</span>
                    </span> 
                </li>
            );
        });

        return (
            <ul className="mdl-list">
                {plantingSeasonsHTML}
            </ul>
        );
    }

}

export default FarmerDashboard;