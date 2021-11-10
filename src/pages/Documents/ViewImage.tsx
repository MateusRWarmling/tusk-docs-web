import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

interface ModalViewImageProps {
  imgUrl: string;
  openedModal: boolean;
  setOpenedModal: (status: boolean) => void;
}

export function ViewImage({
  imgUrl,
  openedModal,
  setOpenedModal,
}: ModalViewImageProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={openedModal} onClose={() => setOpenedModal(!openedModal)}>
      <ModalOverlay />
      <ModalContent
        bgColor="pGray.800"
        p="0"
        maxW="fit-content"
        maxH="fit-content"
      >
        <ModalBody p="0">
          <Image src={imgUrl} maxW="900px" maxh="600px" />
        </ModalBody>

        <ModalFooter h="2rem" justifyContent="initial" bgColor="blue.850">
          <Link target="_blank" href={imgUrl} fontSize="0.875rem" color="white">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
