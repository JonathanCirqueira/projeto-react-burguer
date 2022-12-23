import styled from "styled-components";
import Backgroud from '../../assets/fundo-1.jpg'




export const Container = styled.div`
 background: url("${Backgroud}");
 background-size: cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap:40px ;
 height: 100%;
 min-height: 100vh;
 


`

export const Image = styled.img`

width: 200px;
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

export const Button = styled.button`
background:#000000;
opacity: 0.8;
border-radius: 14px;
border: solid 1px #000000;


margin-top: 100px;
width: 342px;
height: 74px;

font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;
text-decoration: none;


color: #FFFFFF;

cursor: pointer;

img{
    transform: rotateY(180deg);

}

&:hover{
    opacity: 0.8;

}

&:active{
    opacity: 0.5;
}


`

export const User = styled.li`
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin-top: 20px;

   background: rgba(255, 255, 255, 0.25);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 14px;
   width: 342px;
   height: 101px;

   border: none;
   outline: none;
   p{
    font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 28px;
   margin-top:20px;
color: #FFFFFF;
   }
   button{
    background: none;
    border: none;
    cursor: pointer;
   }
`