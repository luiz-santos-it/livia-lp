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
} from "@chakra-ui/react";
import { COLORS, WHATS_LINK } from "../constants";
import { trackWhatsClick } from "../utils/analytics";
import instaMock from "/insta-mock.png"; // screenshot do Instagram (1080x1920 recomendado)
import { CRN } from "../constants";

export default function Hero() {
  return (
    <Box as="section" bg={COLORS.cream} pt={{ base: 10, md: 16 }} pb={{ base: 12, md: 20 }}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 12 }} alignItems="center">
          {/* Texto principal */}
          <Stack spacing={6}>
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              color={COLORS.petrol}
              lineHeight="1.15"
            >
              Nutrição que vai além do prato:
              <br />
              <Box as="span" fontWeight="extrabold">resultados reais sem extremos</Box>.
            </Heading>

            <Text fontSize="lg" color="gray.700">
              Se você já tentou <b>dietas restritivas</b>, <b>low carb da moda</b> ou qualquer outra
              <b> dieta maluca da internet</b> e não conseguiu manter, aqui vai encontrar um
              acompanhamento baseado em <b>ciência</b>, <b>vivência prática</b> no fisiculturismo e
              <b> estratégias sustentáveis</b> para saúde, estética e performance.
            </Text>

            {/* Bullets simples (sem chakra-icons) */}
            <Stack spacing={2} fontSize="md" color="gray.800">
              <Text>✅ Emagrecimento saudável e duradouro</Text>
              <Text>🏋️‍♀️ Alta performance esportiva com equilíbrio</Text>
              <Text>📋 Planos personalizados para sua rotina</Text>
            </Stack>

            {/* Credenciais rápidas */}
            <Stack direction="row" spacing={3} flexWrap="wrap">
              <Badge colorScheme="orange"> {CRN}</Badge>
              <Badge colorScheme="purple">Online (global)</Badge>
              <Badge colorScheme="teal">Presencial: Salvador & Baixo Sul</Badge>
            </Stack>

            {/* CTA */}
            <Button
              colorScheme="petrol"
              size="lg"
              as="a"
              href={WHATS_LINK}
              target="_blank"
              rel="noopener"
              onClick={() => trackWhatsClick("hero")}
              aria-label="Agendar consulta pelo WhatsApp"
              alignSelf={{ base: "stretch", md: "start" }}
            >
              Agende pelo WhatsApp
            </Button>
          </Stack>

          {/* Mock do celular com o Instagram — sem cortes */}
          <Box
            role="figure"
            aria-label="Prova social: perfil do Instagram de Livia Anjos com engajamento"
            mx={{ base: "auto", md: "0" }}
            // moldura do smartphone
            position="relative"
            w={{ base: "260px", sm: "300px", md: "340px" }}
            // razão 9:16 aproximada (altura controla o espaço; a imagem interna usa contain)
            h={{ base: "460px", sm: "530px", md: "600px" }}
            border="12px solid #111"
            borderRadius="28px"
            bg="#000"
            boxShadow="0 20px 40px rgba(0,0,0,.18)"
            overflow="hidden"
          >
            {/* notch/topo do celular (estético) */}
            <Box
              position="absolute"
              top="0"
              left="50%"
              transform="translateX(-50%)"
              w="40%"
              h="16px"
              bg="#111"
              borderBottomLeftRadius="12px"
              borderBottomRightRadius="12px"
              zIndex={2}
            />
            {/* tela */}
            <Image
              src={instaMock}
              alt="Tela do Instagram @nutrianjoos com 15k seguidores"
              loading="lazy"
              objectFit="contain"   // garante 100% visível, sem cortes
              w="100%"
              h="100%"
              bg="white"           // fundo branco atrás do print
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
