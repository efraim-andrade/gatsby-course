import React from "react"
import PropTypes from "prop-types"

import Sidebar from "../Sidebar"
import { Global } from "../../theme"

import * as S from "./styles"

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Global />

      <Sidebar />

      <S.Main>{children}</S.Main>
    </S.Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
