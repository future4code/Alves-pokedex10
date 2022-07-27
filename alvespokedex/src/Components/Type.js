import React from 'react'
import styled from 'styled-components';

const TypeStyle = styled.div`
width: 40%;
height: 30px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
background: ${props => props.type === 'bug' && "#5A804E"};
background: ${props => props.type === "dark" && "#332924"};
background: ${props => props.type === "dragon" && "#003459;"};
background: ${props => props.type === "electric" && "#CCA14B"};
background: ${props => props.type === "fairy" && "#99606D"};
background: ${props => props.type === "fighting" && "#802941"};
background: ${props => props.type === "fire" && "#B88561"};
background: ${props => props.type === "flying" && "#8472BA"};
background: ${props => props.type === "ghost" && "#4D5B8C"};
background: ${props => props.type === "grass" && "#4D6B63"};
background: ${props => props.type === "ground" && "#825F4F"};
background: ${props => props.type === "ice" && "#317068"};
background: ${props => props.type === "normal" && "#8C6E48"};
background: ${props => props.type === "poison" && "#9E7B9E"};
background: ${props => props.type === "psychic" && "#BF5056"};
background: ${props => props.type === "rock" && "#6B6145"};
background: ${props => props.type === "steel" && "#8B8D9E"};
background: ${props => props.type === "water" && "#5A9CCC"};
`
const Type = (props) => {
    
    console.log(props)
    return (
    <TypeStyle type={props.typeStyle}>
        {props.children}
    </TypeStyle>
  )
}

export default Type
