import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        w="auto"
        h="auto"
        maxW={[300, 500, 900]}
        maxH={[350, 450, 600]}
      >
        <ModalBody>
          <Image
            src={imgUrl}
            alt="The best doge"
            maxW={[300, 500, 900]}
            maxH={[350, 450, 600]}
          />
        </ModalBody>

        <ModalFooter bg="pGray.800" h="8" py="20px" borderBottomRadius={5}>
          <Link href={imgUrl} isExternal fontSize="1rem" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
