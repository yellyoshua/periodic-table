import { ReactNode } from "react"
import styled, { css } from "styled-components"

export interface PropsTextHeader {
  center?: boolean;
  children?: ReactNode;
}

export const TextHeader = styled.h1<PropsTextHeader>`
  text-align: center;
  font-size: 18px;
  ${(props) => props.center && css`text-align:center;`}
`

export const TextMini = styled.p<PropsTextHeader>`
  text-align: center;
  font-size: 13px;
  ${(props) => props.center && css`text-align:center;`}
`