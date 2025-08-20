import { Box, SimpleGrid, Stack, Text, Heading, HStack } from "@chakra-ui/react";
import { Video, Stethoscope, CheckCircle2 } from "lucide-react";
import { CTAButton } from "./CTAButton";

const Feature = ({ children }: { children: React.ReactNode }) => (
  <HStack align="start" spacing={3}>
    <CheckCircle2 size={20} color="#0A9396" /> {/* Verde confiança */}
    <Text color="gray.700">{children}</Text>
  </HStack>
);

export default function ServiceOptions() {
  return (
    <Box py={20} px={6} maxW="7xl" mx="auto">
      {/* Título */}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={4}
        color="brand.petrol"
      >
        Atendimento do seu jeito: Online ou Presencial
      </Heading>

      {/* Subtítulo */}
      <Text
        textAlign="center"
        color="gray.600"
        maxW="3xl"
        mx="auto"
        mb={12}
        fontSize="lg"
      >
        Em qualquer modalidade você terá <b>consulta inicial</b>,{" "}
        <b>retornos periódicos</b> e acesso ao <b>aplicativo exclusivo</b>{" "}
        para acompanhar sua evolução e receber ajustes no plano alimentar sempre que necessário.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {/* Card Online */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p={8}
          borderRadius="2xl"
          bgGradient="linear(to-br, white, teal.50)"
          boxShadow="md"
          _hover={{ boxShadow: "xl", transform: "translateY(-4px)", transition: "0.3s" }}
        >
          <HStack mb={6} spacing={3}>
            <Video color="#0A9396" size={26} />
            <Heading as="h3" fontSize="xl" color="brand.petrol">
              Online
            </Heading>
          </HStack>

          <Stack spacing={3} mb={6}>
            <Feature>Consulta inicial por vídeo + retornos periódicos</Feature>
            <Feature>Acompanhamento completo pelo aplicativo exclusivo</Feature>
            <Feature>Ajustes no plano alimentar sempre que necessário</Feature>
            <Feature>Suporte direto pelo WhatsApp</Feature>
          </Stack>

          <CTAButton variant="secondary">Quero atendimento online</CTAButton>

        </Box>

        {/* Card Presencial */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p={8}
          borderRadius="2xl"
          bgGradient="linear(to-br, white, teal.50)"
          boxShadow="md"
          _hover={{ boxShadow: "xl", transform: "translateY(-4px)", transition: "0.3s" }}
        >
          <HStack mb={6} spacing={3}>
            <Stethoscope color="#0A9396" size={26} />
            <Heading as="h3" fontSize="xl" color="brand.petrol">
              Presencial
            </Heading>
          </HStack>

          <Stack spacing={3} mb={6}>
            <Feature>Consultas em consultório + retornos presenciais</Feature>
            <Feature>Atendimento em <b>Salvador</b>, <b>Ituberá</b> e região do <b>Baixo Sul</b></Feature>
            <Feature>Exame de bioimpedância para avaliação corporal</Feature>
            <Feature>Ajustes imediatos no plano alimentar</Feature>
            <Feature>Acompanhamento no aplicativo + suporte via WhatsApp</Feature>
          </Stack>

          <CTAButton variant="secondary">Quero atendimento presencial</CTAButton>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
