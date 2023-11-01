import { Container, Header_profile, Content} from "./styles"
import { Header } from "../../Components/Header/Index"
import { FiArrowLeft } from "react-icons/fi"
import {Button} from "../../Components/Button"
import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"
import { Section } from "../../Components/Section"
import {MovieItem} from "../../Components/MovieItem"

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

        <Section title="Novo Filme">
          <Input placeholder="Titulo" type="text" />
          <Input placeholder="Sua nota (de 0 a 5)" type="text" />
          <Textarea placeholder="Observações"></Textarea>
        </Section>
        <Section title="Marcadores">
          <div className="marcadores">
          <MovieItem isNew placeholder="Novo marcador" />
          <MovieItem value="React" />
          </div>
        </Section>
        <Section>
          <Button title="Excluir filme"/>
          <Button title="Salvar alterações"/>

        </Section>
      </Content>
    </Container>
  )
}
