import { Box, Container, Heading, SimpleGrid, HStack, Icon, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Item = ({ children }: { children: React.ReactNode }) => (
  <HStack align="start" spacing={4}>
    <Icon as={CheckCircleIcon} color="brand.petrol" boxSize={6} aria-hidden="true"/>
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
