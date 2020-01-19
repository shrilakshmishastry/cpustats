import React from 'react';
import * as Wails from '@wailsapp/runtime';
import Chart from 'react-apexcharts';

class HelloWorld extends React.Component {
  constructor(props, context) {
    super();
    this.state = {
      options:{
        labels:["cpu_usage"]
      },
      series:[0]
    };


  }
  componentDidMount(){
    Wails.Events.On("cpu_usage",cpu_usage=>{
      if(cpu_usage){
        console.log(cpu_usage.avg);
        const value = Array.from(this.state.series);
        value[0] = cpu_usage.avg;
        this.setState({series:value});
      }
    })
  }



  render() {

    return (
      <Chart options={this.state.options} series={this.state.series} type="radialBar" width={1000} height={500} />
    );
  }
}

export default HelloWorld;
