import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { detailsNav } from '../Router/Coordinator';
import GlobalContext from '../Global/GlobalContext';
import axios from 'axios';
import styled from 'styled-components';
import Ohno from '../imagens/ohno.png'
import Popup from 'reactjs-popup';
import PokeCard from '../Components/PokeCard';
import Type from '../Components/Type';

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
const Box = styled.div`
display: flex;
justify-content: space-evenly;
width: 60%;
`
const Container2 = styled.div`
width: 100%;
`



function Pokedex() {

  const navigate = useNavigate();
  const { pokedex, setPokedex, pokemonsCard, setPokemonsCard, setPokeDetail, removeCard } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <Container>
      <Titulo> Meus Pokémons </Titulo>
      {/* <Card> */}
      {pokedex && pokedex.map((pokemon) => {
        return <PokeCard cardType={pokemon.types[0].type.name}>
          <Container2>
            <p>#{pokemon.id}</p>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <h3>Types:</h3>
            <Box>
              {pokemon.types.map((ele) => { return <Type typeStyle={ele.type.name}>{ele.type.name.charAt(0).toUpperCase() + ele.type.name.slice(1)}</Type> })}
            </Box>
            <button onClick={() => { setPokeDetail(pokemon); detailsNav(navigate) }}>Detalhes</button>
            <BotaoDelete onClick={() => { removeCard(pokemon); setOpen(o => !o) }}>Libertar!</BotaoDelete>
          </Container2>
          <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
        </PokeCard>
      })}
            <Popup
              open={open} closeOnDocumentClick onClose={closeModal}
              position='top center'
              nested>
              <img src={Ohno} />
            </Popup>
      {/* </Card> */}
    </Container>
  );
}


export default Pokedex; 