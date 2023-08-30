import { Container, Form, Background } from "./styles"
import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import { FiMail, FiUser } from "react-icons/fi"


export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Button title="Entrar"></Button>
      <a href="#">Criar Conta</a>
      
      </Form>
      <Background />
    </Container>
  )
}
