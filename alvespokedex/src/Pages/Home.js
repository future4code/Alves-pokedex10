import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import PokeCard from '../Components/PokeCard';
import { pokedexNav, detailsNav } from '../Router/Coordinator'
import { GlobalContext } from '../Components/Global/GlobalContext'


 function Home() {
  const navigate = useNavigate()
  return (
    <div>Home</div>
  )
}

export default Home;