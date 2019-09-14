import styled from "styled-components"
import { Link as LinkLib } from "gatsby"

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  color: #8899a6;
`

export const Link = styled(LinkLib)`
  color: #8899a6;
  transition: color 0.5s;
  text-decoration: none;

  &:hover {
    color: #1fa1f2;
  }
`

export const Author = styled.h1`
  margin: 0.5rem auto 1.5rem;

  font-weight: 700;
  font-size: 1.6rem;
  font-family: Manjari;
  letter-spacing: 0.15rem;
`

export const Position = styled.small`
  display: block;

  font-weight: 500;
  font-size: 0.9rem;
  font-family: Manjari;
  text-transform: uppercase;
`

export const Description = styled.p`
  line-height: 1.4;
  font-size: 0.85rem;
  font-weight: 300;
  font-family: Manjari;
  letter-spacing: 0.05rem;
`
