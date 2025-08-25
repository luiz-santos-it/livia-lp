import { HStack, Text, Box } from "@chakra-ui/react";
import { COLORS } from "../constants/general";

type Props = {
  size?: number;
};

export default function Logo({ size = 64 }: Props) {
  return (
    <HStack
      as="a"
      href="#top"
      spacing={3}
      cursor="pointer"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <Box w={`${size}px`} h={`${size}px`}>
        <svg width={size} height={size} viewBox="0 0 100 100">
          {/* Círculo moderno */}
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke={COLORS.petrol}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="240"
            strokeDashoffset="60"
          />

          {/* Monograma */}
          <text
            x="38"
            y="57"
            textAnchor="middle"
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            fontSize="28"
            fill={COLORS.orange}
          >
            L
          </text>
          <text
            x="64"
            y="57"
            textAnchor="middle"
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            fontSize="28"
            fill={COLORS.petrol}
          >
            A
          </text>
        </svg>
      </Box>

      {/* Nome + tagline */}
      <Text
        fontFamily="Poppins"
        fontWeight="700"
        fontSize="lg"
        color={COLORS.orange}
      >
        Livia Anjos
      </Text>
      <Text
        fontFamily="Lato"
        fontSize="sm"
        color={COLORS.petrol}
        letterSpacing="0.18em"
      >
        NUTRICIONISTA
      </Text>
    </HStack>
  );
}
