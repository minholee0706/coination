import React from "react";
import Profile from "./03_Profile";
import Coin_Api from "./05_Coin_api";
import '../CSS/Check_Coin.css';

const Check_Coin =()=>{

    return (
        <div className="CheckCoin_All">
            <div><Profile /></div>
            <div className="CoinAPI"><Coin_Api /></div>
        </div>
    );
};

export default Check_Coin;