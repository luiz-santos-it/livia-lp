import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import { CRN } from "../constants";

export default function About() {
  return (
    <Box as="section" py={{ base: 10, md: 14 }}>
      <Container maxW="6xl">
        <Heading as="h2" size="xl" mb={4} color="brand.petrol">Sobre Mim</Heading>
        <Stack spacing={3} fontSize="lg" color="gray.800">
          <Text>Sou <b>Livia Anjos</b>, Nutricionista Esportiva e Clínica ({CRN}).</Text>
          <Text>Como atleta de fisiculturismo, conquistei o <b>3º lugar</b> na Muscle Contest Bahia Amador. Essa vivência me ajuda a compreender, na prática, os desafios da jornada fitness e de alta performance.</Text>
          <Text>Minha abordagem integra <b>saúde</b>, <b>estética</b> e <b>performance</b>, com plano alimentar personalizado e acompanhamento próximo.</Text>
        </Stack>
      </Container>
    </Box>
  );
}
