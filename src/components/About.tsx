import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Grid,
  List,
  ListIcon,
  ListItem,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { CRN } from "../constants/general";
import { CTAButton } from "./CTAButton";

// ✅ imports novos: constants + utils de imagem
import { IMAGES } from "../constants/imageSources";
import { buildPicture } from "../utils/imageSelect";

// ====== copy centralizada (clean code) ======
const ABOUT_COPY = {
  titlePrefix: "Quem é ",
  name: "Lívia Anjos",
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
  // ⚙️ monta os dados das imagens a partir dos constants
  const picBackPose = buildPicture(IMAGES.LIVIA_BACK_POSE_BODYBUILDING);
  const picAward = buildPicture(IMAGES.LIVIA_AWARD_STAGE_TROPHY_3RD_PLACE);

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

        {/* Subtítulo */}
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
          alignItems="start"
        >
          {/* Imagens (agora com constants + utils) */}
          <Grid
            order={{ base: -1, md: 1 }}
            templateColumns={{ base: "1fr", sm: "1fr 1fr" }}
            gap={6}
            justifyItems={{ base: "center", md: "start" }}
            alignSelf="start"
          >
            
            {/* Foto 1: premiação com troféu */}
            <AspectRatio
              w="100%"
              maxW={{ base: "280px", sm: "300px", md: "360px", lg: "420px" }}
              ratio={3 / 4}
            >
              <picture>
                {picAward.sources.map((s) => (
                  <source
                    key={s.type}
                    type={s.type}
                    srcSet={s.srcSet}
                    sizes={picAward.img.sizes}
                  />
                ))}
                <Image
                  src={picAward.img.src}
                  srcSet={picAward.img.srcSet}
                  sizes={picAward.img.sizes}
                  alt={picAward.img.alt}
                  borderRadius="xl"
                  shadow="lg"
                  objectFit={{ base: "contain", md: "cover" }}
                  objectPosition={{ md: "center top" }}
                  bg={{ base: "blackAlpha.50", md: "transparent" }}
                  loading="lazy"
                  decoding="async"
                  itemProp="image"
                />
              </picture>
            </AspectRatio>

            {/* Foto 2: back pose */}
            <AspectRatio
              w="100%"
              maxW={{ base: "280px", sm: "300px", md: "360px", lg: "420px" }}
              ratio={3 / 4}
            >
              <picture>
                {picBackPose.sources.map((s) => (
                  <source
                    key={s.type}
                    type={s.type}
                    srcSet={s.srcSet}
                    sizes={picBackPose.img.sizes}
                  />
                ))}
                <Image
                  src={picBackPose.img.src}
                  srcSet={picBackPose.img.srcSet}
                  sizes={picBackPose.img.sizes}
                  alt={picBackPose.img.alt}
                  borderRadius="xl"
                  shadow="lg"
                  objectFit={{ base: "contain", md: "cover" }}
                  objectPosition={{ md: "center" }}
                  bg={{ base: "blackAlpha.50", md: "transparent" }}
                  loading="lazy"
                  decoding="async"
                  itemProp="image"
                />
              </picture>
            </AspectRatio>

          </Grid>

          {/* Texto */}
          <Stack
            spacing={6}
            fontSize={{ base: "md", md: "lg" }}
            color="gray.800"
            maxW="60ch"
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
