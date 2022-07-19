import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import PokeCard from '../Components/PokeCard';
import { pokedexNav } from '../Router/Coordinator'


 function Home() {
  const navigate = useNavigate()
  const getPokemon = () => { 

  }
  return (
    <div>
      <button onClick={()=> pokedexNav(navigate)}>Pokedéx</button>
      <p>Meus pokemóns</p>
    </div>
  )
}

export default Home;