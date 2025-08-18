import { HStack, Text, Box } from "@chakra-ui/react";
import { COLORS } from "../constants";

type Props = { withName?: boolean; size?: number };

export default function Logo({ withName = true, size = 40 }: Props) {
  return (
    <HStack spacing={3}>
      <Box as="span" aria-hidden="true">
        <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Monograma LA">
          <circle cx="32" cy="32" r="30" fill="none" stroke={COLORS.petrol} strokeWidth="4"/>
          <text x="20" y="39" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="22" fill={COLORS.petrol}>L</text>
          <text x="32" y="39" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="22" fill={COLORS.petrol}>A</text>
          {/* Folha minimal – não sobrepõe o A */}
          <path d="M46 23c-4 2-7 7-7 11 4 0 8-2 11-7 2-4 1-7 1-7s-3 0-5 3z"
                fill="none" stroke={COLORS.petrol} strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </Box>
      {withName && (
        <HStack spacing={2} align="baseline">
          <Text as="span" fontFamily="Poppins" fontWeight="700" fontSize="xl" color={COLORS.orange}>
            Livia Anjos
          </Text>
          <Text as="span" fontFamily="Lato" fontSize="sm" color={COLORS.petrol} letterSpacing="0.18em">
            NUTRICIONISTA
          </Text>
        </HStack>
      )}
    </HStack>
  );
}
