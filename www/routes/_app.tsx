import { AppProps } from "$fresh/server.ts";
import { BasicLayout, Footer } from "@atomic/design";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>www</title>
      </head>
      <body>
        <BasicLayout class="bg-slate-700" footer={<Footer />}>
          <Component />
        </BasicLayout>
      </body>
    </html>
  );
}
