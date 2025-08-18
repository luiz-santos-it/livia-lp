export const trackWhatsClick = (where: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "whatsapp_click", { where });
  }
};
