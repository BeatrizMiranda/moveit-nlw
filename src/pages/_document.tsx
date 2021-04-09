import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta name="theme-color" content="#4cd62b" />
          <meta
            name="description"
            content="Take breaks while you working to do some simple exercises to maintain your health"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
