import { HStack, Text, Box } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";  // ícone de folha seguro
import { COLORS } from "../constants";

export default function Logo() {
  return (
    <HStack spacing={3}>
      <Box position="relative" w="64px" h="64px">
        {/* Círculo */}
        <svg width="64" height="64" viewBox="0 0 100 100">
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

        {/* Folha sobreposta */}
        <Box
          position="absolute"
          left="46%"
          top="32%"
          color={COLORS.green}
        >
          <FaLeaf size={18} />
        </Box>
      </Box>

      <Text fontFamily="Poppins" fontWeight="700" fontSize="lg" color={COLORS.orange}>
        Livia Anjos
      </Text>
      <Text fontFamily="Lato" fontSize="sm" color={COLORS.petrol} letterSpacing="0.18em">
        NUTRICIONISTA
      </Text>
    </HStack>
  );
}
