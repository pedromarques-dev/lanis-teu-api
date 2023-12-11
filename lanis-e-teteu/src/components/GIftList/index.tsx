import { Flex, Heading, List, ListItem, Text, Box, Image} from "@chakra-ui/react";
import React from "react";
import { IGift } from "../../App";
import { Link } from "react-router-dom";

interface IProps {
    isLanis?: boolean;
    gifts: IGift[];
}

export const GiftList: React.FC<IProps> = ({isLanis, gifts}) =>  {
    return (
        <Flex
            w="100%"
            direction="column"
            color={isLanis ? "#1B2529" : "#fff"}
            justifyContent="center"
            alignItems="center"
            m={2}
            bgColor={isLanis ? "#E289BD" : "#1A1A42" }
        >
            <Heading padding={8} textAlign="center" fontWeight="bold">Lista de Presentes de {isLanis ? "Laninha" : "Teteu"}</Heading>
            <List>
                {
                    gifts ? gifts.map((gift: IGift, index: number) => (
                    <a href={gift.src} target="_blank">
                        <Box 
                            key={index}
                            bgColor="white"
                            padding={8}
                            my={2}
                            maxW={200}
                            maxH={400} 
                        >
                                <Image w="100%"  maxH={170} src={gift.photo} alt={gift.name} />
                                <ListItem color="#111" py={2}>{gift.name}</ListItem>
                        </Box>
                    </a>
                    )) : (
                        <Text>Não há presentes na lista de {isLanis ? "Laninha" :  "Teteu"}</Text>
                    )
                }
            </List>
        </Flex>
    )
}