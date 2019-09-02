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

  font-size: 1.6rem;
`

export const Position = styled.small`
  display: block;

  font-weight: 300;
  font-size: 1.2rem;
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`
