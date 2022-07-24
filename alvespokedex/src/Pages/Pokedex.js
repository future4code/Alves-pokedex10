import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { detailsNav } from '../Router/Coordinator';
import  GlobalContext  from '../Global/GlobalContext';
import axios from 'axios';



 function Pokedex() {
 
  const navigate = useNavigate();
  const { pokedex, setPokedex, pokemonsCard, setPokemonsCard, setPokeDetail, removeCard } = useContext(GlobalContext);


  

  return (
    <div>
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


export default Pokedex; 