import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  Flex,
  SimpleGrid,
  ListItem,
  Box,
  UnorderedList,
  Stack,
  Text,
  Square,
  Image,
  Center,
} from "@chakra-ui/react";

function Footer() {
  // const navigate = useNavigate();

  return (
    <div>
      <SimpleGrid
        columns={[1, 3, 6, 6]}
        spacing="2%"
        p="3% 5%"
        color="white"
        bg="rgb(15,6,23)"
        w="100%"
      >
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Hindi Movies</ListItem>
            <ListItem>Hindi Movies</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>

        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Movies By Genre</ListItem>
            <ListItem>Action Movies</ListItem>
            <ListItem>Comedy Movies</ListItem>
            <ListItem>Romantic Movies</ListItem>
            <ListItem>Horror Movies</ListItem>
            <ListItem>Crime Movies</ListItem>
            <ListItem textDecoration="">Thriller Movies</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Movies By Celeb</ListItem>
            <ListItem>SRK Movies</ListItem>
            <ListItem>Salman Khan Movies</ListItem>
            <ListItem>Amitabh B Movies</ListItem>
            <ListItem>Akshay k Movies</ListItem>
            <ListItem>Sunny Leone Movies</ListItem>
            <ListItem textDecoration="">Amir Khan Movies</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Movies By Year</ListItem>
            <ListItem>2022 Movies</ListItem>
            <ListItem>2021 Movies</ListItem>
            <ListItem>2020 Movies</ListItem>
            <ListItem>2019 Movies</ListItem>
            <ListItem>2018 Movies</ListItem>
            <ListItem textDecoration="">2017 Movies</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Top Bollywood Movies</ListItem>
            <ListItem>Zero</ListItem>
            <ListItem>Race 3</ListItem>
            <ListItem>Don</ListItem>
            <ListItem>Doom 3</ListItem>
            <ListItem>Race</ListItem>
            <ListItem textDecoration="">Kedarnath</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Top South Movies</ListItem>
            <ListItem>RRR</ListItem>
            <ListItem>Valimia</ListItem>
            <ListItem>Bangarraju</ListItem>
            <ListItem>Bahubali</ListItem>
            <ListItem>Bahubali 2</ListItem>
            <ListItem textDecoration="">Pushpa</ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>
      {/*  */}
      <Flex
        h="80px"
        bg="rgb(15,6,23)"
        p="2%"
        w="100%"
        justifyContent="space-between"
      >
        <Flex h="80px" bg="rgb(15,6,23)" w="42%" justifyContent="space-evenly">
          <Square color="white">
            <Text>About Us</Text>
          </Square>

          <Square color="white">
            <Text>Help Center</Text>
          </Square>

          <Square color="white">
            <Text>Privacy Policy</Text>
          </Square>

          <Square color="white">
            <Text>Terms of Use</Text>
          </Square>

          <Square color="white">
            <Text></Text>
          </Square>
        </Flex>
      </Flex>
      {/*  */}
      <Flex
        h="80px"
        bg="rgb(15,6,23)"
        p="2%"
        w="100%"
        justifyContent="space-between"
      >
        <Flex h="80px" bg="rgb(15,6,23)" w="40%" justifyContent="space-evenly">
          <Square color="white">
            <Text>Download Apps</Text>
          </Square>

          <Center>
            <a href="https://play.google.com/store/apps/details?id=com.graymatrix.did">
              <Image
                h="40px"
                src="https://www.zee5.com/images/play_store.png?ver=2.51.89"
                alt="Play Store"
              />
            </a>
          </Center>

          <Center>
            <a href="https://apps.apple.com/in/app/zee5-shows-live-tv-movies/id743691886">
              <Image
                h="40px"
                src="https://www.zee5.com/images/app_store.png?ver=2.51.89"
                alt="App Store"
              />
            </a>
          </Center>
          <Square color="white">
            <Text></Text>
          </Square>
        </Flex>
        <Flex h="80px" bg="rgb(15,6,23)" w="40%" justifyContent="space-evenly">
          <Square color="white">
            <Text>Connect with us</Text>
          </Square>

          <Center>
            {/* <NavLink to={"https://www.facebook.com/ZEE5/"}> */}

            <a href="https://www.facebook.com/ZEE5/">
              <Image
                bg="white"
                h="40px"
                borderRadius="50%"
                border="1px solid white"
                src="https://img.icons8.com/windows/344/facebook-new.png"
                alt="Facebook"
              />
            </a>
            {/* </NavLink> */}
          </Center>
          <Center>
            <a href="https://www.instagram.com/zee5/?hl=en">
              <Image
                bg="white"
                h="40px"
                borderRadius="50%"
                border="1px solid white"
                src="https://img.icons8.com/windows/344/instagram-new.png"
                alt="Instagram"
              />
            </a>
          </Center>
          <Center>
            <a href="https://twitter.com/ZEE5India?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <Image
                bg="white"
                h="40px"
                borderRadius="50%"
                border="1px solid white"
                src="https://img.icons8.com/windows/344/twitter.png"
                alt="Twitter"
              />
            </a>
          </Center>
          <Center>
            <a href="https://www.youtube.com/c/zee5">
              <Image
                bg="white"
                h="40px"
                borderRadius="50%"
                border="1px solid white"
                src="https://img.icons8.com/windows/344/youtube-play.png"
                alt="Youtube"
              />
            </a>
          </Center>

          <Square color="white">
            <Text></Text>
          </Square>
        </Flex>
      </Flex>
      {/*  */}

      <SimpleGrid
        columns={[1, 3, 5, 5]}
        spacing="2%"
        p="3% 5%"
        color="white"
        bg="rgb(15,6,23)"
        w="100%"
      >
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Popular TV Shows</ListItem>
            <ListItem>Kumkum Bhagya</ListItem>
            <ListItem>Kundli Bhagya</ListItem>
            <ListItem>Bhagya Lakshmi</ListItem>
            <ListItem>Tujhse Hai Raabta</ListItem>
            <ListItem>Yum Se</ListItem>
          </UnorderedList>
        </Box>

        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Premium Movies</ListItem>
            <ListItem>Hemlet</ListItem>
            <ListItem>200 halla Ho</ListItem>
            <ListItem>14 Phare</ListItem>
            <ListItem>Gial 100</ListItem>
            <ListItem>Go</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Popular LIVE TV Channels</ListItem>
            <ListItem>NDTV</ListItem>
            <ListItem>Zee News</ListItem>
            <ListItem>Aaj Tak</ListItem>
            <ListItem>Zee Marathi</ListItem>
            <ListItem>&TV</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Popular Web Series</ListItem>
            <ListItem>Sunflower</ListItem>
            <ListItem>Jeet Ki Zid</ListItem>
            <ListItem>Fast</ListItem>
            <ListItem>Sea</ListItem>
            <ListItem>20/11</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Bollywood Top Celebrities</ListItem>
            <ListItem>Sunny Leone</ListItem>
            <ListItem>Disha Patani</ListItem>
            <ListItem>Nora Fatehi</ListItem>
            <ListItem>SRK</ListItem>
            <ListItem>Salman Khan</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>

      <Stack color="white" bg="rgb(15,6,23)" w="100%" p="3% 5%">
        <Box>
          <p>
            Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla
            Firefox 75+, Safari 5.1.5+
          </p>
        </Box>
        <Box>
          <p>
            Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights
            reserved.
          </p>
        </Box>
      </Stack>
    </div>
  );
}

export default Footer;
