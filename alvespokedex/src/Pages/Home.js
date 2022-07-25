import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { pokedexNav, detailsNav } from '../Router/Coordinator'
import  GlobalContext  from '../Global/GlobalContext'
import styled from 'styled-components';
import PokeCard from '../Components/PokeCard';
import Type from '../Components/Type';

const Box = styled.div`
display: flex;
justify-content: space-evenly;
width: 60%;
`
const Container = styled.div`
width: 100%;
`



 function Home() {
  const navigate = useNavigate()

  const {pokemons, setPokedex, pokedex, setPokeDetail} = useContext(GlobalContext)
  const handleCard = (pokemon)=> {
    let arraypokes = pokedex
      arraypokes = [...arraypokes, pokemon]
    setPokedex(arraypokes)
    console.log(pokedex)
  }
  console.log(pokemons)
  return (
    
      <div>
        <h1>Todos os Pokemons:</h1>
      {pokemons && pokemons.map((pokemon)=> {
        return <PokeCard cardType={pokemon.types[0].type.name}>
              <Container>
              <p>#{pokemon.id}</p>
              <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
              <h3>Types:</h3>
              <Box>
               {pokemon.types.map((ele)=>{return <Type typeStyle={ele.type.name}>{ele.type.name.charAt(0).toUpperCase() + ele.type.name.slice(1)}</Type>})}
              </Box>
              <button onClick={()=>{setPokeDetail(pokemon); detailsNav(navigate)}}>Detalhes</button>
              <button onClick={()=>handleCard(pokemon)}>Capturar!</button>
              </Container>
              <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
           </PokeCard> 
            })}
      </div>
  )
}

export default Home;