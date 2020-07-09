import React, { useEffect, useState } from 'react'
import { Grid, } from '@material-ui/core'
import PokeCard from './pokeCard';
import axios from 'axios';


const dictId = {}
for (let i=1; i <= 808; i++){
    dictId[i] = Math.floor((Math.random() * 1000) + 1)
}

function NestedGrid(props){

    const [pokemonData, setPokemonData] = useState([]) 

    useEffect(() =>{
        async function getData(){
            const response = await axios.get(
                'https://pokeapi.co/api/v2/pokemon/'
            );
            setPokemonData(response.data.results)
        }
        getData()
    },[])

    function logData(data){
        props.logapp(data)
    }
    

    function GridLine(){  
        console.log(pokemonData)
        return(
            pokemonData.map((pokemon, i) =>(  
                    <Grid key={i} item xs={2}>
                        <PokeCard 
                            name={pokemon.name} 
                            image = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[pokemon.url.split('/').length - 2]}.png`}
                            price = {dictId[pokemon.url.split('/')[pokemon.url.split('/').length - 2]]}
                            log= {logData}
                        >
                        </PokeCard>
                    </Grid>))
                       
            )
   }
    return(            
        <>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={1}>   
                    <GridLine></GridLine>
                </Grid>
            </Grid>
                
        </>
    )
}
export default NestedGrid;