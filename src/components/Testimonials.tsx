import {
  Box,
  Container,
  Heading,
  Text,
  IconButton,
  useBreakpointValue,
  Image,
  Button,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// ** NÃO esqueça de importar os estilos abaixo **
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { src: "/relato1.jpg", alt: "Depoimento 1" },
  { src: "/relato2.png", alt: "Depoimento 2" },
  { src: "/relato3.png", alt: "Depoimento 3" },
  { src: "/relato4.png", alt: "Depoimento 4" },
  { src: "/relato5.png", alt: "Depoimento 5" },
];

export default function Testimonials() {
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box as="section" bg="gray.50" py={{ base: 12, md: 16 }}>
      <Container maxW="6xl" position="relative">
        {/* Título */}
        <Heading
          as="h2"
          size="xl"
          mb={6}
          textAlign="center"
          color="brand.petrol"
        >
          Resultados que falam por si
        </Heading>

        {/* Texto de apoio */}
        <Text
          fontSize="lg"
          textAlign="center"
          color="gray.700"
          mb={12}
          maxW="2xl"
          mx="auto"
        >
          Histórias reais de pessoas que decidiram mudar seus hábitos e hoje já
          colhem os benefícios. Inspirações para mostrar que você também pode
          conquistar seus objetivos.
        </Text>

        {/* Slider */}
        <Slider key={slidesToShow} {...settings}>
          {testimonials.map((t, i) => (
            <Box key={i} px={2} h="auto">
              <Box
                borderRadius="xl"
                shadow="md"
                bg="white"
                p={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  w="100%"
                  maxH="500px"
                  objectFit="contain"
                  display="block"
                  mx="auto"
                  bg="white"
                  borderRadius="lg"
                />
              </Box>
            </Box>
          ))}
        </Slider>

        {/* CTA final */}
        <Box textAlign="center" mt={12}>
          <Text fontSize="lg" mb={4} color="gray.800" fontWeight="semibold">
            Agora é a sua vez de transformar sua rotina!
          </Text>
          <Button
            size="lg"
            colorScheme="orange"
            px={8}
            borderRadius="full"
            shadow="md"
          >
            Quero começar hoje mesmo
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

/* Custom arrows */
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Próximo"
      icon={<ChevronRightIcon boxSize={6} />}
      onClick={onClick}
      position="absolute"
      right="0"
      top="50%"
      transform="translateY(-50%)"
      borderRadius="full"
      bg="white"
      shadow="md"
      zIndex={2}
      _hover={{ bg: "gray.100" }}
    />
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Anterior"
      icon={<ChevronLeftIcon boxSize={6} />}
      onClick={onClick}
      position="absolute"
      left="0"
      top="50%"
      transform="translateY(-50%)"
      borderRadius="full"
      bg="white"
      shadow="md"
      zIndex={2}
      _hover={{ bg: "gray.100" }}
    />
  );
}
