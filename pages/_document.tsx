import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"ru"}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body id="lock">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
