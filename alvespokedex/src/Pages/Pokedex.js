import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import  GlobalContext  from '../Global/GlobalContext'
import { detailsNav } from '../Router/Coordinator';
// import Header from '../Components/Header';


 function Pokedex() {
   const {pokedex, removeCard, setPokeDetail} = useContext(GlobalContext)
   
  const navigate = useNavigate()

  
   
  return (

    <div>
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
    
  )
}

export default Pokedex; 