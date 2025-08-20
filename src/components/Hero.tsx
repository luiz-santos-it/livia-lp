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
      pt={{ base: 14, md: 24 }}
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
              Nutrição que acolhe, transforma e entrega{" "}
              <Box as="span" bgGradient="linear(to-r, teal.600, green.400)" bgClip="text">
                resultados reais
              </Box>
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" maxW="lg">
              Já tentou seguir dietas que não duraram? Aqui você encontra{" "}
              <b>ciência</b> com <b>cuidado humano</b>, em um plano que respeita
              sua história, sua rotina e seu ritmo. O objetivo é te ajudar a
              conquistar saúde, energia e bem-estar — sem extremos.
            </Text>

            {/* Bullets */}
            <Stack spacing={3} fontSize={{ base: "md", md: "lg" }} color="gray.800">
              <HStack>
                <Icon as={FiCheckCircle} color={COLORS.petrol} boxSize={5} />
                <Text>Emagrecimento saudável, sem sofrimento</Text>
              </HStack>
              <HStack>
                <Icon as={GiWeightLiftingUp} color={COLORS.petrol} boxSize={5} />
                <Text>Performance esportiva com equilíbrio</Text>
              </HStack>
              <HStack>
                <Icon as={TbClipboardCheck} color={COLORS.petrol} boxSize={5} />
                <Text>Plano alimentar feito para a sua vida real</Text>
              </HStack>
            </Stack>

            {/* Badges minimalistas */}
            <HStack spacing={4} flexWrap="wrap" pt={3}>
              <Badge variant="outline" colorScheme="gray">
                {CRN}
              </Badge>
              <Badge variant="outline" colorScheme="gray">
                Salvador & Baixo Sul
              </Badge>
              <Badge variant="outline" colorScheme="gray">
                Online (Global)
              </Badge>
            </HStack>

            {/* CTA */}
            <CTAButton variant="primary">
              Quero cuidar da minha saúde com ciência
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
              bg="radial-gradient(circle at 70% 30%, rgba(37,93,87,0.12), transparent 70%)"
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
