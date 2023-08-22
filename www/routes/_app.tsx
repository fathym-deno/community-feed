import { AppProps } from "$fresh/server.ts";
import { Action, BasicLayout, Footer, Header } from "@atomic/design";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>www</title>
      </head>
      <body>
        <BasicLayout
          class="bg-slate-700"
          header={
            <Header
              logo={<h2 class="text-white mx-5">Fathym</h2>}
              nav={
                <>
                  {
                    /* {isSignedIn
                    ? ( */
                  }
                  <Action
                    id="sign-in-button"
                    href="/oauth/signout"
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Sign Out
                  </Action>
                  {
                    /* )
                    : (
                      <Action
                        id="sign-in-button"
                        href="/oauth/signin/github"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Sign In
                      </Action>
                    )} */
                  }
                </>
              }
              class="bg-blue-500"
            />
          }
          footer={<Footer />}
        >
          <Component />
        </BasicLayout>
      </body>
    </html>
  );
}
