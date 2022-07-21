import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { pokedexNav, detailsNav } from '../Router/Coordinator'
import { GlobalContext } from '../Components/Global/GlobalContext'
import Header from "../Components/Header";



 function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <Header
      //   isDetails={false}
      //   title='Pokedex' goto={goToPokedex} />
      // <PokemonCard
      //   buttonAddRem='Adicionar'
      //   pokemonDetails={pokemonDetailsFromHome}
      //   dataUp={dataUp}
      //   buttonBattle={false}
      />
    </div>
  )
}

export default Home;