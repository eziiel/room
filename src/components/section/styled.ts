import styled from "styled-components";


const SectionS = styled.section`
  min-height: 30vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

export {
  SectionS
}