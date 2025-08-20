import { Button, type ButtonProps } from "@chakra-ui/react";

interface CTAButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function CTAButton({ children, variant = "primary", ...props }: CTAButtonProps) {
  let styles = {};

  switch (variant) {
    case "primary":
      styles = {
        bg: "orange.500",
        color: "white",
        borderRadius: "md", // levemente arredondado
        _hover: { bg: "orange.600" },
      };
      break;

    case "secondary":
      styles = {
        bg: "teal.500",
        color: "white",
        borderRadius: "full", // estilo pílula
        px: 6,
        _hover: { bg: "teal.600" },
      };
      break;

    case "outline":
      styles = {
        variant: "outline",
        color: "orange.500",
        borderColor: "orange.500",
        borderRadius: "md",
        _hover: { bg: "orange.50" },
      };
      break;

    default:
      styles = {};
  }

  return (
    <Button size="lg" {...styles} {...props}>
      {children}
    </Button>
  );
}
