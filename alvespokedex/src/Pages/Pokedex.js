import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { detailsNav } from '../Router/Coordinator';
import  GlobalContext  from '../Global/GlobalContext';
import axios from 'axios';
// import Header from '../Components/Header';


 function Pokedex() {
 
  const navigate = useNavigate();
  const { pokemon, pokedex, setPokedex, pokemonsCard, setPokemonsCard } = useContext(GlobalContext);

  const deletePokemon = (pokemon) => {
    const pokemonIndex = pokedex.findIndex((poke) => {
      return poke.name === pokemon.name;
    });

    const novaPokedex = [...pokedex];
    novaPokedex.splice(pokemonIndex, 1);
    setPokedex(novaPokedex);

  //   const pokemonsLista = [...pokemonsCard, pokemon];
  //   const pokemonsListOrdenada = pokemonsLista.sort((a, b) => {
  //     return a.id - b.id;
  //   });
  //   setPokemonsCard(pokemonsListaOrdenada);
  // };

  
   
  return (

  const pokedexLista =
    pokedex &&
    pokedex.map((pokemon) => {
      return (
        <div>
        <button onClick={() => detailsNav(navigate)}
          pokemon={pokemon}
          deletePokemon={deletePokemon}/>
          </div>
      );
    });

  return (
    <div>

      <div>{pokedexLista}</div>
      {/* <Header/> */}
      Pokedex
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
              <button onClick={()=>removeCard(pokemon)}>Libertar</button>
              </div>
           {/* </PokeCard>  */}
            </div>
            })}

    </div>
  );
}
}

export default Pokedex; 