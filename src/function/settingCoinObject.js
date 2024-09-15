export const settingCoinObject = (data, setCoin) => {
    if (data && data.id && data.market_data && data.image && data.description) {
      setCoin({
        id: data.id,
        name: data.name || 'N/A',
        symbol: data.symbol || 'N/A',
        image: data.image.large || 'N/A',
        desc: data.description.en || 'Description not available',
        price_change_percentage_24h: data.market_data.price_change_percentage_24h || 0,
        total_volume: data.market_data.total_volume.usd || 0,
        current_price: data.market_data.current_price.usd || 0,
        market_cap: data.market_data.market_cap.usd || 0,
      });
    } else {
      console.error('Invalid data passed to settingCoinObject', data);
      setCoin({
        id: 'N/A',
        name: 'N/A',
        symbol: 'N/A',
        image: 'N/A',
        desc: 'No description available',
        price_change_percentage_24h: 0,
        total_volume: 0,
        current_price: 0,
        market_cap: 0,
      });
    }
  };
  