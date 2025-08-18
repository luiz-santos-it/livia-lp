import { Box, Container, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";

const testimonials = [
  { src: "/relato1.jpg", alt: "Depoimento 1" },
  { src: "/relato2.png", alt: "Depoimento 2" },
  { src: "/relato3.png", alt: "Depoimento 3" },
];

export default function Testimonials() {
  return (
    <Box as="section" bg="gray.50" py={{ base: 12, md: 16 }}>
      <Container maxW="6xl">
        <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.petrol">
          Resultados que falam por si
        </Heading>

        <Text fontSize="lg" textAlign="center" color="gray.700" mb={12} maxW="2xl" mx="auto">
          Veja alguns relatos de quem já está vivendo os resultados na prática.  
          Histórias reais, direto do WhatsApp e Instagram.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {testimonials.map((t, i) => (
            <Box
              key={i}
              borderRadius="xl"
              overflow="hidden"
              shadow="md"
              bg="white"
              p={2}
            >
              {/* Moldura de celular */}
              <Box
                border="2px solid"
                borderColor="gray.200"
                borderRadius="2xl"
                overflow="hidden"
              >
                <Image src={t.src} alt={t.alt} w="100%" objectFit="cover" />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
