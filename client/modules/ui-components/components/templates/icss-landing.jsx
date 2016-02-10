import React from 'react';
import classNames from 'classnames';

class ICSSLanding extends React.Component {

	render() {
		const {appBar, appDrawer, content, footer} = this.props;

		return (
		    <div>
	        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
	          		{appBar}
	          		{appDrawer}
	          		<main className="mdl-layout__content">
			            {content}
			            <br /><br /><br />
			            <br /><br /><br />
			            <br /><br /><br />
			            <br /><br /><br />
			            {footer}
			        </main>
	          		
	        	</div>
      		</div>
		);
	}
}

export default ICSSLanding;