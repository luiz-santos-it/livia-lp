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
import { CTAButton } from "./CTAButton";

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
              Ao longo da minha jornada, vivi experiências que me mostraram o
              verdadeiro impacto da <b>disciplina e do foco</b>. Uma delas foi o{" "}
              <b>fisiculturismo</b>, onde aprendi na prática que resultados consistentes
              nascem da união entre ciência e dedicação.
            </Text>

            <Text>
              Hoje, aplico esse aprendizado tanto para <b>atletas</b> quanto para{" "}
              <b>pessoas comuns</b>, ajudando cada paciente a alcançar seu máximo
              potencial — seja para <b>melhorar a performance nos treinos</b> ou
              para <b>emagrecer com saúde e equilíbrio</b>.
            </Text>

            <Text>
              Meu propósito é mostrar que <b>nutrição não precisa ser complicada</b>:
              com um plano alimentar adaptado à sua rotina, acompanhamento próximo
              e estratégias inteligentes, você conquista resultados que realmente duram.
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

          <CTAButton variant="primary">Descubra como posso te ajudar</CTAButton>

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
