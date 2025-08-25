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
  AspectRatio,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { CRN } from "../constants";
import { CTAButton } from "./CTAButton";

// ====== copy centralizada (clean code) ======
const ABOUT_COPY = {
  titlePrefix: "Quem é ",
  name: "Livia Anjos", // padronize para "Lívia" se essa for a marca
  subtitleLead: "Nutricionista Clínica e Esportiva",
  p1: `Ao longo da minha jornada, vivi experiências que me mostraram o verdadeiro impacto da disciplina e do foco. Uma delas foi o fisiculturismo, onde aprendi na prática que resultados consistentes nascem da união entre ciência e dedicação.`,
  p2: `Hoje, aplico esse aprendizado tanto para atletas quanto para pessoas comuns, ajudando cada paciente a alcançar seu máximo potencial — seja para melhorar a performance nos treinos ou para emagrecer com saúde e equilíbrio.`,
  p3: `Meu propósito é mostrar que nutrição não precisa ser complicada: com um plano alimentar adaptado à sua rotina, acompanhamento próximo e estratégias inteligentes, você conquista resultados que realmente duram.`,
  microcopy: "Tire dúvidas pelo WhatsApp — resposta rápida",
};

const BENEFITS = [
  "Planos alimentares 100% personalizados para sua rotina",
  "Acompanhamento próximo, humano e motivador",
  "Experiência prática em alta performance e saúde",
];

export default function About() {
  return (
    <Box
      as="section"
      id="about"
      aria-labelledby="about-title"
      py={{ base: 12, md: 20 }}
      bg="gray.50"
      itemScope
      itemType="https://schema.org/Person"
    >
      <Container maxW="6xl">
        {/* Título */}
        <Heading
          as="h2"
          id="about-title"
          size="xl"
          mb={4}
          color="brand.petrol"
          textAlign="center"
          lineHeight="1.2"
        >
          {ABOUT_COPY.titlePrefix}
          <Text as="span" color="brand.orange" itemProp="name">
            {ABOUT_COPY.name}
          </Text>
        </Heading>

        {/* Subtítulo (com CRN e jobTitle) */}
        <Text
          fontSize="lg"
          textAlign="center"
          color="gray.700"
          maxW="3xl"
          mx="auto"
          mb={10}
        >
          <Text as="span" itemProp="jobTitle">
            {ABOUT_COPY.subtitleLead}
          </Text>{" "}
          ({CRN}), unindo <b>ciência, experiência e disciplina</b> para
          transformar resultados em conquistas reais e sustentáveis.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 10 }}
          alignItems="start"          // alinhar pelo topo
        >
          {/* Imagens — sem cortes no mobile; maiores no desktop */}
          <Grid
            order={{ base: -1, md: 1 }}
            templateColumns={{ base: "1fr", sm: "1fr 1fr" }}
            gap={6}
            justifyItems={{ base: "center", md: "start" }}
            alignSelf="start"
          >
            <AspectRatio
              w="100%"
              maxW={{ base: "280px", sm: "300px", md: "360px", lg: "400px" }}
              ratio={3 / 4}
            >
              <Image
                src="/livia-posando.jpg"
                alt="Livia Anjos em competição de fisiculturismo"
                borderRadius="xl"
                shadow="lg"
                objectFit={{ base: "contain", md: "cover" }}
                objectPosition={{ md: "center" }}
                bg={{ base: "blackAlpha.50", md: "transparent" }}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 480px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 360px, 400px"
                itemProp="image"
              />
            </AspectRatio>

            <AspectRatio
              w="100%"
              maxW={{ base: "280px", sm: "300px", md: "360px", lg: "400px" }}
              ratio={3 / 4}
            >
              <Image
                src="/livia-fisiculturista.jpg"
                alt="Livia Anjos no palco de fisiculturismo"
                borderRadius="xl"
                shadow="lg"
                objectFit={{ base: "contain", md: "cover" }}
                objectPosition={{ md: "center top" }} // ajuste fino, se quiser mais foco no rosto
                bg={{ base: "blackAlpha.50", md: "transparent" }}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 480px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 360px, 400px"
                itemProp="image"
              />
            </AspectRatio>
          </Grid>

          {/* Texto */}
          <Stack
            spacing={6}
            fontSize={{ base: "md", md: "lg" }}
            color="gray.800"
            maxW="60ch"               // largura ideal de leitura
            alignSelf="start"
          >
            <Text>{ABOUT_COPY.p1}</Text>
            <Text>{ABOUT_COPY.p2}</Text>
            <Text>{ABOUT_COPY.p3}</Text>

            <List spacing={3}>
              {BENEFITS.map((b, i) => (
                <ListItem key={i}>
                  <ListIcon as={FaCheckCircle} color="brand.petrol" aria-hidden="true" />
                  {b}
                </ListItem>
              ))}
            </List>

            <Text fontSize="sm" color="gray.600">
              {ABOUT_COPY.microcopy}
            </Text>
            <CTAButton variant="primary">Descubra como posso te ajudar</CTAButton>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
