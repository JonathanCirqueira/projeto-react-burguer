import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState,  useEffect } from "react";
import React from "react";
import lixeira from "../../assets/Lixeira.svg"
import Avatar2 from "../../assets/logo-2.svg"
import {
  Container, Image, ContainerItens, H1,Button, User
} from "./styles";

function Users() {


  const [users, setUsers] = useState([]);
  const history = useHistory()
  



  



  useEffect(() => {
    async function fetchUsers() {
      const { data: newUserss } = await axios.get("http://localhost:3003/users");

      setUsers(newUserss);
    }

    fetchUsers()

  }, [])



  async function deleteUser(userId) {

    await axios.delete(`http://localhost:3003/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers)
  }

  function goBackPage () {
    history.push('/')
  }

  return (

    <Container>
      <Image src={Avatar2} alt="logo-pedidos"  />

      <ContainerItens>

        <H1>Pedidos</H1>




        <ul>
          {users.map((user) => (
            <User key={user.id}>
              
              
              <div>
              <p>{user.name}</p>
              <p><b>{user.age}</b></p>

             
              </div>
             
              <button onClick={() => deleteUser(user.id)}>
                <img src={lixeira} alt="lata-de-lixo"/>
              </button>
              
              
            </User>

          ))}
        </ul>

        <Button onClick={goBackPage} >Voltar </Button>

      </ContainerItens>

    </Container>



  )

}

export default Users;
