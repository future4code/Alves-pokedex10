import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  GlobalContext  from '../Global/GlobalContext'
import Ohno from '../imagens/ohno.png'
import Pokedex from './Pokedex';
import styled from 'styled-components';
import pokebola from "../imagens/pokebola.png";


const Titulo = styled.h1`
    font-weight: 700;
    color: #FFFFFF;
    align-self: flex-start;
    margin-left: 1.563rem;
    font-family: 'Poppins', sans-serif;
    `
 const ContainerPoke = styled.section`
    display: flex;
    width: calc(100% - 1.563rem);
    height: 41rem;
    border-radius: 12px;
    margin: 1.563rem;
    justify-content: space-around;
    background-color: ${props => props.type === "grass" && "#729F92;"};
    background-color: ${props => props.type === "fire" && "#EAAB7D;"};
    background-color: ${props => props.type === "water" && "#71C3FF;"};
    background-color: ${props => props.type === "bug" && "#76A866"};
    background-color: ${props => props.type === "normal" && "#BF9762;"};
    background-color: ${props => props.type === "poison" && "#D1A3D0"};
    background-color: ${props => props.type === "electric" && "#FFC95E"};
    background-color: ${props => props.type === "ground" && "#B6866F"};
    background-color: ${props => props.type === "fairy" && "#BD7886"};
    background-color: ${props => props.type === "fighting" && "#B0385A"};
    background-color: ${props => props.type === "psychic" && "#E05E65"};
    background-color: ${props => props.type === "rock" && "#9E8F65"};
    background-color: ${props => props.type === "ghost" && "#7084CA"};
    background-color: ${props => props.type === "ice" && "#48A497"};
    background-color: ${props => props.type === "dragon" && "#004170;"};
    background-color: ${props => props.type === "steel" && "#B7B9D0"};
    background-color: ${props => props.type === "dark" && "#55433C"};
    background-color: ${props => props.type === "flying" && "#A891EC"};
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
    const ContainerDetalhe = styled.section`
       background-color: #5E5E5E;
       display: flex;
       flex-direction: column;
       height: 100%;
       width: 100%;
       align-items: center;
       `
       const ImagemPequena = styled.section`
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
 const ContainerGrande = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 480px) {
        display: none;
    }
`

 const ImgPequena = styled.img`
    width: 8rem;
    height: 8rem;
    @media (max-width: 480px) {
        display: none;
      }
      `
const Info = styled.section`
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         `
 const ContainerStatus = styled.section`
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

 const Letra1 = styled.h2`
    font-size: 48px;
    margin: 0;
    color: #FFFFFF;
    @media (max-width: 480px) {
        font-size: 20px;
    }
`
 const Letra2 = styled.h3`
    font-size: 16px;
    margin: 0;
    color: #FFFFFF;
`

 const ContainerInfo = styled.section`
    display: flex;
    flex-direction: column;
`

 const Movimento1 = styled.section`
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

 const Movimento2 = styled.section`
    border: 1px dashed rgba(0, 0, 0, 0.14);
    padding: 0.625rem;
    border-radius: 12px;
    background-color: #ECECEC;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    margin-bottom: 1.25rem;
`
 const BoxMainImage = styled.section`
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
 const MainImg = styled.img`
    width: 16.875rem;
    height: 16.875rem;
    @media (max-width: 480px) {
        width: 5rem;
        height: 5rem;
    }
`


 const Status = styled.section`
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

 const Progresso = styled.progress`
    height: 1rem;
    background-color: #FF6262;
    margin-left: 1rem;
    @media (max-width: 480px) {
        height: 0.5rem;
    }
`

export default function DetailsPage () {
 const { pokeDetail } = useContext(GlobalContext)

  console.log(pokeDetail)

  return (
    <div>
     <ContainerDetalhe  >
      <Titulo>Detalhes</Titulo>
      <ContainerPoke type={pokeDetail && pokeDetail.types[0].type.name}>
        <ContainerGrande>
          <ImagemPequena>
            <ImgPequena src={pokeDetail.sprites && pokeDetail.sprites.front_default} />
          </ImagemPequena>
          <ImagemPequena>
            <ImgPequena src={pokeDetail.sprites && pokeDetail.sprites.back_default} />
          </ImagemPequena>
        </ContainerGrande>
        <ContainerStatus>
          <p>Experiência:</p>
          {pokeDetail.stats && pokeDetail.stats.map((status) => {
            return (
              <Status>
                <p>{status.stat.name} {status.base_stat} </p>
                <Progresso max={200} value={status.base_stat} key={status.stat.name}></Progresso>
              </Status>
            )
          })}
          <p>total = {pokeDetail.stats && pokeDetail.stats[0]?.base_stat + pokeDetail.stats[1]?.base_stat + pokeDetail.stats[2]?.base_stat + pokeDetail.stats[3]?.base_stat + pokeDetail.stats[4]?.base_stat + pokeDetail.stats[5]?.base_stat}</p>
        </ContainerStatus>
        <Info>
          <ContainerInfo>
            <Letra2 >#{pokeDetail.id}</Letra2>
            <Letra1>{pokeDetail.name}</Letra1>
            <div>
              {pokeDetail.types && pokeDetail.types.map((type) => {
                const pokemonType = type.type.name
                return (
                  <div pokemonType={pokemonType} />
                )
              })}
            </div>
          </ContainerInfo>
          <Movimento1>
            <p>Habilidades:</p>
            {pokeDetail.moves && pokeDetail.moves.map((ability) => {
              const pokeMove = ability.move.name
              return (
                <Movimento2>{pokeMove}</Movimento2>
              )
            })}
          </Movimento1>
        </Info>
        <BoxMainImage>
          <MainImg src={pokeDetail.sprites.other["official-artwork"].front_default} />
        </BoxMainImage>
        </ContainerPoke>
    </ContainerDetalhe>
    </div>
  )
}
