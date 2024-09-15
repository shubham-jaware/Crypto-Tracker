
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { coinObject } from '../function/convertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../function/getCoinData';
import { getCoinPrices } from '../function/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import { borderColor } from '@mui/system';
import SelectDays from '../components/Coin/SelectDays';
import TogglePriceType from '../components/Coin/PriceType';
import { settingChartData } from '../function/settingChartData';

function CoinPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(30);
   const [chartData, setChartData] = useState({});
   const [priceType,setPriceType] = useState("prices");

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id,days,setChartData]); // Add days as dependency if you plan to change the days dynamically

    async function getData() {
        try {
            const data = await getCoinData(id);
            if (data) {
                coinObject(setCoinData, data);
                const prices = await getCoinPrices(id, days);

                if (prices && prices.length > 0) {
                    // Update the chart data with actual values from API
                    const labels = prices.map(price => {
                        const date = new Date(price[0]);
                        return `${date.getMonth() + 1}/${date.getDate()}`;
                    });

                    const datasets = [{
                        data: prices.map(price => price[1]), // Assuming the price is at index 1
                        fill: true,
                        
                        borderWidth:1,
                        tension:0.25,
                        backgroundColor: "rgba(230,210,242,0.1)",
                        borderColor:'#8230b1',
                        pointRadius:0.1,

                    }];

                    setChartData({
                        labels,
                        datasets,
                    });
                }
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false); // Ensure loading is set to false after data fetch
        }
    }

    const handleDaysChange = async (event) => {
        setIsLoading(true); // Set loading state to true to indicate data fetching
      
        try {
          const newDays = parseInt(event.target.value); // Parse the selected value as an integer
      
          if (isNaN(newDays) || newDays <= 0) {
            throw new Error("Invalid number of days. Please enter a positive integer.");
          }
      
          const prices = await getCoinPrices(id, newDays); // Fetch prices for the new duration
      
          if (prices && prices.length > 0) {
            // Update chart data with the new prices
      
            // **(Assumption) Verify price data format:**
            // Check if prices is an array of arrays (timestamps and prices)
      
            const labels = prices.map((price) => {
              const date = new Date(price[0]);
              return `${date.getMonth() + 1}/${date.getDate()}`; // Format date as MM/DD
            });
      
            const datasets = [{
              data: prices.map((price) => price[1]), // Assuming price is at index 1
              fill: true,
              borderWidth: 1,
              tension: 0.25,
              backgroundColor: "rgba(230,210,242,0.1)",
              borderColor: '#8230b1',
              pointRadius: 0.1,
            }];
      
            setChartData({ labels, datasets });
            setDays(newDays); // Update the days state to trigger a re-render
          } else {
            console.warn("No price data found for the selected number of days.");
          }
        } catch (error) {
          console.error("Error fetching price data:", error);
          // **(Optional) Implement exponential backoff for retries**
        } finally {
          setIsLoading(false); // Set loading state to false after data fetching (or error handling)
        }
      };

      const handlePriceTypeChange = async (event) => {
        setIsLoading(true);
        setPriceType(event.target.value);
        const prices = await getCoinPrices(id, days, event.target.value);
        if (prices) {
          settingChartData(setChartData, prices);
          setIsLoading(false);
        }
      };
    return (
        <div>
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className='grey-wrapper' style={{padding:'0rem 1rem'}}>
                        {coinData && <List coin={coinData} />}
                    </div>
                    <div className='grey-wrapper'>
                        <SelectDays days={days} handleDaysChange={handleDaysChange}/>
                        <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                        {chartData && <LineChart chartData={chartData} />}
                    </div>
                    {coinData && <CoinInfo heading={coinData.data} desc={coinData.desc} />}
                </>
            )}
        </div>
    );
}

export default CoinPage;
