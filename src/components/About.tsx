import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Image,
  Grid,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
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
          Quem é <Text as="span" color="brand.orange">Livia Anjos</Text>
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
          <b>ciência, experiência e disciplina</b> para transformar resultados
          em conquistas reais e sustentáveis.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          {/* Texto */}
          <Stack spacing={6} fontSize="lg" color="gray.800">
            <Text>
              Minha história começou no <b>fisiculturismo</b>, onde aprendi o
              verdadeiro significado de disciplina, foco e performance. Essa
              vivência me ensinou que <b>resultados consistentes</b> vêm da
              união entre ciência e prática.
            </Text>

            <Text>
              Hoje, levo esse aprendizado para <b>atletas e pessoas comuns</b>,
              ajudando cada paciente a atingir seu máximo potencial — seja
              <b> evoluindo nos treinos</b> ou <b>emagrecendo com saúde e equilíbrio</b>.
            </Text>

            <Text>
              Meu propósito é mostrar que <b>nutrição não precisa ser difícil</b>:
              com planejamento, acompanhamento próximo e estratégias bem pensadas,
              você conquista resultados que realmente duram.
            </Text>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircle} color="brand.petrol" />
                Planos alimentares <b>100% personalizados</b> para sua rotina
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircle} color="brand.petrol" />
                Acompanhamento <b>próximo, humano e motivador</b>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircle} color="brand.petrol" />
                Experiência prática em <b>alta performance e saúde</b>
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
