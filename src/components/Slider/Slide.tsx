
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";

export interface SlideProps {
    title?: string
    description?: string
    image?: string
    children?: React.ReactNode
}

const Slide = ({ title, description, image, children }: SlideProps) => {
    return (
        <Box>
            {title &&
                <Heading>{title}</Heading>
            }
            <Flex alignItems={"center"} textAlign="left">
                {image &&
                    <Image flex={1} width={"80%"} src={image} alt={image} />
                }
                <Box padding="0 10px" flex={3}>
                    {description &&
                        <Text>{description}</Text>
                    }
                    {children}
                </Box>
            </Flex>

        </Box>
    )
}
export default Slide;
