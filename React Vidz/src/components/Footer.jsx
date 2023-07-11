import React from 'react'
import {Box, HStack, Heading, Stack, VStack, Button, Input, Text} from "@chakra-ui/react"
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>

        <Stack direction={['column', 'row']}>

            <VStack alignItems={"stretch"} w={"full"}>
                <Heading size="md" textTransform={"uppercase"}>
                    Hello There
                </Heading>
                <HStack
                borderBottom={"2px Solid White"}>
                    <Input placeholder="Enter E-mail here..." border={'none'} borderRadius="none" outline={'none'} focusBorderColor='none' />
                    <Button 
                    p={"0"}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>
            <VStack w={"full"} borderLeft={["none", "1px solid white"]} 
             borderRight={["none", "1px solid white"]}>
                <Heading size={'md'} textTransform={"uppercase"} textAlign={"center"}>
                    Video Hub
                    </Heading>
                    <Text> @All Rights Reserved</Text>

             </VStack>
            <VStack w={"full"} borderLeft={["none", "1px solid white"]} 
             borderRight={["none", "1px solid white"]}>
                <Heading size={"md"} textTransform={"uppercase"}>
                Social Media
                </Heading>
                <Button variant={"link"} colorScheme={'white'}>
                    <a target={"blank"}href='https://youtube.com'> Youtube </a>
                </Button>
                <Button variant={"link"} colorScheme={'white'}>
                    <a target={"blank"}href='https://instagram.com'> Instagram </a>
                </Button>
                <Button variant={"link"} colorScheme={'white'}>
                    <a target={"blank"}href='https://github.com'> Github </a>
                </Button>

             </VStack>

        </Stack>
    </Box>
  )
}

export default Footer