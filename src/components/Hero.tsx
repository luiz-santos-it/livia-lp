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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TbClipboardCheck } from "react-icons/tb";
import { COLORS } from "../constants";
import fotoLivia from "/foto-livia.jpg";
import { CTAButton } from "./CTAButton";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

export default function HeroModern() {
  return (
    <Box
      as="section"
      bg={COLORS.cream}
      pt={{ base: 12, md: 20 }}
      pb={{ base: 16, md: 28 }}
      position="relative"
    >
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 12, md: 20 }}
          alignItems="center"
        >
          {/* Texto */}
          <MotionStack
            spacing={{ base: 6, md: 8 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="black"
              lineHeight="1.1"
            >
              Nutrição que{" "}
              <Box as="span" color="teal.600">
                acolhe
              </Box>
              ,{" "}
              <Box as="span" color="orange.500">
                transforma
              </Box>{" "}
              e entrega{" "}
              <Box as="span" color="green.500">
                resultados reais
              </Box>
            </Heading>

            {/* Parágrafo 1 */}
            <Text
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.6"
              color="gray.700"
              maxW="lg"
            >
              Já tentou mudar sua alimentação e acabou em ciclos de{" "}
              <b>restrição</b> ou <b>exageros</b>? Aqui você encontra{" "}
              <b>ciência com cuidado humano</b> — em um plano que respeita sua
              rotina e seus objetivos.
            </Text>

            {/* Parágrafo 2 */}
            <Text
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.6"
              color="gray.700"
              maxW="lg"
            >
              Seja para viver com mais leveza ou alcançar{" "}
              <b>performance esportiva</b>, o propósito é
              o mesmo: apoiar você na conquista de saúde real, equilíbrio e
              resultados duradouros — sempre com acolhimento.
            </Text>

            {/* Bullets */}
            <Stack spacing={3} fontSize={{ base: "md", md: "lg" }} color="gray.800">
              <HStack>
                <Icon as={FiCheckCircle} color={COLORS.petrol} boxSize={5} />
                <Text>Emagrecimento saudável e sustentável</Text>
              </HStack>
              <HStack>
                <Icon as={GiWeightLiftingUp} color={COLORS.petrol} boxSize={5} />
                <Text>Performance esportiva: energia, foco e recuperação</Text>
              </HStack>
              <HStack>
                <Icon as={TbClipboardCheck} color={COLORS.petrol} boxSize={5} />
                <Text>Plano alimentar feito sob medida para a sua vida real</Text>
              </HStack>
            </Stack>

            {/* CTAs */}
            <HStack spacing={4} pt={2} flexWrap="wrap">
              <CTAButton variant="primary">
                Quero cuidar da minha saúde com ciência
              </CTAButton>
              <CTAButton variant="secondary">
                Conhecer histórias reais de pacientes
              </CTAButton>
            </HStack>
          </MotionStack>

          {/* Imagem */}
          <MotionBox
            position="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              position="absolute"
              inset="-20px"
              bg="radial-gradient(circle at 70% 30%, rgba(37,93,87,0.15), transparent 70%)"
              borderRadius="full"
              zIndex={0}
            />
            <Image
              src={fotoLivia}
              alt="Livia Anjos, Nutricionista"
              borderRadius="full"
              shadow="2xl"
              loading="lazy"
              w="100%"
              maxW="420px"
              h="auto"
              objectFit="cover"
              zIndex={1}
              mx="auto"
            />
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
