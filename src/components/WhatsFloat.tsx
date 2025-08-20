import { IconButton, Image } from "@chakra-ui/react";
import { WHATS_LINK } from "../constants";

export default function WhatsFloat() {
  return (
    <IconButton
      as="a"
      href={WHATS_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Abrir WhatsApp"
      position="fixed"
      right="22px"
      bottom={{ base: "32px", md: "40px" }} // mais espaçamento no mobile e desktop
      zIndex="tooltip"
      variant="unstyled"
      icon={<Image src="/whatsapp.png" alt="WhatsApp" boxSize={16} />}
      _hover={{ transform: "scale(1.15)" }}
      _active={{ transform: "scale(0.95)" }}
    />
  );
}
