
import React, {PureComponent} from 'react';
import Highcharts from 'highcharts';


const withHighcharts = Composed => {
	return class extends PureComponent {
		render() {
			<Composed highcharts={Highcharts} />
		}
	}
};