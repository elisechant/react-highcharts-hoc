
import React, {Component} from 'react';
import Highcharts from 'highcharts';


class HighchartsProvider extends Component {
	getChildContext() {
		return {
			'Highcharts': this.props.Highcharts || Highcharts
		}
	}
	render() {
		return Children.only(this.props.children)
	}
}

export default HighchartsProvider;
