import { Box, Container, Heading, SimpleGrid, Text, Stack } from "@chakra-ui/react";

const Card = ({ quote, name }: { quote: string; name: string }) => (
  <Stack bg="white" p={6} rounded="xl" shadow="md" spacing={3} role="figure">
    <Text fontSize="lg">"{quote}"</Text>
    <Text fontWeight="700" color="brand.petrol">{name}</Text>
  </Stack>
);

export default function Testimonials(){
  return (
    <Box as="section" py={{ base: 10, md: 14 }}>
      <Container maxW="6xl">
        <Heading as="h2" size="xl" mb={8} color="brand.petrol">Depoimentos</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Card quote="Em 3 meses voltei a treinar com energia — e sem dietas malucas." name="Marina F."/>
          <Card quote="Plano prático, acompanhamento de perto e resultado visível." name="Paulo S."/>
          <Card quote="Nutri atenciosa, método que funciona e melhora da autoestima!" name="Ana C."/>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
