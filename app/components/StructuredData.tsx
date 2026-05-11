export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ducle.studio/#org",
        name: "DucLe Portfolio",
        url: "https://ducle.studio",
        logo: "https://ducle.studio/icon",
        sameAs: [
          "https://instagram.com/duclestudio",
          "https://are.na/ducle",
          "https://read.cv/ducle",
        ],
        description:
          "Independent design & development studio crafting bold brands, websites and digital products.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "44 Lý Quốc Sư",
          addressLocality: "Hoàn Kiếm",
          addressRegion: "Hà Nội",
          addressCountry: "VN",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://ducle.studio/#website",
        url: "https://ducle.studio",
        name: "DucLe Portfolio",
        publisher: { "@id": "https://ducle.studio/#org" },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
