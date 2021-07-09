import styled, { css } from "styled-components"

export interface PropsContainer {
  padding?: number | string;
}

export const Container = styled.div`
  ${(props:PropsContainer) => {
    return css`
      padding: ${props.padding || "10px"}
    `
  }}
`

export const Center = styled.div`
  margin: 0 auto;
`