import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState, useRef   } from "react";
import React from "react";
import Avatar from "../../assets/logo-1.png"

import {
  Container, Image, ContainerItens, H1, ImputLabel, Input, Button, 
} from "./styles";

function App() {


  const [users, setUsers] = useState([]);
  const inputPedidos = useRef()
  const inputName = useRef()
  const history = useHistory()



  async function addNewUser() {

    const {data: newUser} = await axios.post("http://localhost:3003/users", {
      name: inputPedidos.current.value,
      age: inputName.current.value
   })

    setUsers(
    [...users, newUser ]);

    history.push('/usuarios')

 }

 




  return (

    <Container>
      <Image alt="logo-img" src={Avatar} />

      <ContainerItens>

        <H1>Faça seu pedido!</H1>

        <ImputLabel>Pedido</ImputLabel>
        <Input ref={inputPedidos} placeholder="ex: 1 Coca Cola, 1 X Salada" />

        <ImputLabel>Nome do Cliente</ImputLabel>
        <Input ref={inputName} placeholder="Steve Jobs" />

        <Button to="./usuarios" onClick={addNewUser}>Cadastrar</Button>

      
      </ContainerItens>

    </Container>



  )

}

export default App;
