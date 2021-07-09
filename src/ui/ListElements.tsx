import React from "react"
import { Element } from "../interfaces"
import { Grid, GridItem, Container, Center, Box, Input } from "../components"
import { getRandomColor } from "../utils/randomColor"
import ElementBox from "./ElementBox"

const helpTextSearchBox = "Busca por elemento, su nombre o masa"

const ListElements = ({ elements }: { elements: Element[] }) => {
  const [filter, setFilter] = React.useState("");

  const filterHandler = (e: Element): Boolean => {
    return `${e.nombre}-${e.elemento}-${e.masa}`.toLowerCase().trim().includes(filter.toLowerCase().trim());
  }

  return <Container padding="20px 0px">
    <Center style={{ textAlign: "center" }}>
      <Input type="text" placeholder={helpTextSearchBox} value={filter} onChange={({ target: { value } }) => setFilter(value)} />
      <Grid>
        {elements.filter(filterHandler).map(element => {
          const { linear } = getRandomColor(element.n_atomico)
          return <GridItem>
            <Container padding="5px">
              <Box background={linear}>
                <Container>
                  <ElementBox element={element} />
                </Container>
              </Box>
            </Container>
          </GridItem>
        })}
      </Grid>
    </Center>
  </Container>
}

export default ListElements