import Image from "next/image";

// theme.config.js
export default {
    projectLink: 'https://github.com/shuding/nextra', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', // base URL for the docs repository
    titleSuffix: ' – Deep Commerce Solutions',
    nextLinks: true,
    prevLinks: true,
    search: false,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: false,
    footerText: `Hecho con amor por Poa`,
    footerEditLink: ``,
    logo: (
      <>
        <Image src="/logo.png" width={150} height={50} alt="logo-balloon-group" /> 
      </>
    ),
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Balloon Group" />
        <meta name="og:title" content="Deep Commerce solutions" />
      </>
    ),
  }