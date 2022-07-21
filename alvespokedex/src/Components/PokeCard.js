import React from 'react'

const PokeCard = (props) => {
    
    
    switch (props.cardType) {
        
        case 'bug':
        case 'dark':
        case 'dragon':
        case 'electric':
        case 'fairy':
        case 'fighting':
        case 'fire':
        case 'flying':
        case 'ghost':
        case 'grass':
        case 'ground':
        case 'ice':
        case 'normal':
        case 'poison':
        case 'psychic':
        case 'rock':
        case 'steel':
        case 'water':




        default:
            break;
    }
   
    return (
    <div>
        {props.children}
    </div>
  )
}

export default PokeCard
