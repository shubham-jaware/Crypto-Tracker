import React, { useState } from 'react';
import {  createTheme, ThemeProvider } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./styles.css";
import Grid from '../Grid';
import './styles.css';
import List from '../List';


export default function TabsComponent({ coins }) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#8230b1',
      }
    }
  })
  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };
  return (
    <ThemeProvider theme={theme}>
      <div >
        <TabContext value={value}>

          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />

          </TabList>

          <TabPanel value="grid">
            <div className='grid-flex'>
              {coins.map((coin, i) => {
                return <Grid coin={coin} key={i} />;
              })}
            </div></TabPanel>
          <TabPanel value="list">
            <table className='list-table'>
              <div>{coins.map((item, i) => {
                return <List coin={item} key={i} />
                  
             
              })}
              </div>
            </table>
          </TabPanel>

        </TabContext>
      </div>
    </ThemeProvider>
  );
}
