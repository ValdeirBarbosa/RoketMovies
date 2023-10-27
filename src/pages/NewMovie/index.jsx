import { Container, Header_profile, Content ,Section} from "./styles"
import { Header } from "../../Components/Header/Index"
import { FiArrowLeft } from "react-icons/fi"

import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"

import { Link } from "react-router-dom"

export function NewMovie() {
  return (
    <Container>
      <Header />
      <Content>
        <Header_profile>
          <Link to="/">
            Voltar
            <FiArrowLeft />
          </Link>
        </Header_profile>
        <h1>Novo Filme</h1>
        <Section>
          <Input placeholder="Titulo" type="text" />
          <Input placeholder="Sua nota (de 0 a 5)" type="text" />
          <Textarea placeholder="Observações"></Textarea>
        </Section>
      </Content>
    </Container>
  )
}
