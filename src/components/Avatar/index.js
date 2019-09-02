import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styles"

export default function Avatar() {
  const imageQuery = graphql`
    query {
      avatarImage: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `

  const { avatarImage } = useStaticQuery(imageQuery)

  return <S.Container fixed={avatarImage.childImageSharp.fixed} />
}
