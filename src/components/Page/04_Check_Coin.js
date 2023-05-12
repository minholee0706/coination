import React from "react";
import Profile from "./03_Profile";
import '../CSS/Check_Coin.css';
import { QueryClient, QueryClientProvider } from "react-query";
import Data from "./06_Coin_query";
import DataChart from "./07_Coin_Chart";
import Coin_Api from "./05_Coin_api";



const queryClient = new QueryClient();

const Check_Coin =()=>{

    return (
        <div className="CheckCoin_All">
            <div><Profile /></div>
            {/* <div className="CoinAPI"><Coin_Api /></div> */}

            <QueryClientProvider client={queryClient} >
                <Data />
                <DataChart />
            </QueryClientProvider>
            
        </div>
    );
};

export default Check_Coin;


