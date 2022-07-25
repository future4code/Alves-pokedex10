import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { detailsNav } from '../Router/Coordinator';
import  GlobalContext  from '../Global/GlobalContext';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #5E5E5E;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    padding: 0.5rem;
    @media (max-width: 480px) {
        height: 100%;
    }
`
const BotaoDelete = styled.button`
    width: 9.125rem;
    height: 2.375rem;
    background-color: #FF6262;
    border-radius: 8px;
    padding: 0.25rem 0.625rem;
    border: none;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 5rem;
        height: 2rem;
        font-size: 14px;
    }
    `
    const Titulo = styled.h1`
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: #FFFFFF;
    `
const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`



 function Pokedex() {
 
  const navigate = useNavigate();
  const { pokedex, setPokedex, pokemonsCard, setPokemonsCard, setPokeDetail, removeCard } = useContext(GlobalContext);

  return (
    <Container>
     <Titulo> Meus Pokémons </Titulo>
     {/* <Card> */}
      {pokedex && pokedex.map((pokemon)=> {
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
              <button onClick={()=>{setPokeDetail(pokemon);detailsNav(navigate)}}>Detalhes</button>
              <BotaoDelete onClick={()=>removeCard(pokemon)}>Libertar</BotaoDelete>
              </div>
           {/* </PokeCard>  */}
            </div>
            })}
{/* </Card> */}
    </Container>
  );
}


export default Pokedex; 