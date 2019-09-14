import React from "react"
import PropTypes from "prop-types"

import { Sidebar, Menubar } from "../../components"
import { Global } from "../../theme"

import * as S from "./styles"

const DefaultLayout = ({ children }) => {
  return (
    <S.Container>
      <Global />

      <Sidebar />

      <S.Main>{children}</S.Main>

      <Menubar />
    </S.Container>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
