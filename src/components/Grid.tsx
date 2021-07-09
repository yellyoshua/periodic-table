import styled, { css } from "styled-components"

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const GridItem = styled.div`
  width: 150px;
`

export interface PropsBox {
  background?: string;
}

export const Box = styled.div`
  border-radius: 5px;
  ${(props: PropsBox) => {
    return css`
     background: ${props.background || "transparent"}
    `
  }}
`