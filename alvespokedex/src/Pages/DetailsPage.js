import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  GlobalContext  from '../Global/GlobalContext'
import Ohno from '../imagens/ohno.png'
import Pokedex from './Pokedex';


export default function DetailsPage() {
 
  const {pokeDetail} = useContext(GlobalContext)

  console.log(pokeDetail)


  return (
    <div>

      DetailsPage
    <h1>{pokeDetail.name}</h1>
    </div>
  )
}
