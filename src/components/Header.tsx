import {
  Box,
  Container,
  HStack,
  Spacer,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";
import Logo from "./Logo";
import { WHATS_LINK, METHOD_NAME } from "../constants";
import { CTAButton } from "./CTAButton";

export default function Header() {
  const ctaLabel = useBreakpointValue({
    base: "Agende sua consulta",
    sm: "Agende sua consulta",
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

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
      bg="rgba(255,255,255,0.9)"
      backdropFilter="saturate(140%) blur(8px)"
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
      sx={{
        paddingInline: "env(safe-area-inset-left) env(safe-area-inset-right)",
      }}
    >
      <Container maxW="6xl" py={2}>
        {isMobile ? (
          <VStack spacing={2} align="stretch">
            {/* Logo centralizado */}
            <HStack justify="space-between" w="full">
              <Logo />
            </HStack>

            {/* Botão compacto no mobile */}
            <CTAButton
              as="a"
              href={waLink}
              variant="secondary"
              size="sm"
              w="auto"
              mx="auto"
              px={4}
              leftIcon={<FiCalendar />}
            >
              {ctaLabel}
            </CTAButton>
          </VStack>
        ) : (
          <HStack gap={3}>
            <Box minW={0}>
              <Logo />
            </Box>

            <Spacer />

            {/* Botão maior no desktop */}
            <CTAButton
              as="a"
              href={waLink}
              variant="secondary"
              leftIcon={<FiCalendar />}
            >
              {ctaLabel}
            </CTAButton>
          </HStack>
        )}
      </Container>
    </Box>
  );
}
