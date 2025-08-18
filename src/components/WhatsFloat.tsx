import { IconButton } from "@chakra-ui/react";
import { WHATS_LINK } from "../constants";

export default function WhatsFloat() {
  return (
    <IconButton
      as="a" href={WHATS_LINK} target="_blank" rel="noopener"
      aria-label="Abrir WhatsApp"
      position="fixed" right="22px" bottom="22px" zIndex="tooltip"
      size="lg" rounded="full"
      bg="brand.whats" color="white" _hover={{ bg: "#20bd5a" }}
      icon={(
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20 3.9A10 10 0 0 0 3.9 20L3 23l3-.9A10 10 0 1 0 20 3.9zm-8 16a8 8 0 1 1 6.12-2.88l.38.22-.45 1.67-1.72-.45-.2-.12A8 8 0 0 1 12 19.9z"/>
          <path d="M16.6 13.9c-.2-.1-1.2-.6-1.3-.7s-.3-.1-.5.1-.6.7-.7.8-.3.1-.5 0c-.2-.1-.9-.3-1.7-1-.6-.6-1-1.3-1.1-1.5-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3s.1-.2 0-.4-.5-1.2-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.1.9 2.2c.1.2 1.6 2.5 3.9 3.4.5.2.9.3 1.2.4.5.1 1 .1 1.3.1.4 0 1.2-.4 1.3-.9.2-.5.2-1 .2-1.1s-.1-.1-.3-.2z"/>
        </svg>
      )}
    />
  );
}
