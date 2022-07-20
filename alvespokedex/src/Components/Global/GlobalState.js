import axios from 'axios';
import { useEffect, useState } from 'react';
import GlobalContext from  './GlobalContext';
import { BaseUrl } from  '../BaseUrl';


 const GlobalState = (props) =>{
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokeCard, setPokeCard] = useState([]);

  useEffect(()=>{
    const pokeList = [];

  },[pokemons])
  
  const getPokemons = () => {
    axios.get(`${BaseUrl}/pegarlinkget`)
    .then((res)=>{
      setPokemons(res.data.message);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  };

  const valor = {pokemons}
  const valores = {setPokemons}
  
  return (
    <GlobalContext.Provider value={{valor, valores}}>
     {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState;