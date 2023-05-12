import { useQuery } from "react-query";

const DataChart = () => {

    const 필요한데이터요청 = "data";
    
    const {isLoading, error, data, isFetching} = useQuery(
	    필요한데이터요청, () => {
        	return fetch(`https://api.bithumb.com/public/candlestick/BTC_KRW/24h`)
                .then((res) => res.json())
                .then((res) => res.data) // return값이 data에 담기게 된다. 
                }
            , { 
                enabled: !!필요한데이터요청, // 해당 변수가 있을 때만 요청을 보낸다
              	refetchInterval: 1000 // 1초마다 갱신
            }

    );
    
    if(isLoading){
        return <h1>로딩중!</h1>;
    }
    if(error){
        return <h1>에러 발생!</h1>;
    }
    
    
    // return (
    // <div>
    //     <p>데아터 보여주기</p>
    //     {true ? Object.entries(data).map(([key,value], i) =>{
    //             return(
    //                 <div className="Coin_div" key={i}>
    //                         <div  className="Coin_list">{key}</div> 
    //                         <div  className="Coin_list" >{value.closing_price} won</div> 
    //                         <div  className="Coin_list"><a style={ `${value.fluctate_24H}` < 0 ? { color:'blue'} : {color : 'red'} } >{value.fluctate_24H}  {`${value.fluctate_24H}`< 0 ?   'won ▼' : 'won ▲' }</a></div>
    //                         <div  className="Coin_list"><a style={ `${value.fluctate_rate_24H}` < 0 ? { color:'blue'} : {color : 'red'} } >{value.fluctate_rate_24H}  {`${value.fluctate_rate_24H}`< 0 ?   '% ▼' : '% ▲' }</a></div>
    //                         <div  className="Coin_list">{value.acc_trade_value_24H} </div>
    //                         <div  className="Coin_list">{value.units_traded} </div>
    //                     <div className="Coin_Alert">
                         
                           
    //                     </div>
    //                 </div>
    //         )})
    //          : null }
        
    // </div>);
}

export default DataChart;