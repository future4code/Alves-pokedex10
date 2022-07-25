import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { pokedexNav, detailsNav } from '../Router/Coordinator'
import  GlobalContext  from '../Global/GlobalContext'
import Header from "../Components/Header/Header";
import styled from 'styled-components';

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
      {/* <Card/> */}
      <Pagina>
      {pokemons && pokemons.map((pokemon)=> {
        return <div>
         {/* <PokeCard cardType={pokemon.type.name[0]}> */}
              <div>
              <p>#{pokemon.id}</p>
              <h2>{pokemon.name}</h2>
              <div>
              Types: {pokemon.types.map((ele)=>{return <div>{ele.type.name}</div>})}
              </div>
              <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
              </div>
              <div>
              <button onClick={()=>{setPokeDetail(pokemon); detailsNav(navigate)}}>Detalhes</button>
              <button onClick={()=>handleCard(pokemon)}>Capturar!</button>
              </div>
           {/* </PokeCard>  */}
            </div>
            })}
      
      {/* </Card> */}
      </Pagina>
    </Container>
  )
}

export default Home;