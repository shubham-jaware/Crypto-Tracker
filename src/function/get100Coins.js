import axios from "axios";

export const get100Coins =() =>{
    const myCoins=axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        return response.data;
        //setPaginatedCoins(response.data.slice(0, 10));
        //setLoading(false);
        ;
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
        
      });
      return myCoins;
}