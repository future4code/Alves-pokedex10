import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  GlobalContext  from '../Global/GlobalContext'


export default function DetailsPage() {
 
  const {pokeDetail} = useContext(GlobalContext)


  return (
    <div>

      DetailsPage
    {/* <h1>{pokeDetail.name}</h1> */}
    </div>
  )
}
