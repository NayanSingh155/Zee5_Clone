import { QuestionIcon } from "@chakra-ui/icons";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Lorem,
  Text,
} from "@chakra-ui/react";

export function VerticallyCenter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} bg="rgb(15,6,23)">
        <QuestionIcon boxSize={4} />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg="rgb(15,6,23)" color="gray">
          <ModalHeader>About Us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text >
              At Zee5, the online video streaming Over The Top (OTT) platform,
              we truly believe that for entertainment to come alive, you need to
              feel it. That’s where Zee5 brings in the advantage of the language
              of your comfort! With 12 navigational and featured languages
              across original features, live TV, catch up TV, lifestyle shows,
              children's programmes, exclusive short series and acclaimed plays
              - it’s unlimited entertainment in the language that sounds like
              home. Zee5 offers an exhaustive array of content; with 90+ live TV
              channels and 1.25 lac+ hours of viewing across the languages of
              English, Hindi, Bengali, Malayalam, Tamil, Telugu, Kannada,
              Marathi, Oriya, Bhojpuri, Gujarati & Punjabi making it a complete
              video destination for OTT viewers.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button bg="gray" color="rgb(15,6,23)" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
