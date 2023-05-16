import React, { Component } from "react";
import ApexCharts from "react-apexcharts";
import '../CSS/Coin_Chart.css'
import { useQuery } from "react-query";

const DataChart =({coinName})=> {
 
  const Coin_Chart = "data1";
    
    const {isLoading, error, data} = useQuery
    (
	    Coin_Chart, () => {
        	return fetch(`https://api.bithumb.com/public/candlestick/${coinName}_KRW/24h`)
                .then((res) => res.json())
                .then((res) => res.data) // return값이 data에 담기게 된다. 
                
                }
            , { 
                enabled: !!Coin_Chart, // 해당 변수가 있을 때만 요청을 보낸다
              	
            }

    );
    if(isLoading){
      return <h1>로딩중!</h1>;
    }
    if(error){
        return <h1>에러 발생!</h1>;
    }
    
    return (
      <div className="charts">
     <button onClick={()=>console.log(coinName)}>123123</button>
     {coinName}
     <ApexCharts 
         
          type="candlestick"
          series={[
            {
              data: 
                  Object.values(data).map((price) => ({
                    x : new Date(price[0]),
                    y : [price[1], price[3], price[4], price[2]]

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
              width: 1,
            },
            yaxis: {
              tooltip:{
                enabled : true
              },

              labels: {
                
                style: {
                  colors: '#9c88ff'
                }
              }
            },
            xaxis: {
              type: "datetime",
              categories:  Object.values(data).map((price) => 
              new Date(price[0])
              ),
              labels: {
                
                style: {
                  colors: '#9c88ff'
                }
              }
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#DF7D46',
                  downward: '#3C90EB'
                }
              }
            }
          }}
        />
        
      </div>
    );
  }


export default DataChart;