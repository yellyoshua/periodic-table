import { ReactNode } from "react"
import styled, { css } from "styled-components"

export interface PropsInput {
  center?: boolean;
  children?: ReactNode;
}

export const Input = styled.input<PropsInput>`
  font-size: 18px;
  padding: 10px;
  border: 1px solid black;
  ${(props) => props.center && css`text-align:center;`}
`