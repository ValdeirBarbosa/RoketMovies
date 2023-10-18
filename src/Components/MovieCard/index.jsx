import { Container } from "./styles"
import { StarRate } from "../StarRate"

export function MovieCard({ title, description}) {
  return (
    <Container>
      <div>
        
        <h1>{title}</h1>
        <StarRate/>
        <div className="description-movie">{description}</div>
      </div>
    </Container>
  )
}