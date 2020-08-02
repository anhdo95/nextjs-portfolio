import Document, { Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <html lang="vi">
        <Head>
          <title>Next Portfolio</title>
          <meta name="description" content="A site for programming portfolio" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <meta name="robots" content="noindex, nofollow" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        <style global jsx>{`
          body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            font-size: 110%;
            font-weight: 100;
            color: #333;
          }
        `}</style>
      </html>
    )
  }
}
