import { Box, Container, Heading, SimpleGrid, HStack, Text } from "@chakra-ui/react";

const CheckIcon = () => (
  <Box as="span" aria-hidden="true">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#255D57" strokeWidth="2" />
      <path d="M7 12l3 3 7-7" stroke="#255D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </Box>
);

const Item = ({ children }: { children: React.ReactNode }) => (
  <HStack align="start" spacing={4}>
    <CheckIcon />
    <Text fontSize="lg">{children}</Text>
  </HStack>
);

export default function Benefits(){
  return (
    <Box as="section" bg="white" py={{ base: 10, md: 14 }}>
      <Container maxW="6xl">
        <Heading as="h2" size="xl" mb={8} color="brand.petrol">Como posso ajudar?</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Item><b>Plano alimentar personalizado</b> — focado nas suas necessidades e objetivos.</Item>
          <Item><b>Acompanhamento próximo</b> — suporte contínuo para motivação e ajustes.</Item>
          <Item><b>Resultado sustentável</b> — mudanças reais que cabem na sua rotina.</Item>
          <Item><b>Saúde + estética + performance</b> — abordagem integrativa para seu bem-estar.</Item>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
