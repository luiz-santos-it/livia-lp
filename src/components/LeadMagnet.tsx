// Sugestão de componente LeadMagnet.tsx
import { Box, Heading, Text, Input, Button, Stack } from "@chakra-ui/react";

export default function LeadMagnet() {
  return (
    <Box bg="brand.orange" color="white" py={10} px={6} borderRadius="2xl" textAlign="center" my={12}>
      <Heading size="lg" mb={3}>Receba um cardápio exclusivo grátis!</Heading>
      <Text mb={6}>Deixe seu nome e e-mail para receber dicas práticas e um cardápio de exemplo do Método NutriPódio.</Text>
      <Stack direction={{ base: "column", md: "row" }} spacing={3} justify="center">
        <Input placeholder="Seu nome" bg="white" color="black" />
        <Input placeholder="Seu melhor e-mail" bg="white" color="black" />
        <Button colorScheme="petrol">Quero meu cardápio</Button>
      </Stack>
      <Text fontSize="sm" mt={3}>Ou fale direto no WhatsApp!</Text>
    </Box>
  );
}