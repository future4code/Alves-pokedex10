import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HomeNav } from '../Router/Coordinator'


function DetailsPage() {
  return (
    <div>
      <button onClick={()=> HomeNav(navigate)}>Todos os Pokemóns</button>
    {/* <button>Excluir do Pokedéx</button> */} 

    </div>
  )
}
