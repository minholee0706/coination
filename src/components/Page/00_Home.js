import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from "../01_main";
import Auth from "./02_Auth";
import Check_Coin from "./04_Check_Coin";
import Donate from "./07_Donate";
import DonateList from "./09_DonateList";
import Minting from "./10_Minting";
import NFTList from "./12_NFTList";

const MainHome =()=>{


    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/oauth/kakao/callback" element={<Auth />} />
                    <Route path="/Check_Coin" element={<Check_Coin />} />
                    <Route path="/Donation" element={<Donate />} />
                    <Route path="/DonateList" element={<DonateList />} />
                    <Route path="/Minting" element={<Minting />} />
                    <Route path="/NFTList" element={<NFTList />} />
                </Routes>
            </Router>
        </div>
    );
};

export default MainHome;