import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
  Icon,
  Button,
} from "@chakra-ui/react";
import { Smartphone, Stethoscope, CheckCircle2 } from "lucide-react";

const Feature = ({ children }: { children: React.ReactNode }) => (
  <HStack align="start" spacing={3}>
    <Icon as={CheckCircle2} color="brand.petrol" boxSize={5} />
    <Text fontSize="md" color="gray.700" lineHeight="1.6">
      {children}
    </Text>
  </HStack>
);

export default function Atendimento() {
  return (
    <Box as="section" bg="gray.50" py={{ base: 14, md: 20 }}>
      <Container maxW="6xl">
        {/* Título */}
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          color="brand.petrol"
          mb={4}
        >
          Atendimento do seu jeito: Online ou Presencial
        </Heading>
        <Text
          textAlign="center"
          fontSize="lg"
          color="gray.600"
          maxW="2xl"
          mx="auto"
          mb={12}
        >
          Em qualquer modalidade você terá <b>consulta inicial</b>,{" "}
          <b>retornos periódicos</b> e acesso ao <b>aplicativo exclusivo</b> para
          acompanhar sua evolução e ajustes no plano alimentar.
        </Text>

        {/* Cards */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {/* Online */}
          <Box
            bg="white"
            p={8}
            rounded="2xl"
            shadow="md"
            _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
            transition="all 0.3s"
          >
            <HStack spacing={3} mb={6}>
              <Icon as={Smartphone} color="brand.orange" boxSize={7} />
              <Heading size="md" color="brand.petrol">
                Online
              </Heading>
            </HStack>

            <Stack spacing={4} mb={8}>
              <Feature>Consulta inicial por vídeo + retornos periódicos</Feature>
              <Feature>Acompanhamento completo pelo aplicativo exclusivo</Feature>
              <Feature>Ajustes no plano alimentar sempre que necessário</Feature>
              <Feature>Suporte direto pelo WhatsApp</Feature>
            </Stack>

            <Button
              as="a"
              href="https://wa.me/5599999999999"
              w="full"
              size="lg"
              bg="brand.orange"
              color="white"
              _hover={{ bg: "orange.600" }}
            >
              Quero atendimento online 📱
            </Button>
          </Box>

          {/* Presencial */}
          <Box
            bg="white"
            p={8}
            rounded="2xl"
            shadow="md"
            _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
            transition="all 0.3s"
          >
            <HStack spacing={3} mb={6}>
              <Icon as={Stethoscope} color="brand.orange" boxSize={7} />
              <Heading size="md" color="brand.petrol">
                Presencial
              </Heading>
            </HStack>

            <Stack spacing={4} mb={8}>
              <Feature>Consultas em consultório + retornos presenciais</Feature>
              <Feature>Exame de bioimpedância para avaliação corporal</Feature>
              <Feature>Ajustes imediatos no plano alimentar</Feature>
              <Feature>Acompanhamento no aplicativo + suporte no WhatsApp</Feature>
            </Stack>

            <Button
              as="a"
              href="https://wa.me/5599999999999"
              w="full"
              size="lg"
              bg="brand.orange"
              color="white"
              _hover={{ bg: "orange.600" }}
            >
              Quero atendimento presencial 🏥
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
