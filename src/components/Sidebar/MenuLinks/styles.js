import styled from "styled-components"
import { Link as LinkLib } from "gatsby"

export const Container = styled.nav``

export const List = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const Item = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #1fa1f2;
  }
`

export const Link = styled(LinkLib)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`
