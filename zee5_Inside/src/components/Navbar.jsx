import React from "react";
import {
  Image,
  Text,
  Center,
  Input,
  Button,
  Flex,
  Square,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { HamburgerIcon, QuestionIcon, DragHandleIcon } from "@chakra-ui/icons";
import { useAuth } from "./Context/Auth";
import { VerticallyCenter } from "./About";
import { PlacementExample } from "./Side";

function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handlelogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    // <div className={styles.navcon}>
    //   <Box boxSize="sm">
    //     <Image h='60px'
    //       src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.51.88"
    //       alt="Zee5"
    //     />
    //   </Box>
    //   <Text fontSize="2*l">Home</Text>
    //   <Text fontSize="2*l">Tv Shows</Text>
    //   <Text fontSize="2*l">Movies</Text>

    // </div>
    <Flex
      h="80px"
      bg="rgb(15,6,23)"
      p="2%"
      w="100%"
      justifyContent="space-between"
    >
      <Flex w="50%" justifyContent="space-evenly" alignItems="align">
        <Center>
          <Link to="/">
            <Image
              h="50px"
              src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.51.88"
              alt="Zee5"
            />
          </Link>
        </Center>

        <Square color="white">
          <Link to="/">Home</Link>
        </Square>

        <Square color="white">
          <Link to="/news">News</Link>
        </Square>

        <Square color="white">
          <Link to="/movies">Movies</Link>
        </Square>

        <Square color="white">
          <Text>Web Series</Text>
        </Square>

        <Square color="white">
          <Text>TV Shows</Text>
        </Square>

        <Square color="white">
          <Text>Eduauraa</Text>
        </Square>

        <Square color="white">
          <Text>Live TV</Text>
        </Square>

        <Square color="white">
          <Text>Music</Text>
        </Square>

        <Square color="white">
          <DragHandleIcon boxSize={5} />
        </Square>
      </Flex>

      <Flex w="45%" justifyContent="space-evenly" alignItems="align">
        <Square color="white" flexGrow="7">
          <Input
            isInvalid
            errorBorderColor="white"
            placeholder="Search For Movies, shows etc."
            size="sm"
          />
        </Square>

        <Square color="white" flexGrow="1">
          {/* <QuestionIcon boxSize={4} /> */}

          <VerticallyCenter />
        </Square>

        <Square color="white" flexGrow="1">
          {!auth.user ? (
            <Link to="/login">
              <Button colorScheme="white" variant="outline" size="sm">
                Login
              </Button>
            </Link>
          ) : (
            <Button
              colorScheme="white"
              variant="outline"
              size="sm"
              onClick={handlelogout}
            >
              Logout
            </Button>
          )}
        </Square>

        <Square color="white" flexGrow="1">
          <Link to="/signup">
            <Button colorScheme="purple" size="sm">
              Signup
            </Button>
          </Link>
        </Square>

        {/* <Square color="white" flexGrow="1">
          <HamburgerIcon boxSize={6} />
        </Square> */}

        <Square color="white" flexGrow="1">
          {/* <HamburgerIcon boxSize={6} /> */}
          <PlacementExample />
        </Square>
      </Flex>
    </Flex>

    // <Wrap w="100%" bg="red.200">
    //   <WrapItem>
    //     <Center w="100%" h="80px" bg="red.200">
    //       <Image
    //         h="60px"
    //         src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.51.88"
    //         alt="Zee5"
    //       />
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="green.200">
    //       Home
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="tomato">
    //       Tv Shows
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="blue.200">
    //       Movies
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="blue.200">
    //       Box 4
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="blue.200">
    //       Box 4
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="blue.200">
    //       Box 4
    //     </Center>
    //   </WrapItem>
    // </Wrap>
  );
}

export default Navbar;

//
