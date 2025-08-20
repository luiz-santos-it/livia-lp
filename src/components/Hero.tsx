import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  Image,
  Box,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TbClipboardCheck } from "react-icons/tb";
import { COLORS, CRN } from "../constants";
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
              Nutrição com{" "}
              <Box
                as="span"
                bgGradient="linear(to-r, teal.600, green.400)"
                bgClip="text"
              >
                ciência
              </Box>
              ,{" "}
              <Box
                as="span"
                bgGradient="linear(to-r, orange.500, red.400)"
                bgClip="text"
              >
                disciplina
              </Box>{" "}
              e{" "}
              <Box
                as="span"
                bgGradient="linear(to-r, teal.700, teal.300)"
                bgClip="text"
              >
                resultados reais
              </Box>
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" maxW="lg">
              Estratégia personalizada, acompanhamento científico e resultados
              sustentáveis. Nada de dietas sem sentido — aqui o foco é{" "}
              <b>equilíbrio</b>, <b>performance</b> e <b>longevidade</b>.
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
                <Text>Plano alimentar adaptado à sua rotina</Text>
              </HStack>
            </Stack>

            {/* Badges minimalistas */}
            <HStack spacing={3} flexWrap="wrap" pt={2}>
              <Badge variant="outline" colorScheme="orange">
                {CRN}
              </Badge>
              <Badge variant="outline" colorScheme="teal">
                Salvador & Baixo Sul
              </Badge>
              <Badge variant="outline" colorScheme="purple">
                Online (Global)
              </Badge>
            </HStack>

            {/* CTA */}
            <CTAButton
              variant="primary"
            >
              Quero meu plano personalizado
            </CTAButton>
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
