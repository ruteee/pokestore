import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardActionArea, CardContent, CardActions, Button, List, ListItemText } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
       maxWidth: 200,
    },
    media: {
      alignItems: 'center',
      alignText:'center',
      height: 100,
      width: 100,
      maxWidth:'100%',
      objectFit: 'contain'
    },
    content:{
        textTransform:'capitalize'
    }
  })


function PokeCard( props ){

    const handleCart = (e)=>{
        // props.log(props.price) 
            props.log(
            [(<Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <List>
                        <ListItemText>
                            <strong>Pokemon:</strong> {props.name}
                        </ListItemText>
                        <ListItemText>
                            <strong>Price: </strong> {props.price} coins
                        </ListItemText>
                    </List>
                </CardContent>
            </Card>), props.price]

        )
        e.preventDefault()
    }
    
    const classes = useStyles()
    return(
    <>
        <Card className={classes.root} coins={props.price}>
            <CardActionArea >
                    <CardMedia
                        className = {classes.media}
                        image = {props.image}
                        title = 'This is suposed to be a Pokémon'/> 
                    <CardContent className={classes.content}> 
                        <List>
                            <ListItemText   component={'span'}>
                                {props.name}
                            </ListItemText>
                            <ListItemText   component={'span'}>
                                {`${props.price} coins`}
                            </ListItemText>
                        </List>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' variant='contained' color='primary' onClick={handleCart}>
                        Add to cart now
                    </Button>
                </CardActions>
        </Card>
    </>)

}
export default PokeCard;