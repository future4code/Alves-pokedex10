import axios from 'axios';
import { useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';
import { BaseUrl } from '../Components/BaseUrl';


const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => { getPokemons()}, [])
  useEffect(() => {
    setPokemons(pokemons.filter((item) => {
      if (pokedex.includes(item)) {
        return false
      } else {
        return true
      }
    }
    )
    )

  }, [pokedex])

  const getPokemons = () => {
    let array = []
    let arraypoke = []
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
      .then((res) => {
      array = res.data.results
      array.forEach((pokemon) => {
        axios.get(pokemon.url).then(
          (res) => { 
            arraypoke = [...arraypoke, {name : res.data.name, stats: res.data.stats, sprites: res.data.sprites, types: res.data.types, moves: res.data.moves.slice(0, 4), id: res.data.id}]
            setPokemons(arraypoke)
          }
          )
          .catch((err)=>console.log(err))
        }
        ) 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const valor = {
    pokemons,
    setPokedex,
    pokedex
  }


  return (
    <GlobalContext.Provider value={valor}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState;