import {
  Box,
  Container,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";
import Logo from "./Logo";
import { CTAButton } from "./CTAButton";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Header() {


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
        {useIsMobile() ? (
          <HStack justify="space-between" w="full">
            <Logo />
            {/* no button on mobile */}
          </HStack>
        ) : (
          <HStack gap={3}>
            <Box minW={0}>
              <Logo />
            </Box>

            <Spacer />

            {/* Botão com texto no desktop */}
            <CTAButton as="a" variant="secondary" leftIcon={<FiCalendar />}>
              Agende sua consulta
            </CTAButton>
          </HStack>
        )}
      </Container>
    </Box>
  );
}
