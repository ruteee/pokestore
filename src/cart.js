import React from  'react'
import {Avatar, Grid, Card, CardContent,CardActions, Typography, Button, CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


const useStyles = makeStyles({
    root: {

    },
    card: {
        width:'100%'

    },
    cardHeader:{
        fontSize: '40px',
        textAlign:'center'
    },


  })

let price = 0
function Cart(props){
    price  += Number(props.price)
    const classes = useStyles()
    return(
        <>
            <Card>
                <CardHeader
                    className={classes.cardHeader}
                    title="Cart"
                    avatar={
                        <Avatar>
                            <ShoppingCartIcon/>
                        </Avatar>}>                   
                </CardHeader>
                <Grid container direction='row' spacing={1} xs={12} >
                    <Grid container  item xs={12} spacing={1}>
                        <Grid item xs={12}>
                            {props.cartItem}
                        </Grid>
                    </Grid>
            </Grid>
                <CardContent>
                <Typography component="p"> <strong> Total:  </strong>{price} coins</Typography>
            </CardContent>
                <CardActions>
                <Button  variant='contained' color='primary'> Buy</Button>
            </CardActions>
            </Card>
            </>)
  
} export default Cart;