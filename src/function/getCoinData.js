import axios from "axios";

export const getCoinData =(id) =>{
   const myData= axios
                .get(
                    `https://api.coingecko.com/api/v3/coins/${id}`
                )
                .then((response) => {
                    return response.data;
                    //setCoins(response.data);
                    //setPaginatedCoins(response.data.slice(0, 10));
                    //setLoading(false);

                    

                })
                .catch((error) => {
                    console.log("ERROR>>>", error.message);

                });
                return myData;
}