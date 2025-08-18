import { Box, Container, Heading, Text, Stack, SimpleGrid, Image, Grid } from "@chakra-ui/react";
import { CRN } from "../constants";

export default function About() {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} bg="gray.50">
      <Container maxW="6xl">
        <Heading
          as="h2"
          size="xl"
          mb={6}
          color="brand.petrol"
          textAlign="center"
          lineHeight="1.2"
        >
          Quem é Livia Anjos
        </Heading>

        <Text
          fontSize="lg"
          textAlign="center"
          color="gray.700"
          maxW="3xl"
          mx="auto"
          mb={10}
        >
          Nutricionista Clínica e Esportiva ({CRN}), com uma visão que une{" "}
          <b>saúde, estética e performance</b> para resultados sustentáveis.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          {/* Texto */}
          <Stack spacing={5} fontSize="lg" color="gray.800">
            <Text>
              Minha vivência no <b>fisiculturismo</b> me mostrou o que é chegar
              ao <b>extremo da disciplina e da performance</b>. Esse aprendizado
              me dá autoridade para orientar atletas e pessoas que buscam alta
              performance.
            </Text>

            <Text>
              Ao mesmo tempo, minha missão é ajudar quem deseja{" "}
              <b>emagrecer com saúde</b>, sem dietas radicais. Acredito que cada
              pessoa pode evoluir dentro da sua realidade, seja buscando o{" "}
              <b>próximo nível nos treinos</b>, seja conquistando uma vida mais{" "}
              <b>leve e equilibrada</b>.
            </Text>

            <Text>
              Meu compromisso é construir planos alimentares{" "}
              <b>personalizados</b>, com acompanhamento próximo e humano — para
              que você se sinta seguro(a) e motivado(a) em cada etapa da
              jornada.
            </Text>
          </Stack>

          {/* Imagens lado a lado no desktop */}
          <Grid
            templateColumns={{ base: "1fr", sm: "1fr 1fr" }}
            gap={6}
            justifyItems="center"
          >

            <Image
  src="/livia-posando.jpg"
  alt="Livia Anjos posando em competição de fisiculturismo"
  borderRadius="lg"
  shadow="md"
  objectFit="cover"
  h="420px"
  w="300px"
/>
<Image
  src="/livia-fisiculturista.jpg"
  alt="Livia Anjos no palco de fisiculturismo com troféu"
  borderRadius="lg"
  shadow="md"
  objectFit="cover"
  h="420px"
  w="300px"
/>


          </Grid>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
