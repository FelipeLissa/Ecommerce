import Document, {
   DocumentContext,
   DocumentInitialProps,
   Head,
   Html,
   Main,
   NextScript,
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
   static async getInitialProps(
      ctx: DocumentContext
   ): Promise<DocumentInitialProps> {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: (App) => (props) =>
                  sheet.collectStyles(<App {...props} />),
            });

         const initialProps = await Document.getInitialProps(ctx);
         return {
            ...initialProps,
            styles:
               ((
                  <>
                     {initialProps.styles}
                     {sheet.getStyleElement()}
                  </>
               ),
               React.Children.toArray([initialProps.styles])),
         };
      } finally {
         sheet.seal();
      }
   }

   render() {
      return (
         <Html lang="pt-br">
            <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
               <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
               />
               <link
                  rel="stylesheet"
                  href="https://use.typekit.net/fhm0aky.css"
               ></link>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin="true"
               />
               <link
                  href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@200&family=Montserrat:wght@300;400;500;600;700&display=swap"
                  rel="stylesheet"
               />
               <link
                  rel="stylesheet"
                  href="https://use.typekit.net/idx8qgv.css"
               ></link>
               <link
                  rel="preconnect"
                  href="https://fonts.googleapis.com"
               ></link>
               <link rel="preconnect" href="https://fonts.gstatic.com"></link>
               <link
                  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&family=Montserrat:wght@300;400;500;600;700&display=swap"
                  rel="stylesheet"
               ></link>
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
