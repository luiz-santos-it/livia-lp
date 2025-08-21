import { HStack, Text, Box } from "@chakra-ui/react";
import { COLORS } from "../constants";

type Props = { withName?: boolean; size?: number };

export default function Logo({ withName = true, size = 56 }: Props) {
  return (
    <HStack spacing={3}>
      {/* Ícone */}
      <Box as="span" aria-hidden="true">
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          role="img"
          aria-label="Logo Livia Anjos"
        >
          {/* Círculo aberto e moderno */}
          <path
            d="M32 2a30 30 0 1 1-21 9"
            stroke={COLORS.petrol}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Monograma LA mais centralizado */}
          <text
            x="50%"
            y="52%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            fontSize="22"
            fill={COLORS.petrol}
          >
            LA
          </text>

          {/* Folha moderna com nervuras */}
          <g transform="translate(42,20) scale(0.8)">
            {/* contorno da folha */}
            <path
              d="M0 0 C6 4, 6 12, 0 16 C-6 12, -6 4, 0 0 Z"
              fill={COLORS.green}
            />
            {/* nervura central */}
            <path
              d="M0 0 L0 16"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* nervuras laterais */}
            <path
              d="M0 6 C2 7, 3 9, 3 11"
              stroke="white"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0 6 C-2 7, -3 9, -3 11"
              stroke="white"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </Box>

      {/* Nome + Tagline */}
      {withName && (
        <HStack spacing={2} align="baseline">
          <Text
            as="span"
            fontFamily="Poppins"
            fontWeight="700"
            fontSize="lg"
            color={COLORS.orange}
          >
            Livia Anjos
          </Text>
          <Text
            as="span"
            fontFamily="Lato"
            fontSize="sm"
            color={COLORS.petrol}
            letterSpacing="0.18em"
          >
            NUTRICIONISTA
          </Text>
        </HStack>
      )}
    </HStack>
  );
}
