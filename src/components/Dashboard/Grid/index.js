import React, { useState } from 'react';
import './styles.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { saveItemToWatchlist } from "../../../function/saveItemToWatchlist";
import StarIcon from "@mui/icons-material/Star";
import { removeItemToWatchlist } from "../../../function/removeItemToWatchlist";

function Grid({ coin }) {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}>
                <div className='info-flex'>
                    <img src={coin.image} alt="Description of the image" className='coin-logo' />
                    <div className='name-col'>
                        <p className='coin-symbol'>{coin.symbol}</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                    <div
    className={`watchlist-icon ${coin.price_change_percentage_24h < 0 && "watchlist-icon-red"}`}
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: `2px solid ${coin.price_change_percentage_24h < 0 ? 'var(--red)' : 'var(--green)'}`,
        borderRadius: '50%',
        color: `${coin.price_change_percentage_24h < 0 ? 'var(--red)' : 'var(--green)'}`,
        padding: '0.5rem',
        height: '1.5rem',
        width: '1.5rem',
    }}
    onClick={(e) => {
        if (isCoinAdded) {
            // remove coin
            removeItemToWatchlist(e, coin.id, setIsCoinAdded);
        } else {
            setIsCoinAdded(true);
            saveItemToWatchlist(e, coin.id);
        }
    }}
>
    {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
</div>

                </div>
                {coin.price_change_percentage_24h > 0 ? (
                    <div className='chip-flex'>
                        <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className='icon-chip'>
                            <TrendingUpRoundedIcon /></div>
                    </div>
                ) : (
                    <div className='chip-flex'>
                        <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className='icon-chip chip-red'>
                            <TrendingDownRoundedIcon />
                        </div>
                    </div>
                )}
                <div className='info-container'>
                    <h3 className='coin-price'
                        style={{
                            color: coin.price_change_percentage_24h < 0
                                ? "var(--red)"
                                : "var(--green",
                        }}
                    >
                        ${coin.current_price.toLocaleString()}
                    </h3>
                    <p className='total-volume'>
                        Total Volume:
                        ${coin.total_volume.toLocaleString()}
                    </p>
                    <p className='total-volume'>
                        Market Cap: ${coin.market_cap.toLocaleString()}
                    </p>
                </div>

            </div>
        </Link>
    )
}

export default Grid;
