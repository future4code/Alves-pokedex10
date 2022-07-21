import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { pokedexNav, detailsNav } from '../Router/Coordinator'
import  GlobalContext  from '../Global/GlobalContext'
import Header from "../Components/Header/Header";



 function Home() {
  const navigate = useNavigate()

  const {pokemons, setPokedex, pokedex} = useContext(GlobalContext)
  const handleCard = (pokemon)=> {
    let arraypokes = pokedex
      arraypokes = [...arraypokes, pokemon]
    setPokedex(arraypokes)
    console.log(pokedex)
  }
  console.log(pokemons)
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
              <button onClick={()=>handleCard(pokemon)}>Capturar!</button>
              </div>
           {/* </PokeCard>  */}
            </div>
            })}
      
      </div>

    </div>
  )
}

export default Home;