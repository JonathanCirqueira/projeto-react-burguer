import styled from "styled-components";
import Backgroud from '../../assets/fundo-1.jpg'





export const Container = styled.div`
 background: url("${Backgroud}");
 background-size: cover;
 display: flex;
 flex-direction: column;
 align-items: center;

 
 


`

export const Image = styled.img`
width: 300px;



`
export const ContainerItens = styled.div`
background: linear-gradient(157.44deg, rgba(000, 000, 000, 1.8) 0.90%, rgba(000, 000, 000, 0.6) 0.90%, rgba(000, 000, 000, 0.6) 100%);
border-radius: 61px 61px 0px 0px;
height: 100vh;
padding: 50px 36px;
display: flex;
flex-direction: column;


`
export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 40px;
text-align: center;
margin-bottom: 80px;

color: #ffffff;

`
export const ImputLabel = styled.p`
letter-spacing: -0.408px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #ffffff;
padding-left: 25px;


`
export const Input = styled.input`
background: rgba(255, 255, 255, 0.50);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
margin-bottom: 34px;
border: none;
outline: none;
padding-left: 25px;


color: #000000;

`
export const Button = styled.button`
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
margin-top: 70px;
width: 342px;
height: 74px;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
text-decoration: none;

color: #FFFFFF;

&:hover{
    opacity: 0.8;

}

&:active{
    opacity: 0.5;
}


`