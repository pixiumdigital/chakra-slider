import { Box, Button, Flex, Progress, Text, VStack } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

export interface SliderProps {
    showProgress?: boolean
    backgroundColor?: string
    minWidth?: string
    maxWidth?: string
    maxHeight?: string
    minHeight?: string
    isOpen?: boolean
    textAlign?: "left" | "right" | "center" | "justify"
    hide?: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

const Slider = ({
    showProgress = true,
    backgroundColor = "blackAlpha.500",
    textAlign = "center",
    minWidth = "60%",
    maxWidth = "60%",
    minHeight = "500px",
    maxHeight = "500px",
    isOpen = true,
    children,
    hide }: SliderProps) => {
    const [totalSlides, setTotalSlides] = useState(React.Children.count(children))
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleIncrementClick = () => {
        // -1 is to account for index starting at 0
        if (currentSlide < (totalSlides - 1)) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const handleDecrementClick = () => {
        // -1 is to account for index starting at 0
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const calculatePercentage = () => {
        if (totalSlides > 0) {
            return ((currentSlide + 1) / totalSlides) * 100
        } else {
            return 100
        }
    }

    if (!isOpen) {
        return <></>
    }
    return (
        <Box minWidth={minWidth} minHeight={minHeight} maxHeight={maxHeight} maxWidth={maxWidth} backgroundColor={backgroundColor} borderRadius={"10px"}>
            <Flex height={"100%"} direction={"column"}>
                {hide &&
                    <Box alignSelf={"flex-end"} m={"0 10px"}>
                        <Button
                            //@ts-ignore
                            onClick={hide}
                            _focus={{ outline: "none" }}
                            color="gray.200"
                            variant="link"
                            zIndex={2}
                            minW={0}
                        >
                            <CloseIcon boxSize={4} />
                        </Button>
                    </Box>
                }
                <Box height={"100%"} flex={1} textAlign={textAlign} padding={"0 10px"}>
                    {React.Children.map(children, (child, index) => {
                        if (child && index === currentSlide) {
                            return (
                                <Box>
                                    {child}
                                </Box>
                            )
                        }
                    })}
                </Box>
                <Flex width={"100%"} mx="auto">
                    <Button
                        onClick={handleDecrementClick}
                        color="gray.200"
                        _focus={{ outline: "none" }}
                        variant="link"
                        minW={0}
                    >
                        <ChevronLeftIcon boxSize={9} />
                    </Button>
                    {showProgress &&
                        <Box display={"flex"} width={"100%"} position={"relative"}>
                            <Box top="-10px" left="50%" fontSize={"sm"} position="absolute">
                                {`${currentSlide + 1}/${totalSlides}`}
                            </Box>
                            <Progress
                                value={calculatePercentage()}
                                alignSelf="center"
                                borderRadius="2px"
                                bg="gray.700"
                                flex={1}
                                h="3px"
                                sx={{
                                    "> div": {
                                        backgroundColor: "gray.400"
                                    },
                                }}
                            />
                        </Box>
                    }
                    <Button
                        onClick={handleIncrementClick}
                        _focus={{ outline: "none" }}
                        color="gray.200"
                        variant="link"
                        zIndex={2}
                        minW={0}
                    >
                        <ChevronRightIcon boxSize={9} />
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
};

export default Slider;
