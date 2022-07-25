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


const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 480px) {
        width: 100%;
    }
    background: #5E5E5E;
`
const Titulo = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
`
const CardsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Pagina = styled.section`
    display: flex;
    font-size: 24px;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 480px) {
        align-self: center;
    }
    a{
    padding: 1rem;
    border: 1px solid gray;
    margin: 0.05rem;
    @media (max-width: 480px) {
        padding: 0.2rem;
    }
    }
    a:hover {
        background-color: #4CAF50;
        border-radius: 5px;
        color: white;
    }
    @media (max-width: 480px) {
        width: 50%;
        height: 3rem;
    }
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

    <Container>
      <Titulo>Todos os pokemóns</Titulo>
    
      <Pagina>
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
      
     
      </Pagina>
    </Container>

  )
}

export default Home;