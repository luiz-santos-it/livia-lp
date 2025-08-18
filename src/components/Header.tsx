import { Box, Container, HStack, Button, Spacer } from "@chakra-ui/react";
import Logo from "./Logo";
import { WHATS_LINK } from "../constants";
import { trackWhatsClick } from "../utils/analytics";

export default function Header() {
  return (
    <Box as="header" position="sticky" top="0" zIndex="banner" bg="brand.cream" boxShadow="sm">
      <Container maxW="6xl" py={3}>
        <HStack>
          <Logo />
          <Spacer />
          <Button colorScheme="orange" size="sm"
            onClick={() => trackWhatsClick("header")}
            as="a" href={WHATS_LINK} target="_blank" rel="noopener"
            aria-label="Agende sua consulta pelo WhatsApp">
            Agende sua consulta
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}
