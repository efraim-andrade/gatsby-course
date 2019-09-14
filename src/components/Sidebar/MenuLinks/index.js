import React from "react"

import links from "./content"
import * as S from "./styles"

export default function MenuLinks() {
  return (
    <S.Container>
      <S.List>
        {links.map((link, index) => (
          <S.Item key={index}>
            <S.Link to={link.url} activeClassName="active">
              {link.label}
            </S.Link>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  )
}
