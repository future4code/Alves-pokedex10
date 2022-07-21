import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import PokeCard from '../Components/PokeCard';
import { pokedexNav, detailsNav } from '../Router/Coordinator'
import  GlobalContext  from '../Global/GlobalContext'


 function Home() {
  const pokemons = useContext(GlobalContext).pokemons
  console.log(pokemons)
  const navigate = useNavigate()
  return (
    <div>
      Home
      <div>
      {pokemons && pokemons.map((pokemon)=> {
        return <div>
         {/* <PokeCard cardType={pokemon.type.name[0]}> */}
              <div>
              <p>#{pokemon.id}</p>
              <h2>{pokemon.name}</h2>
              <div>
              Types: {pokemon.types.map((ele)=>{return <div>{ele.type.name}</div>})}
              </div>
              <img src={pokemon.sprites.front_default}></img>
              </div>
              <div>
              <p>Detalhes</p>
              <button onClick={setPokedex(pokemon)}>Capturar!</button>
              </div>
           {/* </PokeCard>  */}
            </div>
            })}
      
      </div>
    </div>
  )
}

export default Home;