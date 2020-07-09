import React from 'react'
import { Button, TextField,  FormControl } from '@material-ui/core'



function Search(){
    return(
        <>
        <FormControl>
            <TextField label='pokémon' variant='outlined' id='pokeSearch'/>
            <Button variant='contained'  color='default'> Search</Button> 
        </FormControl>
                           
        </>
    )
}export default Search;