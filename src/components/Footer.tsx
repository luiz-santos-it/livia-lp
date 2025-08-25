import { Box, Container, HStack, Text, Link } from "@chakra-ui/react";
import { INSTAGRAM_LINK } from "../constants";
import Logo from "./Logo";

export default function Footer(){
  return (
    <Box as="footer" bg="white" py={8}>
      <Container maxW="6xl">
        <HStack justify="space-between" align="center" flexDir={{ base: "column", md: "row" }} gap={4}>
          <Logo withName={false} />
          <Text textAlign="center">Atendimento presencial em Salvador e Baixo Sul (ex.: Ituberá). Online para todo o mundo.</Text>
          <HStack>
            <Link href={INSTAGRAM_LINK} target="_blank" rel="noopener" color="brand.petrol" fontWeight="700">
              @nutrianjoos
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
