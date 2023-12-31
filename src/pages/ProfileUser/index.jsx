import { Avatar, Container, Form, Header_profile } from "./style"


import {Button} from "../../Components/Button"
import {Input} from "../../Components/Input"
import { FiArrowLeft,FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"

export function ProfileUser() {
  return (
    <Container>
      <Header_profile>
        <Link to="/">
          Voltar
          <FiArrowLeft />
        </Link>
      </Header_profile>
      <Avatar>
        <img
          src="https://github.com/ValdeirBarbosa.png"
          alt="Foto de perfil"
          icon={FiUser}
        />
        <label htmlFor="avatar">
          <FiCamera />
          <input id="avatar" type="file" />
        </label>
      </Avatar>
      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
