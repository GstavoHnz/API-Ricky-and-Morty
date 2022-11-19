import styled from 'styled-components'

export const ContainerApp = styled.div`
  width: 100%;
  max-width: 124.6rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;


export const HeaderApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h1{
    font-size: 3.2rem;
  }

  span{
    font-size: 1.6rem;
    opacity: 0.6;
  }

@media (max-width: 360px) {
  h1{
    font-size: 2.2rem;
  }

  span{
    display: none;
  }
}
`;

export const ContentCharacters = styled.div`
 & > div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.6rem;
 }

@media (max-width: 820px) {
  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.6rem;
  }
}

@media (max-width: 360px) {
  & > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.6rem;
  }
}

 button{
  display: block;
  line-height: 6.5rem;
  background-color: #5b1fa6;
  border-radius: 0.8rem;
  width: 30rem;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  font-size: 1.8rem;
  margin-top: 4.8rem;
  transition: filter 0.3s ease;
  &:hover{
    filter: brightness(0.8);
  }
 }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.8rem;
  background-color: #151020;
  button{
  line-height: 3.5rem;
  background-color: #70b5f9;
  border-radius: 0.8rem;
  width: 10rem;
  cursor: pointer;
  border: none;
  font-size: 1.8rem;
  transition: filter 0.3s ease;
  &:hover{
    filter: brightness(0.8);
  }
 }

 img{
  width: 100%;
  max-width: 6.5rem;
  transition: transform 0.3s;
  &:hover{
    transform: translate(0.2rem);
    filter: brightness(0.8);
  }
 }
`;

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2022;
  background-color: #040011;  
  display: flex;
  align-items: center;
  justify-content: center;
`;