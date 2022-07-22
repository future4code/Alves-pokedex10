import React from 'react';
import { useNavigate } from 'react-router-dom';
import { detailsNav } from '../Router/Coordinator';
import  GlobalContext  from '../Global/GlobalContext';


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
    </div>
  );
}
}

export default Pokedex; 