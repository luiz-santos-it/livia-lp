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

            <Stack spacing={4}>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" maxW="lg">
                Já tentou mudar sua alimentação e acabou se sentindo preso em
                ciclos de <b>restrição</b> ou <b>exageros</b>? Talvez até tenha
                sentido falta de energia no dia a dia.  
                Aqui, você encontra <b>ciência com cuidado humano</b> — em um plano
                que respeita sua história, sua rotina e seus objetivos.
              </Text>

              <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" maxW="lg">
                Seja para viver com mais leveza, superar desafios com a comida ou
                alcançar <b>alta performance esportiva</b> em modalidades como{" "}
                <b>futevôlei, corrida, atletismo ou musculação</b>, o propósito é o
                mesmo: apoiar você na conquista de saúde real, equilíbrio e
                resultados duradouros — sem julgamentos e com acolhimento.
              </Text>
            </Stack>

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

            {/* CTAs */}
            <HStack spacing={4} pt={2} flexWrap="wrap">
              <CTAButton variant="primary">
                Quero cuidar da minha saúde com ciência
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
