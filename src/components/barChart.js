
import React, {PureComponent} from 'react';

import withHighcharts from './../hocs/withHighcharts';


class Chart extends PureComponent {

  constructor(props) {
    super(props);
    this._instance = null;
    this.config = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Historic World Population by Region'
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high'
        },
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
      }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
      }, {
        name: 'Year 2012',
        data: [1052, 954, 4250, 740, 38]
      }]
    };
  }

  componentDidMount() {
    const {Highcharts} = this.props;
    this.config.chart.renderTo = this.chartEl;
    this._instance = new Highcharts.chart(this.config);
  }

  componentWillUnmount() {
    if (this._instance) {
      this._instance.destroy();
      this._instance = null;
    }
  }

  render() {
    return (
      <div>
        <h1>Chart</h1>
        <div ref={el => this.chartEl = el} />
      </div>
    )
  }

}

const ConnectedChart = withHighcharts(Chart);

export default ConnectedChart;


























































// export default Chart;



// withLib = (props, context) => {
//   console.log('withLib', props)
// };
//
//
//
// class BarChart extends Component {
//   render() {
//     console.log('BarChart', this.context)
//     return <div>
//       <Cat2 {...this.context} />
//     </div>
//     // return <Cat2 />
//     // return Children.only(this.props.children)
//   }
// }
// BarChart.contextTypes = {
//   Highcharts: PropTypes.object,
// };
//
//
//
// class Cat2 extends Component {
//   getChildContext() {
//     return {
//       Highcharts: this.props.Highcharts
//     };
//   }
//   render() {
//     console.log('Cat2', this.props)
//     return <div>HEKHF</div>
//     // return Children.only(this.props.children)
//   }
// }
// Cat2.childContextTypes = {
//   Highcharts: PropTypes.object,
// };
//



// class BarChart extends Component {
//   render() {
//     console.log('barchart has HIghcharts:', this.context.Highcharts)
//     return (
//       <div>
//         <div config={{
//           chart: {
//             type: 'bar',
//           },
//           title: {
//             text: 'Historic World Population by Region'
//           },
//           xAxis: {
//             categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
//             title: {
//               text: null
//             }
//           },
//           yAxis: {
//             min: 0,
//             title: {
//               text: 'Population (millions)',
//               align: 'high'
//             },
//           },
//           credits: {
//             enabled: false
//           },
//           series: [{
//             name: 'Year 1800',
//             data: [107, 31, 635, 203, 2]
//           }, {
//             name: 'Year 1900',
//             data: [133, 156, 947, 408, 6]
//           }, {
//             name: 'Year 2012',
//             data: [1052, 954, 4250, 740, 38]
//           }]
//         }} />
//       </div>
//     )
//   }
// };

// BarChart.contextTypes = {
//   Highcharts: PropTypes.object,
// }
//
// export default BarChart;
