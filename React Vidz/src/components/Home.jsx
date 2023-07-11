import React from 'react'
import {Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"
import { transform } from 'framer-motion'

const headingoptions = {
  pos:"absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase", 
  padding: "4",
  size: "4xl",
}

const Home = () => {
    return <Box>
        <MyCarousel />

        <Container maxW={'container.xl'} minH={"100vh"} p="16">
          <Heading textTransform={"uppercase"} margin={"auto"} py="2" w={"fit-content"} borderBottom={"2px Solid"}> Services</Heading>

          <Stack
          h="full"
          p={"4"}
          alignItems={'center'}
          direction={['column', 'row']}
          >
            <Image src={img5} h={["40","400"]}filter={"hue-rotate(-130deg)"}/> 
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
            Following are the basic aspirations of a human being :
              1. Every Human Being aspires to be happy. All his efforts are toward this
              end. The outcome from his efforts depends on the focus of the effort,
              specifically on his notions about happiness.
              2. When these notions are right, the outcome is mutual happiness. When
              the notions are wrong, the outcome is unhappiness.
              3. On closer observation, we can see that every human being aspires for a
              way of life which ensures happiness for all human beings living in
              harmony with nature.
              4. At an individual level, happiness is harmony and integration among all
              four dimensions within the self - Thought, Behaviour, Work and
              Realization.
              5. At the level of society, individuals aspire to ensure harmony and
              integration among four levels - Individual, Family, Society and Nature.
              6. This is the aspiration; this is the desire, this is the innate need of every
              human being, regardless of age, gender, caste, creed, nation and beliefs.
            </Text>
          </Stack>
        </Container>
    </Box>;
};


const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w="full" h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
                 Watch The Future
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.700'} color={'white'} {...headingoptions}>
                 Future is Gaming
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
                 Gaming is always first
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'purple.100'} color={'white'} {...headingoptions}>
                 Be always ahead of others
            </Heading>
        </Box>
    </Carousel>
)
export default Home;
