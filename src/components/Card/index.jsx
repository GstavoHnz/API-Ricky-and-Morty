import { ContainerCard } from "./styles";

export function Card({image, name, genre, specie}){
  return(
   <ContainerCard>
      <div className="image">
        <img src={image} alt="imagem do personagem" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <ul>
          <li>Gênero: {genre}</li>
          <li>Espécie: {specie}</li>
        </ul>
      </div>
   </ContainerCard>
  )
} 