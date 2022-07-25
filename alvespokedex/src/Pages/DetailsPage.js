import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  GlobalContext  from '../Global/GlobalContext'
import Ohno from '../imagens/ohno.png'
import Pokedex from './Pokedex';
import styled from 'styled-components';
import pokebola from "../imagens/pokebola"

 const ContainerDetail = styled.section`
    background-color: #5E5E5E;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
`
 const Titles = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
    align-self: flex-start;
    margin-left: 1.563rem;
`
 const ContainerPokemon = styled.section`
    display: flex;
    width: calc(100% - 1.563rem);
    height: 41rem;
    border-radius: 12px;
    margin: 1.563rem;
    justify-content: space-around;
    background-color: ${props => props.typePokemon === "grass" && "#729F92;"};
    background-color: ${props => props.typePokemon === "fire" && "#EAAB7D;"};
    background-color: ${props => props.typePokemon === "water" && "#71C3FF;"};
    background-color: ${props => props.typePokemon === "bug" && "#76A866"};
    background-color: ${props => props.typePokemon === "normal" && "#BF9762;"};
    background-color: ${props => props.typePokemon === "poison" && "#D1A3D0"};
    background-color: ${props => props.typePokemon === "electric" && "#FFC95E"};
    background-color: ${props => props.typePokemon === "ground" && "#B6866F"};
    background-color: ${props => props.typePokemon === "fairy" && "#BD7886"};
    background-color: ${props => props.typePokemon === "fighting" && "#B0385A"};
    background-color: ${props => props.typePokemon === "psychic" && "#E05E65"};
    background-color: ${props => props.typePokemon === "rock" && "#9E8F65"};
    background-color: ${props => props.typePokemon === "ghost" && "#7084CA"};
    background-color: ${props => props.typePokemon === "ice" && "#48A497"};
    background-color: ${props => props.typePokemon === "dragon" && "#004170;"};
    background-color: ${props => props.typePokemon === "steel" && "#B7B9D0"};
    background-color: ${props => props.typePokemon === "dark" && "#55433C"};
    background-color: ${props => props.typePokemon === "flying" && "#A891EC"};
    background-image: url(${pokebola});
    background-size: 55%;
    background-repeat: no-repeat;
    background-position: 58.5rem;
    @media (max-width: 480px) {
        height: 100%;
        width: 100%;
        flex-wrap: wrap;
    }
