import React, { useState } from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core'
import Header from './header'
import NestedGrid from './nestedGrid'
import Cart from './cart'
import { Grid }  from '@material-ui/core'
import 'fontsource-roboto';
import Search from './search';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:100

  },
}));

function App() {
  const [dataItem, setDataItem] = useState([])
  const [priceItem, setPriceItem] = useState([])

  
  function logApp(data){
    console.log('on app ', data[0])
    setDataItem([...dataItem, data[0]])
    setPriceItem(data[1])
  }


  const classes=useStyles()
  return (
    <div className="App">
      <Header></Header>
      <Grid container direction ="row" justify='center' spacing={2} className={classes.root} >
          <Grid container item xs={9}>
            <NestedGrid logapp={logApp}/>
          </Grid>
          <Grid container item xs={3} direction='column'>
            <Search></Search>
            <Cart cartItem={dataItem} price={priceItem}/>
          </Grid>     
      </Grid>     
    </div>
  );
}

export default App;
