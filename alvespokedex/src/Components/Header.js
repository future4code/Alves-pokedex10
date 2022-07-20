import { useNavigate } from 'react-router-dom';
import Pokemon from '../imagens/Logo.png';
import styled from 'styled-components';

const Container = styled.div`
position: absolute;
width: 1440px;
height: 160px;
left: 0px;
top: 0px;
background: #FFFFFF;
`

const LogoStyle = styled.img`
position: absolute;
width: 307px;
height: 113px;
left: 566px;
top: 21px;
`

const BotaoStyle =styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
position: absolute;
width: 287px;
height: 74px;
left: 1112px;
top: 41px;
background: #33A4F5;
border-radius: 8px; 
`
const BotaoLetra = styled.p `
width: 106px;
height: 36px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
 `
const Posicao = styled.div `
flex: none;
order: 0;
flex-grow: 0;
 `


const Header = () => {
    const navigate = useNavigate();
    
  return (
    <Container>
      <LogoStyle src ={Pokemon} />
      <BotaoStyle>Pokedéx</BotaoStyle>
    </Container>
  )
}
export default Header;