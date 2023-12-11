import * as React from "react"
import {
  ChakraProvider,
  Flex,
  theme,
} from "@chakra-ui/react"
import Header from "./components/Header"
import { GiftList } from "./components/GIftList";
import gifts from "./utils/gifts.json";

export interface IGift {
  photo: string;
  name: string;
  src: string;
}

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header title="Lanis e Teteu" />
    <Flex 
      w="100%"
      bgColor="#1A1A2B"
      justifyContent="center"
      alignItems="center"
      p={12}
      my={20}
    >
        <Flex
           w="100%"
           justifyContent="center"
           alignItems="center"
           flexDir={{
            base: "column",
            md: "row"
          }}
        >
          <GiftList isLanis gifts={gifts.list.lanis} />
          <GiftList gifts={gifts.list.teteu} />
        </Flex>
    </Flex>
  </ChakraProvider>
)
