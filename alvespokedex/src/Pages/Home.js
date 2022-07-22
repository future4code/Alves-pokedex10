import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { pokedexNav, detailsNav } from '../Router/Coordinator'
import  GlobalContext  from '../Global/GlobalContext'
import Header from "../Components/Header/Header";



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
              <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
              </div>
              <div>
              <button onClick={()=>{setPokeDetail(pokemon); detailsNav(navigate)}}>Detalhes</button>
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