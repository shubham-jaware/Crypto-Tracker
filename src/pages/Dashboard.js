import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import BackToTOp from '../components/Common/BackToTop';

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const onSearchChange = (e) => {

    setSearch(e.target.value);
  };
  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );
  useEffect(() => {


    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        setCoins(response.data);
        //setPaginatedCoins(response.data.slice(0, 10));
        //setLoading(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
        setIsLoading(false);
      });
  }, []
 
  );
  return (
    <>
    <BackToTOp />
    {isLoading ? (
      <Loader />
    ) : (
      
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={filteredCoins} />
      <PaginationComponent />
    </div>
    )}
    </>
  )
  
}


export default DashboardPage;
