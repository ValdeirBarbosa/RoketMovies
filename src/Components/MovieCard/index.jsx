import { Container } from "./styles"

import { FiStar } from "react-icons/fi"

import { Note } from "../Note"

export function MovieCard({ title, description}) {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <div className="start_rate">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />

        </div>

        <div className="description-movie">{description}</div>
      </div>

      <Note
        data={{
          title: "",
          tags: [
            { id: "1", name: "Ficção Científica" },
            { id: "2", name: "Drama" },
            { id: "3", name: "Familia" },
          ],
        }}
      />
    </Container>
  )
}