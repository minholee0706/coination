import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from "../01_main";
import Auth from "./02_Auth";
import Check_Coin from "./04_Check_Coin";

const MainHome =()=>{


    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/oauth/kakao/callback" element={<Auth />} />
                    <Route path="/Check_Coin" element={<Check_Coin />} />
                    
                </Routes>
            </Router>
        </div>
    );
};

export default MainHome;