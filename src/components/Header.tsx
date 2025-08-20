import {
  Box,
  Container,
  HStack,
  Button,
  IconButton,
  Spacer,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { WHATS_LINK, METHOD_NAME } from "../constants";
import { trackWhatsClick } from "../utils/analytics";

export default function Header() {
  const ctaLabel = useBreakpointValue({
    base: "Agendar",
    sm: "Agende sua consulta",
  });

  const msg = encodeURIComponent(
    `Oi! Quero informações do ${METHOD_NAME} e disponibilidade :)`
  );
  const waLink = `${WHATS_LINK}?text=${msg}`;

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="banner"
      bg="rgba(255,255,255,0.85)"
      backdropFilter="saturate(140%) blur(8px)"
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
      sx={{
        paddingInline: "env(safe-area-inset-left) env(safe-area-inset-right)",
      }}
    >
      <Container maxW="6xl" py={2}>
        <HStack gap={3}>
          <Box minW={0}>
            <Logo />
          </Box>

          <Spacer />

          {/* Ícone-only no mobile */}
          <IconButton
            aria-label="Agendar no WhatsApp"
            as="a"
            href={waLink}
            target="_blank"
            rel="noopener"
            size="sm"
            onClick={() => trackWhatsClick("header_icon")}
            bg="#00897B"
            color="white"
            _hover={{ bg: "#00796B", transform: "translateY(-1px)" }}
            _active={{ bg: "#00695C" }}
            icon={<Image src="/whatsapp.png" alt="WhatsApp" boxSize={5} />}
            display={{ base: "inline-flex", sm: "none" }}
            rounded="full"
          />

          {/* Botão com texto a partir de sm */}
          <Button
            as="a"
            href={waLink}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsClick("header")}
            display={{ base: "none", sm: "inline-flex" }}
            h={10}
            px={5}
            rounded="full"
            bg="#00897B"
            color="white"
            fontWeight="medium"
            gap={2}
            leftIcon={<Image src="/whatsapp.png" alt="WhatsApp" boxSize={5} />}
            _hover={{ bg: "#00796B", transform: "translateY(-1px)" }}
            _active={{ bg: "#00695C" }}
            _focusVisible={{ boxShadow: "0 0 0 3px rgba(0,105,92,0.4)" }}
          >
            {ctaLabel}
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}
