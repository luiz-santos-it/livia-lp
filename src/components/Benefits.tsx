import { Box, Container, Heading, SimpleGrid, HStack, Text, Button } from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";

const Item = ({ children }: { children: React.ReactNode }) => (
  <HStack align="start" spacing={4}>
    <CheckCircle color="#E96E2F" size={22} /> {/* ícone moderno e laranja */}
    <Text fontSize="lg" lineHeight="1.6">
      {children}
    </Text>
  </HStack>
);

export default function Benefits() {
  return (
    <Box
      as="section"
      bg="white"
      py={{ base: 14, md: 20 }}
      position="relative"
      isolation="isolate"
    >
      <Container maxW="6xl">
        <Heading
          as="h2"
          size="xl"
          mb={10}
          color="brand.petrol"
          textAlign="center"
        >
          Como posso te ajudar na sua jornada?
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Item>
            <b>Avaliação completa</b> — análise do seu histórico, rotina e objetivos para traçar um plano inicial 100% personalizado.
          </Item>
          <Item>
            <b>Plano alimentar exclusivo</b> — nada de copiar cardápios prontos: tudo pensado para seu corpo, dia a dia e preferências.
          </Item>
          <Item>
            <b>Acompanhamento inteligente</b> — gráficos, diário alimentar, registros do seu progresso e comparativos de evolução no app.
          </Item>
          <Item>
            <b>Lembretes automáticos</b> — notificações para beber água, preparar refeições e manter a disciplina com leveza.
          </Item>
          <Item>
            <b>Receitas práticas</b> — ideias rápidas, fáceis e adaptáveis, que mostram que comer bem pode ser simples.
          </Item>
          <Item>
            <b>Resultados sustentáveis</b> — saúde, estética e performance com equilíbrio, sem dietas malucas.
          </Item>
        </SimpleGrid>

        {/* CTA */}
        <Box textAlign="center" mt={14}>
          <Text fontSize="xl" fontWeight="semibold" color="brand.petrol" mb={3}>
            Tudo isso reunido em um aplicativo exclusivo para você.
          </Text>
          <Text fontSize="md" color="gray.600" mb={8}>
            Acompanhe cada etapa, tire dúvidas diretamente comigo e receba ajustes sempre que precisar.
          </Text>

          <Button
            as="a"
            href="https://wa.me/5599999999999" // 👈 substitua pelo número correto
            size="lg"
            bg="brand.orange"
            color="white"
            _hover={{ bg: "orange.600" }}
          >
            Falar no WhatsApp agora 🚀
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
