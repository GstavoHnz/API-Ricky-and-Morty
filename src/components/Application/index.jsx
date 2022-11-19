import { useEffect, useState } from "react";

import { Card } from "../Card";
import { ContainerApp, ContentCharacters, Header, HeaderApp, Loader } from "./styles";

import axios from 'axios'

import IconLoader from "../../assets/loader.gif"
import IconLogo from "../../assets/logo-header-gh.png"


export function Application() {
  const [page, setPage] = useState(1)

  const [characters, setCharacters] = useState([])

  const [countPages, setCountPages] = useState('')

  const [qdtcharacters, setQtdCharacters] = useState('')

  const [isLoader, setIsLoader] = useState(true)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(response => {
      const array = [...characters, ...response.data.results]
      setCharacters(array)
      setCountPages(response.data.info.pages)
      setQtdCharacters(response.data.info.count)
      setIsLoader(false)
    })
  }, [page])

  return (
    <>
      {
        isLoader && (
          <Loader>
            <img src={IconLoader} alt="Gif Loader" />
          </Loader>
        )
      }
      <Header>
        <a href="/">
          <img src={IconLogo} alt="Icon main" />
        </a>
        <a href="https://www.linkedin.com/in/gstavohnz/" target="_blank" rel="noreferrer">
          <button>Linkedin</button>
        </a>
      </Header>
      <ContainerApp>
        <HeaderApp>
          <h1>Ricky and Morty</h1>
          <span>Quantidade de Personagens: {qdtcharacters}</span>
        </HeaderApp>
        <ContentCharacters>
          <div>
            {
              characters && characters.map(({image, name, species, gender}) => {
                return (
                  <Card 
                    image= {image}
                    name= {name}
                    genre= {gender}
                    specie= {species}
                  />
                )
              })
            }
          </div>
          {
            (!(page === countPages)) && <button onClick={() => setPage(page + 1)}>Carregar mais</button>
          }

        </ContentCharacters>
      </ContainerApp>
      </>
  )
}
