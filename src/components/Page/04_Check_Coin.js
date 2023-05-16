import React, { useState } from "react";
import Profile from "./03_Profile";
import '../CSS/Check_Coin.css';
import { QueryClient, QueryClientProvider } from "react-query";
import DataChart from "./06_Coin_Chart";
import Data from "./05_Coin_query";




const queryClient = new QueryClient();

  
const Check_Coin =()=>{
    
    const [coinName, setCoinName] = useState("BTC");

    const getData = (coinName)=>{
        setCoinName(coinName);
    }
    return (
        <div className="CheckCoin_All">
            <div><Profile /></div>
            {/* <div className="CoinAPI"><Coin_Api /></div> */}

            <div className="QCP">
            <QueryClientProvider client={queryClient} >
            
                <div className="DataChart_api">
                 <DataChart coinName={coinName}/>
                </div>
                <div className="Data_api">
                    <Data getData={getData}/>
                </div>
            </QueryClientProvider>
            </div>    
        </div>
    );
};

export default Check_Coin;


