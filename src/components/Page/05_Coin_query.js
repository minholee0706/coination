import { useQuery } from "react-query";
import '../CSS/Coin_api.css';
import DataChart from "./06_Coin_Chart";
import { useState } from "react";

const Data = ({getData}) => {

    const Coin_Data = "data";
    
    const {isLoading, error, data, isFetching} = useQuery(
	    Coin_Data, () => {
        	return fetch(`https://api.bithumb.com/public/ticker/ALL_KRW`)
                .then((res) => res.json())
                .then((res) => res.data) // return값이 data에 담기게 된다. 
                }
            , { 
                enabled: !!Coin_Data, // 해당 변수가 있을 때만 요청을 보낸다
              	refetchInterval: 1000 // 1초마다 갱신
            }

    );
    
    if(isLoading){
        return <h1>로딩중!</h1>;
    }
    if(error){
        return <h1>에러 발생!</h1>;
    }
    // console.log(data)

   
        
    return (
    <div>
        
        {true ? Object.entries(data).map(([key,value], i) =>{
                return(
                    <div>
                       
                        <div className="Coin_div" onClick={()=>getData(key)} key={key}>
                                <div  className="Coin_list" key={key}>{key}</div> 
                                
                                <div  className="Coin_list" >{value.closing_price} won</div> 
                                <div  className="Coin_list"><a style={ `${value.fluctate_24H}` < 0 ? { color:'blue'} : {color : 'red'} } >{value.fluctate_24H}  {`${value.fluctate_24H}`< 0 ?   'won ▼' : 'won ▲' }</a></div>
                                <div  className="Coin_list"><a style={ `${value.fluctate_rate_24H}` < 0 ? { color:'blue'} : {color : 'red'} } >{value.fluctate_rate_24H}  {`${value.fluctate_rate_24H}`< 0 ?   '% ▼' : '% ▲' }</a></div>
                                <div  className="Coin_list">{value.acc_trade_value_24H} </div>
                                <div  className="Coin_list">{value.units_traded} </div>           
                                
                    </div>
                    </div>
            )})
             : null }
             
           
        
    </div>);

}

export default Data;


