import * as React from 'react';
import { useState } from 'react';
import './styles.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TogglePriceType({priceType,handlePriceTypeChange}) {
  

  return (
    <div className='toggle-prices' style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
    <ToggleButtonGroup
      color="primary"
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      aria-label="Platform"
      sx={{
        "&.Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--blue)!important",
          borderColor: "unset",
          color: "var(--blue) !important ",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue) !important",
        },
      }}
    >
      <ToggleButton value="price" className='toggle-btn'>Price</ToggleButton>
      <ToggleButton value="market_caps" className='toggle-btn'>Market Cap</ToggleButton>
      <ToggleButton value="total_volumes" className='toggle-btn'>Total Volume</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}