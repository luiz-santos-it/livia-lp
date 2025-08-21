import {
  Box,
  Container,
  HStack,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { WHATS_LINK, METHOD_NAME } from "../constants";
import { CTAButton } from "./CTAButton";

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

          <CTAButton variant="secondary">{ctaLabel}</CTAButton>
        </HStack>
      </Container>
    </Box>
  );
}
