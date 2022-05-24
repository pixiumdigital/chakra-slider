# Chakra Slider

A simple React and Chakra UI slider to be used effortlessly.

# Install

To install the library do the following: 

```bash
yarn add 
```


## Usage

Below is an example on how to use the library:

```tsx
import * as React from "react"
import {
  Box,
  Text,
  Code,
  Button,
} from "@chakra-ui/react"
import Slider from "./components/Slider/Slider";
import Slide from "./components/Slider/Slide";
import { useState } from "react";

export const App = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Box textAlign="center" fontSize="xl">
        <Button onClick={toggleOpen}>Open Slider</Button>
        <Slider isOpen={isOpen} hide={toggleOpen}>
            <Slide title="My Title" description="Lorem ipsum aksdjlasdjlaksjdlaskj dlaksjdlkasj dlaksjd lkasjd lakjdlkasj dlkasjd lkasj dlkasjdlaksjdlkasjd laksdj lkajd lkasjd lkasjd lkasjd laksjd lakjd " />
            <Slide title="My String" image="/logo512.png">
            Lorem ipsum aksdjlasdjlaksjdlaskj dlaksjdlkasj dlaksjd lkasjd lakjdlkasj dlkasjd lkasj dlkasjdlaksjdlkasjd laksdj lkajd lkasjd lkasjd lkasjd laksjd lakjd
            </Slide>
            <Text>nani</Text>
            <Text>nano</Text>
        </Slider>
    </Box>
  )
}
```