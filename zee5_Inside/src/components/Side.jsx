import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  Stack,
  Radio,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Home from "./routes/Home";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        {/* <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack> */}
      </RadioGroup>
      <Button colorScheme="gray" onClick={onOpen} bg="rgb(15,6,23)">
        <HamburgerIcon boxSize={6} />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="rgb(15,6,23)" color="gray">
          <DrawerHeader p="10%" borderBottomWidth="1px">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Link to="/">
              <Text p="4%" pb="8%">
                Home
              </Text>
            </Link>
            <Link to="/news">
              <Text p="4%" pb="8%">
                News
              </Text>
            </Link>
            <Link to="/movies">
              <Text p="4%" pb="8%">
                Movies
              </Text>
            </Link>
            <Text p="4%" pb="8%">
              Web Series
            </Text>
            <Text p="4%" pb="8%">
              TV Shows
            </Text>
            <Text p="4%" pb="8%">
              Eduauraa
            </Text>
            <Text p="4%" pb="8%">
              Live TV
            </Text>
            <Text p="4%" pb="8%">
              Music
            </Text>
            <Text p="4%" pb="8%"></Text>
            <hr />
            <Text p="4%"></Text>
            <Text p="4%">About Us</Text>
            <Text p="4%">Help Center</Text>
            <Text p="4%">Terms of Use</Text>
            <Text p="4%">Privacy Policy</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
