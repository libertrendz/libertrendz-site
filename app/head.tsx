// app/head.tsx
export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#0e3258" />

      {/* Favicons (arquivos estão em /public/images/) */}
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      {/* fallback para browsers que pedem shortcut icon */}
      <link rel="shortcut icon" href="/images/favicon-32x32.png" />

      {/* Apple / Android icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon-180x180.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-touch-icon-72x72.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph fallback */}
      <meta property="og:image" content="/images/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
