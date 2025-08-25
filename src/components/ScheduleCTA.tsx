import { Box, Container, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { WHATS_LINK } from "../constants/general";
import { trackWhatsClick } from "../utils/analytics";

export default function ScheduleCTA(){
  return (
    <Box as="section" bg="brand.petrol" color="white" py={{ base: 10, md: 14 }}>
      <Container maxW="6xl">
        <Stack spacing={6} textAlign="center">
          <Heading as="h2" size="xl">Agende sua consulta agora pelo WhatsApp</Heading>
          <Text fontSize="lg" opacity={0.95}>e dê o primeiro passo para sua transformação.</Text>
          <Button colorScheme="orange" size="lg" alignSelf="center"
            as="a" href={WHATS_LINK} target="_blank" rel="noopener"
            onClick={() => trackWhatsClick("cta-final")}
            aria-label="Agende pelo WhatsApp">
            Agende pelo WhatsApp
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
