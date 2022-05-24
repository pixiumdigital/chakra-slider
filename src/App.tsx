import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
  extendTheme,
  ColorModeScript,
  Button,
} from "@chakra-ui/react"
import Slider from "./components/Slider/Slider";
import { useState } from "react";
import Slide from "./components/Slider/Slide";

export const customTheme = extendTheme({
  initialColorMode: "dark",
});

export const App = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Button onClick={toggleOpen}>Open Slider</Button>
            <Slider isOpen={isOpen} hide={toggleOpen}>
              <Slide title="My Title" description="Lorem ipsum aksdjlasdjlaksjdlaskj dlaksjdlkasj dlaksjd lkasjd lakjdlkasj dlkasjd lkasj dlkasjdlaksjdlkasjd laksdj lkajd lkasjd lkasjd lkasjd laksjd lakjd " />
              <Slide title="My String" image="/logo512.png">
                Lorem ipsum aksdjlasdjlaksjdlaskj dlaksjdlkasj dlaksjd lkasjd lakjdlkasj dlkasjd lkasj dlkasjdlaksjdlkasjd laksdj lkajd lkasjd lkasjd lkasjd laksjd lakjd
              </Slide>
              <Text>nani</Text>
              <Text>nano</Text>
            </Slider>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
