import { Button, Container, Heading, Input, VStack , Text, Avatar} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>

        <form>
            <VStack
            alignItems={"stretch"}
            spacing={'8'}
            w={["full", "96"]}
            m={"auto"}
            my={'16'}>
                <Heading> Video HUB </Heading>
                <Avatar alignSelf={"center"} box-size={"32"} />


                <Input placeholder="Name" type='text' focusBorderColor='purple.500' required/>
                <Input placeholder="E-mail" type='email' focusBorderColor='purple.500' required/>
                <Input placeholder="Password" type='password' focusBorderColor='purple.500' required/>


                <Button colorScheme={"purple"} type={"submit"}> Sign UP </Button>

                <Text textAlign={'right'}> Already Signup? 
                <Button variant={'link'} alignSelf={'flex-end'} colorScheme='purple'>
                    <Link to={"/login"}> Log In</Link>
                </Button>
                </Text>

            </VStack>
        </form>

    </Container>
  )
}

export default Signup