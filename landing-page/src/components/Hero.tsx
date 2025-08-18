import { Container, SimpleGrid, Heading, Text, Button, Stack, Image, Box } from "@chakra-ui/react";
import { COLORS, WHATS_LINK } from "../constants";
import { trackWhatsClick } from "../utils/analytics";
import hero from "/hero.jpg";

export default function Hero() {
  return (
    <Box as="section" bg={COLORS.cream} pt={{ base: 8, md: 12 }} pb={{ base: 8, md: 12 }}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Stack spacing={6}>
            <Heading as="h1" size="2xl" color={COLORS.petrol} lineHeight="1.1">
              Nutrição além do prato: <br/>saúde, estética e performance
            </Heading>
            <Text fontSize="lg" color="gray.700">
              Consultas online no mundo todo e presenciais em <b>Salvador</b> e no <b>Baixo Sul</b>.
            </Text>
            <Button
              colorScheme="petrol" size="lg" alignSelf={{ base: "stretch", md: "start" }}
              as="a" href={WHATS_LINK} target="_blank" rel="noopener"
              onClick={() => trackWhatsClick("hero")}
              aria-label="Agendar consulta pelo WhatsApp">
              Agende pelo WhatsApp
            </Button>
          </Stack>

          {/* Foto borderless – alinhada ao design aprovado */}
          <Image
            src={hero} alt="Livia Anjos, Nutricionista"
            borderRadius="lg" shadow="lg" loading="lazy"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
