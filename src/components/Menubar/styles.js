import styled from "styled-components"
import { Link as LinkLib } from "gatsby"

export const Container = styled.aside`
  position: fixed;
  right: 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  width: 3.75rem;
  padding: 0.8rem 0;
  border-left: 1px solid #38444d;

  background: #192734;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Link = styled(LinkLib)`
  display: block;
`

export const Item = styled.span`
  display: block;

  height: 3.75rem;
  padding: 1.1rem;

  color: #8899a6;
  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;
  }
`
