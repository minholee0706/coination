import React, { Component } from "react";
import ApexCharts from "react-apexcharts";
import '../CSS/Coin_Chart.css'

class DataChart extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data : ''   
    };
    console.log(this.state)
  }
  callApi = () => {
    fetch(`https://api.bithumb.com/public/candlestick/BTC_KRW/10m`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }
  componentDidMount() {
    this.callApi();
  }
  
  render() {
    return (
      <div className="charts">
        <button onClick={()=>console.log()}>123</button>
     {this.state.data ? <ApexCharts 
         
          type="candlestick"
          series={[
            {
              data: 
                  Object.values(this.state.data).map((price) => ({
                    x : price[0],
                    y : [price[1], price[2], price[3], price[4]]

                })),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: "candlestick",
              height: 200,
              width: 400,
              toolbar: {
                show:true,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            yaxis: {
              show: true,
            },
            xaxis: {
              type: "datetime",
              categories:  Object.values(this.state.data).map((price) => {
               return price[0]
              }),
              labels: {
                style: {
                  colors: '#9c88ff'
                }
              }
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#3C90EB',
                  downward: '#DF7D46'
                }
              }
            }
          }}
        /> : null}
      </div>
    );
  }
}

export default DataChart;