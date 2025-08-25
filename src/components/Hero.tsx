import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  Image,
  Box,
  HStack,
  Icon,
  VStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Wrap,
  WrapItem,
  Tooltip,              
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiUsers, FiAward, FiMapPin, FiGlobe } from "react-icons/fi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TbClipboardCheck } from "react-icons/tb";
import { COLORS, CRN, INSTAGRAM_LINK } from "../constants/general";
import fotoLivia from "/foto-livia.jpg";
import { CTAButton } from "./CTAButton";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

// --- textos centralizado ---
const SOCIAL_LABEL = "15k+ seguidores";
const SOCIAL_TOOLTIP = "Mais de 15 mil pessoas acompanham";

const HERO_COPY = {
  titlePrefix: "Nutrição que acolhe, transforma e entrega ",
  titleHighlight: "resultados reais",
  p1: `Já tentou mudar sua alimentação e acabou em ciclos de restrição ou exageros?
Aqui você encontra ciência com cuidado humano — em um plano que respeita sua rotina e seus objetivos.`,
  p2: `Seja para viver com mais leveza ou alcançar performance esportiva, o propósito é o mesmo:
apoiar você na conquista de saúde real, equilíbrio e resultados duradouros — sempre com acolhimento.`,
};

const BULLETS = [
  { icon: FiCheckCircle, text: "Emagrecimento saudável e sustentável" },
  { icon: GiWeightLiftingUp, text: "Performance esportiva: energia, foco e recuperação" },
  { icon: TbClipboardCheck, text: "Plano alimentar feito sob medida para a sua vida real" },
];

const TAGS = [
  { label: CRN, icon: FiAward, colorScheme: "teal", aria: "Registro profissional no Conselho Regional de Nutrição" },
  { label: SOCIAL_LABEL, icon: FiUsers, colorScheme: "gray", href: INSTAGRAM_LINK, aria: `${SOCIAL_TOOLTIP} no Instagram`, tooltip: SOCIAL_TOOLTIP },
  { label: "Presencial: Salvador & Região do Baixo Sul", icon: FiMapPin, colorScheme: "gray", aria: "Atendimento presencial em Salvador e Região do Baixo Sul" },
  { label: "Online: Brasil & exterior", icon: FiGlobe, colorScheme: "gray", aria: "Atendimento online no Brasil e no exterior" },
];
// ------------------------------------------

export default function HeroModern() {
  return (
    <Box as="section" bg={COLORS.cream} pt={{ base: 8, md: 20 }} pb={{ base: 16, md: 28 }} position="relative">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 20 }} alignItems="center">
          {/* Coluna da Imagem */}
          <MotionBox order={{ base: -1, md: 0 }} position="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Box position="absolute" inset="-20px" bg="radial-gradient(circle at 70% 30%, rgba(37,93,87,0.15), transparent 70%)" borderRadius="full" zIndex={0} aria-hidden="true" />
            <Image src={fotoLivia} alt="Livia Anjos, Nutricionista" borderRadius="full" shadow="2xl" loading="lazy" w="100%" maxW={{ base: "300px", md: "420px" }} h="auto" objectFit="cover" zIndex={1} mx="auto" decoding="async" />
          </MotionBox>

          {/* Coluna do Texto */}
          <MotionStack spacing={{ base: 5, md: 8 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* TAGS */}
            <Wrap spacing={2} justify={{ base: "center", md: "flex-start" }}>
              {TAGS.map(({ label, icon, colorScheme, href, aria, tooltip }, i) => {
                const TagEl = (
                  <Tag
                    as={href ? "a" : undefined}
                    href={href}
                    target={href ? "_blank" : undefined}
                    rel={href ? "noopener noreferrer" : undefined}
                    size={{ base: "sm", md: "md" }}
                    variant="subtle"
                    colorScheme={colorScheme as any}
                    aria-label={aria}
                  >
                    <TagLeftIcon as={icon} aria-hidden="true" />
                    <TagLabel>{label}</TagLabel>
                  </Tag>
                );
                return (
                  <WrapItem key={`${label}-${i}`}>
                    {tooltip ? (
                      <Tooltip label={tooltip} placement="top" hasArrow>
                        {TagEl}
                      </Tooltip>
                    ) : (
                      TagEl
                    )}
                  </WrapItem>
                );
              })}
            </Wrap>

            {/* Título */}
            <Heading as="h1" fontSize={{ base: "2xl", md: "5xl" }} fontWeight="black" lineHeight="1.2" textAlign={{ base: "center", md: "left" }}>
              {HERO_COPY.titlePrefix}
              <Box as="span" color="teal.600">
                {HERO_COPY.titleHighlight}
              </Box>
            </Heading>

            {/* CTA principal no mobile */}
            <Box display={{ base: "flex", md: "none" }} justifyContent="center">
              <CTAButton variant="primary" size="lg">Agende sua consulta</CTAButton>
            </Box>

            {/* Texto descritivo */}
            <VStack spacing={4} align="start" color="gray.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6" maxW="lg">
              <Text textAlign={{ base: "center", md: "left" }}>{HERO_COPY.p1}</Text>
              <Text textAlign={{ base: "center", md: "left" }}>{HERO_COPY.p2}</Text>
            </VStack>

            {/* Bullets */}
            <Stack spacing={3} fontSize={{ base: "md", md: "lg" }} color="gray.800">
              {BULLETS.map(({ icon, text }, i) => (
                <HStack key={i}>
                  <Icon as={icon} color="gray.600" boxSize={5} aria-hidden="true" />
                  <Text>{text}</Text>
                </HStack>
              ))}
            </Stack>

            {/* CTAs Secundários */}
            <HStack spacing={4} pt={2} flexWrap="wrap" justify={{ base: "center", md: "flex-start" }}>
              <CTAButton variant="primary">Quero cuidar da minha saúde</CTAButton>
              <CTAButton variant="outline" href="#testimonials">Conhecer histórias reais</CTAButton>
            </HStack>
          </MotionStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
