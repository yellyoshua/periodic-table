import React from "react"
import { Element } from "../interfaces"
import { TextMini, TextHeader, Grid, Container } from "../components"

const ElementBox = ({ element }: { element: Element }) => {
  return <div>
    <TextHeader center>
      <TextMini>{element.n_atomico}</TextMini>
      {element.elemento}
      <TextMini>({element.nombre})</TextMini>
    </TextHeader>
    <Container padding="5px">
      <TextMini>Masa<br />{element.masa}</TextMini>
    </Container>
    <Grid>
      <Container padding="5px">
        <TextMini>Periodo<br />{element.periodo}</TextMini>
      </Container>
      <Container padding="5px">
        <TextMini>Grupo<br />{element.grupo}</TextMini>
      </Container>
    </Grid>
    <TextMini>Conf. electronica<br />{element.conf_electronica}</TextMini>
    <TextMini>Descubrimiento<br />{element.descubrimiento}</TextMini>
  </div>
}

export default ElementBox