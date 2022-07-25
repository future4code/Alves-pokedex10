import React, { useContext } from 'react'
import Logo from '../../imagens/Logo.png'
import { ButtonBack, ButtonDel, ButtonPokedex, ContainerHeader, ImgLogo, Nav, NavList } from './HeaderStyled'
import { voltar, pokedexNav } from '../../Router/Coordinator'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../Global/GlobalContext'


const Header = () => {
    const navigate = useNavigate()
  const {removeCard, pokeDetail} = useContext(GlobalContext)
    

    const defineButtonRight = () => {
        if (window.location.pathname === "/") {
            return (
                <ButtonPokedex onClick={() => pokedexNav(navigate)}> Pokedéx </ButtonPokedex>
            )
        } else if (window.location.pathname === "/detail") {
            return (
                <ButtonDel onClick={()=>removeCard(pokeDetail)}>Excluir Pokemon</ButtonDel>
            )
        }
    }

    const defineButtonLeft = () => {
        if (window.location.pathname === "/pokedex") {
            return (
                <ButtonBack onClick={() => voltar(navigate)}> ❬  Voltar </ButtonBack>
            )
        } else if (window.location.pathname === "/detail") {
            return (
                <ButtonBack onClick={() => voltar(navigate)}> ❬  Voltar </ButtonBack>
            )
        }
    }

    return (
        <ContainerHeader>
            <Nav>
                <NavList>
                    <li>{defineButtonLeft()}</li>
                    <li><ImgLogo src={Logo} alt='Logo Pokemon' /></li>
                    <li>{defineButtonRight()}</li>
                </NavList>


            </Nav>

        </ContainerHeader>
    )
}

export default Header