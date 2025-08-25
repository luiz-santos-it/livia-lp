import type { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { INSTAGRAM_LINK, CRN } from "../constants/general";

type Props = { children: ReactNode };

const Seo = ({ children }: Props) => (
  <HelmetProvider>
    <Helmet>
      <title>Livia Anjos • Nutricionista Esportiva e Clínica</title>
      <meta name="description" content="Nutrição além do prato: saúde, estética e performance. Consultas online (global) e presenciais em Salvador e Baixo Sul. Agende pelo WhatsApp."/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Livia Anjos • Nutricionista"/>
      <meta property="og:description" content="Saúde, estética e performance com atendimento online e presencial."/>
      <meta property="og:image" content="og.jpg"/>
      <meta property="og:locale" content="pt_BR"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Livia Anjos - Nutricionista",
          medicalSpecialty: ["Nutrition","SportsMedicine"],
          identifier: { "@type": "PropertyValue", propertyID: "CRN", value: CRN },
          areaServed: ["Online (Global)","Salvador-BA","Baixo Sul-BA"],
          sameAs: [INSTAGRAM_LINK]
        })}
      </script>
    </Helmet>
    {children}
  </HelmetProvider>
);

export default Seo;
