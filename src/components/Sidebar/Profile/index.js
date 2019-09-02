import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../../Avatar"

import * as S from "./styles"

export default function Profile() {
  const metadataQuery = graphql`
    query Metadatas {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `

  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(metadataQuery)

  return (
    <S.Container>
      <S.Link>
        <Avatar />

        <S.Author>
          {title}

          <S.Position>{position}</S.Position>
        </S.Author>

        <S.Description>{description}</S.Description>
      </S.Link>
    </S.Container>
  )
}
