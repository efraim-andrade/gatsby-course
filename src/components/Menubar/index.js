import React from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as Light } from "styled-icons/octicons/LightBulb"
import { Grid } from "styled-icons/boxicons-regular/Grid"

import * as S from "./styles"

export default function Menubar() {
  return (
    <S.Container>
      <S.Wrap>
        <S.Link to="/" title="Voltar para Home">
          <S.Item>
            <Home />
          </S.Item>
        </S.Link>

        <S.Link to="/search" title="Pesquisar">
          <S.Item>
            <Search />
          </S.Item>
        </S.Link>
      </S.Wrap>

      <S.Wrap>
        <S.Item title="Mudar o tema">
          <Light />
        </S.Item>

        <S.Item title="Mudar a visualização">
          <Grid />
        </S.Item>

        <S.Item title="Ir para o topo">
          <Arrow />
        </S.Item>
      </S.Wrap>
    </S.Container>
  )
}
