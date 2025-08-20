import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Box,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TbClipboardCheck } from "react-icons/tb";
import { COLORS, WHATS_LINK, CRN } from "../constants";
import { trackWhatsClick } from "../utils/analytics";
import fotoLivia from "/foto-livia.jpg";
import { CTAButton } from "./CTAButton";

export default function HeroB() {
  return (
    <Box
      as="section"
      bg={COLORS.cream}
      pt={{ base: 12, md: 20 }}
      pb={{ base: 14, md: 24 }}
    >
      <Container maxW="6xl">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 12, md: 16 }}
          alignItems="center"
        >
          {/* Texto */}
          <Stack spacing={{ base: 6, md: 8 }}>
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              lineHeight="1.2"
              fontWeight="extrabold"
            >
              Sua jornada para uma vida{" "}
              <Box as="span" color={COLORS.orange}>
                leve
              </Box>{" "}
              e{" "}
              <Box as="span" color={COLORS.petrol}>
                sustentável
              </Box>{" "}
              começa aqui.
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
              Muito além de um plano alimentar: você terá acompanhamento com{" "}
              <b>ciência</b>, <b>estratégias personalizadas</b> e{" "}
              <b>vivência prática</b>. Chega de restrições sem sentido — aqui o
              foco é <b>equilíbrio</b> e <b>resultados reais</b>.
            </Text>

            {/* Bullets */}
            <Stack spacing={3} fontSize={{ base: "md", md: "lg" }} color="gray.800">
              <HStack>
                <Icon as={FiCheckCircle} color={COLORS.petrol} boxSize={5} />
                <Text>Emagrecimento saudável e duradouro</Text>
              </HStack>
              <HStack>
                <Icon as={GiWeightLiftingUp} color={COLORS.petrol} boxSize={5} />
                <Text>Alta performance esportiva com equilíbrio</Text>
              </HStack>
              <HStack>
                <Icon as={TbClipboardCheck} color={COLORS.petrol} boxSize={5} />
                <Text>Plano alimentar feito para sua rotina</Text>
              </HStack>
            </Stack>

            {/* Credenciais */}
            <HStack spacing={2} flexWrap="wrap">
              <Badge colorScheme="orange" variant="subtle">
                {CRN}
              </Badge>
              <Badge colorScheme="teal" variant="subtle">
                Presencial: Salvador & Baixo Sul
              </Badge>
              <Badge colorScheme="purple" variant="subtle">
                Online (global)
              </Badge>
              <Badge colorScheme="green" variant="subtle">
                +15k no Instagram
              </Badge>
            </HStack>

          <CTAButton variant="primary">Quero transformar minha rotina</CTAButton>

          </Stack>

          {/* Imagem */}
          <Box position="relative">
            <Box
              position="absolute"
              inset="-18px"
              bg={`radial-gradient(360px 220px at 70% 30%, rgba(37,93,87,0.08), transparent 70%)`}
              borderRadius="2xl"
              zIndex={0}
            />
            <Image
              src={fotoLivia}
              alt="Livia Anjos, Nutricionista, no consultório"
              borderRadius="2xl"
              shadow="xl"
              loading="lazy"
              w="100%"
              h="auto"
              objectFit="cover"
              position="relative"
              zIndex={1}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
