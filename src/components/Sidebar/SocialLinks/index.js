import React from "react"

import Icons from "./Icons"
import links from "./content"
import * as S from "./styles"

export default function SocialLinks() {
  return (
    <S.Container>
      <S.List>
        {links.map((link, index) => {
          const Icon = Icons[link.label]

          return (
            <S.Item key={index}>
              <S.Link
                target="_blank"
                href={link.url}
                title={link.label}
                rel="noopener noreferrer"
              >
                <S.IconContainer>
                  <Icon />
                </S.IconContainer>
              </S.Link>
            </S.Item>
          )
        })}
      </S.List>
    </S.Container>
  )
}
