import React from "react";
import { Container, TextHeader, TextMini, Grid } from "../components"
import { Element } from "../interfaces"
import ListElements from "../ui/ListElements"
import Switch from "react-switch"



export const HomePage = () => {
  const [elements, setElements] = React.useState<Element[]>([]);
  const [isActualTable, setIsActualTable] = React.useState<boolean>(false);

  React.useEffect(() => {
    setElements([]);
    if (isActualTable) {
      fetch("/elements_new.json")
        .then(r => r.json())
        .then(res => setElements(res))
        .catch(() => setElements([]))
    } else {
      fetch("/elements.json")
        .then(r => r.json())
        .then(res => setElements(res))
        .catch(() => setElements([]))
    }
  }, [isActualTable])

  return <Container>
    <TextHeader>Lista de elementos de la tabla peri&oacute;dica</TextHeader>
    <Container>
      <Grid>
        <Container>
          <TextMini style={{fontWeight: "bold"}}>Tabla Antigua</TextMini>
        </Container>
        <Switch
          checked={isActualTable}
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={setIsActualTable}
        />
        <Container>
          <TextMini style={{fontWeight: "bold"}}>Tabla Nueva</TextMini>
        </Container>
      </Grid>
    </Container>
    <ListElements elements={elements} />
  </Container>
}