`
 const BigContainerSmall = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 480px) {
        display: none;
    }
`
 const ContainerImgSmall = styled.section`
    width: 17.625rem;
    height: 17.625rem;
    background-color: #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
       display: none;
    }
`

 const ImgSmall = styled.img`
    width: 8rem;
    height: 8rem;
    @media (max-width: 480px) {
        display: none;
    }
`

 const ContainerStats = styled.section`
    margin-top: auto;
    margin-bottom: auto;
    width: 21.438rem;
    height: 38.313rem;
    background-color: #FFFFFF;
    border-radius: 8px;
    p{
        font-size: 24px;
        font-weight: 800;
        @media (max-width: 480px) {
            font-size: 14px;
    }
    }
    @media (max-width: 480px) {
        width: 90%;
        height: 20rem;
    }
`

 const ContainerData = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
 const H2 = styled.h2`
    font-size: 48px;
    margin: 0;
    color: #FFFFFF;
    @media (max-width: 480px) {
        font-size: 20px;
    }
`
 const H3 = styled.h3`
    font-size: 16px;
    margin: 0;
    color: #FFFFFF;
`

 const ContainerInfos = styled.section`
    display: flex;
    flex-direction: column;
`

 const ContainerMoves = styled.section`
    width: 18.25rem;
    height: 28.313rem;
    background-color: #FFFFFF;
    border-radius: 8px;
    p{
        font-size: 24px;
        font-weight: 800;
        @media (max-width: 480px) {
            font-size: 14px;
    }
    }
    @media (max-width: 480px) {
        width: 8rem;
        height: 14rem;
    }
`

 const Moves = styled.section`
    border: 1px dashed rgba(0, 0, 0, 0.14);
    padding: 0.625rem;
    border-radius: 12px;
    background-color: #ECECEC;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    margin-bottom: 1.25rem;
`
 const ContainerImgBig = styled.section`
    height: 48rem;
    align-self: flex-end;
    width: 16.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 480px) {
        width: 10rem;
        height: 8rem;
        font-size: 14px;
        flex-direction: row;
        align-self: flex-start;
    }
`
 const ImgBig = styled.img`
    width: 16.875rem;
    height: 16.875rem;
    @media (max-width: 480px) {
        width: 5rem;
        height: 5rem;
    }
`
 const ButtonCaptur = styled.button`
    border-radius: 8px;
    background-color: #FFFFFF;
    color: #0F0F0F;
    width: 10rem;
    height: 3rem;
    border: none;
    padding: 0.25rem 0.625rem ;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    cursor: pointer;
    margin-top: 3rem;
    :hover {
        background-color: #FF6262;
        color: #FFFFFF;
    }
    @media (max-width: 480px) {
        width: 5rem;
        height: 1.5rem;
        font-size: 10px;
    }
`
 const ButtonDelete = styled.button`
    width: 10rem;
    height: 3rem;
    background-color: #FF6262;
    border-radius: 8px;
    padding: 0.25rem 0.625rem;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 3rem;
    cursor: pointer;
    :hover {
        background-color: #FFFFFF;
        color: #0F0F0F;
    }
    @media (max-width: 480px) {
        width: 5rem;
        height: 1.5rem;
        font-size: 10px;
    }
`
 const ContainerProgress = styled.section`
display: flex;
align-items: center;
margin-left: auto;
margin-right:auto;
    h3{
        font-size: 24px;
        font-weight: 800;
        @media (max-width: 480px) {
        font-size: 10px;
    }
    }
    p {
        color: gray;
        font-size: 16px;
        font-weight: 400;
        @media (max-width: 480px) {
        font-size: 10px;
    }
    }
`

 const Progress = styled.progress`
    height: 1rem;
    background-color: #FF6262;
    margin-left: 1rem;
    @media (max-width: 480px) {
        height: 0.5rem;
    }
`
export default function DetailsPage() {
 
  const {pokeDetail} = useContext(GlobalContext)

  console.log(pokeDetail)


  return (
    <div>
     <ContainerDetail  >
      <Titles>Detalhes</Titles>
      <ContainerPokemon typePokemon={types && types[0].type && types[0].type.name}>
        <BigContainerSmall>
          <ContainerImgSmall>
            <ImgSmall src={images && images.front_default} />
          </ContainerImgSmall>
          <ContainerImgSmall>
            <ImgSmall src={images && images.back_default} />
          </ContainerImgSmall>
        </BigContainerSmall>
        <ContainerStats>
          <p>Experiência:</p>
          {stats && stats.map((status) => {
            return (
              <ContainerProgress>
                <p>{status.stat.name} {status.base_stat} </p>
                <Progress max={200} value={status.base_stat} key={status.stat.name}></Progress>
              </ContainerProgress>
            )
          })}
          <p>total = {stats && stats[0]?.base_stat + stats[1]?.base_stat + stats[2]?.base_stat + stats[3]?.base_stat + stats[4]?.base_stat + stats[5]?.base_stat}</p>
        </ContainerStats>
        <ContainerData>
          <ContainerInfos>
            <H3 >#{pokeDetail.id}</H3>
            <H2>{pokeDetail.name}</H2>
            <div>
              {types && types.map((type) => {
                const pokemonType = type.type.name
                return (
                  <DefineTypes pokemonType={pokemonType} />
                )
              })}
            </div>
          </ContainerInfos>
          <ContainerMoves>
            <p>Habilidades:</p>
            {moves && moves.map((move) => {
              const pokeMove = move.ability.name
              return (
                <Moves>{pokeMove}</Moves>
              )
            })}
          </ContainerMoves>
        </ContainerData>
        </ContainerPokemon>
    </ContainerDetail>
    </div>
  )
}
