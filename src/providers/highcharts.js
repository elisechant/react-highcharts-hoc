
import React, {Component} from 'react';
import Highcharts from 'highcharts';


class HighchartsProvider extends Component {
	getChildContext() {
		const {
			Highcharts: Highcharts,
		};
		return {highcharts};
	}
	render() {
		return Children.only(this.props.children)
	}
}

export default HighchartsProvider;
