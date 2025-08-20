import { Box, Container, Heading, Text, Stack, SimpleGrid, Image, Grid, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";
import { CRN } from "../constants";
export default function About() {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="gray.50">
      <Container maxW="6xl">
        {/* Título */}
        <Heading
          as="h2"
          size="xl"
          mb={4}
          color="brand.petrol"
          textAlign="center"
          lineHeight="1.2"
        >
          Quem é Livia Anjos
        </Heading>

        {/* Subtítulo */}
        <Text
          fontSize="lg"
          textAlign="center"
          color="gray.700"
          maxW="3xl"
          mx="auto"
          mb={10}
        >
          Nutricionista Clínica e Esportiva ({CRN}), unindo{" "}
          <b>ciência, experiência e disciplina</b> para transformar resultados em mudanças sustentáveis.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          {/* Texto */}
          <Stack spacing={6} fontSize="lg" color="gray.800">
            <Text>
              Minha vivência no <b>fisiculturismo</b> me ensinou o que significa
              alcançar o <b>máximo da disciplina e da performance</b>.
            </Text>

            <Text>
              Hoje, levo esse aprendizado para <b>atletas e pessoas comuns</b>,
              ajudando cada um a atingir seu potencial — seja{" "}
              <b>evoluindo nos treinos</b> ou{" "}
              <b>emagrecendo com saúde e equilíbrio</b>.
            </Text>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircle } color="brand.petrol" />
                Planos alimentares <b>personalizados</b> para sua rotina
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircle } color="brand.petrol" />
                Acompanhamento <b>próximo e humano</b>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircle } color="brand.petrol" />
                Experiência de quem viveu a{" "}
                <b>alta performance na prática</b>
              </ListItem>
            </List>
          </Stack>

          {/* Imagens */}
          <Grid
            templateColumns={{ base: "1fr", sm: "1fr 1fr" }}
            gap={6}
            justifyItems="center"
          >
            <Image
              src="/livia-posando.jpg"
              alt="Livia Anjos em competição de fisiculturismo"
              borderRadius="xl"
              shadow="lg"
              objectFit="cover"
              h={{ base: "320px", md: "420px" }}
              w="100%"
              maxW="300px"
            />
            <Image
              src="/livia-fisiculturista.jpg"
              alt="Livia Anjos no palco de fisiculturismo"
              borderRadius="xl"
              shadow="lg"
              objectFit="cover"
              h={{ base: "320px", md: "420px" }}
              w="100%"
              maxW="300px"
            />
          </Grid>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
