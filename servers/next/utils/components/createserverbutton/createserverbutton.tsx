"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import CreateInDatabase from "./createindatabase";

export default function CreateServerButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="primary" h={"100%"} w={"100%"} onClick={onOpen}>
        Create new
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
        scrollBehavior="inside"
        size={"xl"}
      >
        <ModalOverlay backdropFilter={"auto"} backdropBlur={"2px"} />
        <ModalContent bgColor={"dark.300"}>
          <ModalHeader>Create a new server</ModalHeader>
          <ModalBody>
            <VStack w={"100%"} spacing={8}>
              <VStack w={"100%"} spacing={0}>
                <Text w={"100%"}>Server name</Text>
                <Input variant={"flushed"}></Input>
              </VStack>
              <VStack w={"100%"} spacing={2}>
                <Text w={"100%"}>Server type</Text>
                <Select
                  placeholder="Select option"
                  variant={"flushed"}
                  sx={{
                    "> option": {
                      bgColor: "dark.200",
                      color: "text",
                    },
                  }}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 1</option>
                  <option value="option3">Option 1</option>
                </Select>
              </VStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="primary" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <CreateInDatabase colorScheme="blue" mr={3} onClick={onClose}>
              Create
            </CreateInDatabase>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
