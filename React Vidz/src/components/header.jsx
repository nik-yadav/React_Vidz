import React from 'react'
import {Drawer, DrawerBody, DrawerCloseButton, DrawerOverlay, DrawerContent, DrawerHeader, Button, useDisclosure, VStack, HStack} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi";


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <>
    <Button
    pos={'fixed'}
    top={"4"}
    left={"4"}
    colorScheme='purple'
    zIndex={"overlay"}
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={"full"}
    onClick={onOpen}>
        <BiMenuAltLeft />
    </Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader>
                Video Hub
            </DrawerHeader>
            <DrawerBody>
                <DrawerCloseButton />
                <VStack>
                    <Button onClick={onClose} colorScheme={'purple'} variant={"link"}>
                        <Link to="/"> Home </Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={'purple'} variant={"link"}>
                        <Link to="/videos"> Videos </Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={'purple'} variant={"link"}>
                        <Link to="/videos?category=free"> Free Videos </Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={'purple'} variant={"link"}>
                        <Link to="/upload"> Upload </Link>
                    </Button>
                </VStack>
                <HStack pos={"absolute"} bottom={"10"} left={'0'} w={"full"} justifyContent={"space-evenly"}>
                    <Button colorScheme={"purple"}>
                        <Link to={"/login"}> Log In </Link> 
                    </Button>
                    <Button colorScheme={"purple"} variant={"outline"}>
                        <Link to={"/signup"}> Sign UP</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header