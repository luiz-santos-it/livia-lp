import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { COLORS } from "./constants/general";

const config: ThemeConfig = { initialColorMode: "light", useSystemColorMode: false };

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Poppins', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    body: "'Lato', system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: COLORS.cream,
        color: COLORS.text,
        scrollBehavior: "smooth"
      },
      "*:focus-visible": { outline: "3px solid rgba(37,93,87,.35)", outlineOffset: "2px" }
    }
  },
  colors: {
    brand: {
      petrol: COLORS.petrol,
      orange: COLORS.orange,
      cream: COLORS.cream,
      whats: COLORS.whats
    }
  },
  components: {
    Button: {
      baseStyle: { borderRadius: "12px" },
      variants: {
        solid: ({ colorScheme }: any) => ({
          ...(colorScheme === "orange" && { bg: COLORS.orange, color: "#111", _hover: { bg: "#e66e00" } }),
          ...(colorScheme === "petrol" && { bg: COLORS.petrol, color: "#fff", _hover: { bg: "#1f4d48" } }),
          ...(colorScheme === "whats" && { bg: COLORS.whats, color: "#fff", _hover: { bg: "#20bd5a" } })
        })
      }
    }
  }
});

export default theme;
