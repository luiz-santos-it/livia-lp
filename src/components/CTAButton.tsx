import { Button, type ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CTAButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

const MotionButton = motion(Button);

export function CTAButton({
  children,
  variant = "primary",
  ...props
}: CTAButtonProps) {
  let styles: ButtonProps = {};

  switch (variant) {
    case "primary":
      styles = {
        bgGradient: "linear(to-r, orange.500, red.400)",
        color: "white",
        borderRadius: "full",
        px: 8,
        fontWeight: "bold",
        shadow: "lg",
        _hover: {
          bgGradient: "linear(to-r, orange.600, red.500)",
          transform: "scale(1.05)",
          shadow: "xl",
        },
        _active: { transform: "scale(0.97)" },
      };
      break;

    case "secondary":
        styles = {
            bgGradient: "linear(to-r, teal.400, green.400)", // gradiente moderno
            color: "white",
            borderRadius: "full",
            px: 7,
            fontWeight: "semibold",
            shadow: "md",
            _hover: {
            bgGradient: "linear(to-r, teal.500, green.500)",
            transform: "scale(1.05)",
            shadow: "xl",
            },
            _active: { transform: "scale(0.97)" },
        };
        break;


    case "outline":
      styles = {
        variant: "outline",
        borderRadius: "full",
        px: 6,
        color: "orange.500",
        borderColor: "orange.400",
        fontWeight: "semibold",
        _hover: {
          bg: "orange.50",
          borderColor: "orange.500",
          transform: "scale(1.05)",
        },
        _active: { transform: "scale(0.97)" },
      };
      break;

    default:
      styles = {};
  }

  return (
    <MotionButton
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      size="lg"
      {...styles}
      {...props}
    >
      {children}
    </MotionButton>
  );
}
