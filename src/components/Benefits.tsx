import { Box, Container, Heading, SimpleGrid, HStack, Text } from "@chakra-ui/react";

const AppIcon = () => (
  <Box as="span" aria-hidden="true">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="2" stroke="#255D57" strokeWidth="2" />
      <circle cx="12" cy="18" r="1" fill="#255D57" />
    </svg>
  </Box>
);

const Item = ({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) => (
  <HStack align="start" spacing={4}>
    {icon || <AppIcon />}
    <Text fontSize="lg">{children}</Text>
  </HStack>
);

export default function Benefits(){
  return (
    <Box as="section" bg="white" py={{ base: 10, md: 14 }}>
      <Container maxW="6xl">
        <Heading as="h2" size="xl" mb={8} color="brand.petrol">
          Como posso te ajudar?
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>

          <Item>
            <b>Plano alimentar exclusivo</b> — nada de copiar cardápios prontos: você terá um plano feito para o seu corpo, rotina e objetivos, disponível sempre no seu celular.
          </Item>

          <Item>
            <b>Suporte próximo</b> — tire dúvidas a qualquer momento e receba ajustes sem esperar até a próxima consulta.
          </Item>

          <Item>
            <b>Acompanhamento inteligente</b> — gráficos, diário alimentar e registros do seu dia a dia para ver sua evolução de verdade.
          </Item>

          <Item>
            <b>Lembretes automáticos</b> — avisos para beber água, preparar refeições e manter a disciplina sem esforço.
          </Item>

          <Item>
            <b>Receitas práticas</b> — sugestões fáceis, rápidas e adaptáveis, que mostram que é possível comer bem sem complicação.
          </Item>

          <Item>
            <b>Resultados sustentáveis</b> — estética, saúde e performance sem cair em dietas da moda que nunca funcionam.
          </Item>

        </SimpleGrid>

        {/* Suspense + mini CTA */}
        <Box textAlign="center" mt={10}>
          <Text fontSize="xl" fontWeight="semibold" color="brand.petrol">
            E o melhor: tudo isso na palma da sua mão, em um aplicativo exclusivo para você.
          </Text>
          <Text fontSize="md" color="gray.600" mt={2}>
            Assim fica fácil seguir, acompanhar e transformar sua rotina.
          </Text>
        </Box>

      </Container>
    </Box>
  );
}
