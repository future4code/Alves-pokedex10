import React from 'react'
import styled from 'styled-components';

const StyleCard = styled.div`
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 7.813rem;
    border-radius: 12px;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    display: flex;
    margin-top: 5vh;
    margin-right:2vw;
    width: 30vw;
    height: 25vh;
    background: ${props => props.type === "bug" && "#76A866"};
    background: ${props => props.type === "dark" && "#55433C"};
    background: ${props => props.type === "dragon" && "#004170;"};
    background: ${props => props.type === "electric" && "#FFC95E"};
    background: ${props => props.type === "fairy" && "#BD7886"};
    background: ${props => props.type === "fighting" && "#B0385A"};
    background: ${props => props.type === "fire" && "#EAAB7D;"};
    background: ${props => props.type === "flying" && "#A891EC"};
    background: ${props => props.type === "ghost" && "#7084CA"};
    background: ${props => props.type === "grass" && "#729F92;"};
    background: ${props => props.type === "ground" && "#B6866F"};
    background: ${props => props.type === "ice" && "#48A497"};
    background: ${props => props.type === "normal" && "#BF9762;"};
    background: ${props => props.type === "poison" && "#D1A3D0"};
    background: ${props => props.type === "psychic" && "#E05E65"};
    background: ${props => props.type === "rock" && "#9E8F65"};
    background: ${props => props.type === "steel" && "#B7B9D0"};
    background: ${props => props.type === "water" && "#71C3FF;"};
    img{
    position:relative;
    width: 12.063rem;
    height: 12.063rem;
    left:20%;
    bottom: 25%;
    margin-bottom: 5vh;
    }
    
`

const PokeCard = (props) => {
    
    return (
    <StyleCard type={props.cardType}>
        {props.children}
    </StyleCard>
  )
}

export default PokeCard
