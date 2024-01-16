import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FindYou</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/Stylesheet/error_style.css" />
        <link rel="stylesheet" href="/Stylesheet/nav_style.css" />
        <link rel="stylesheet" href="/Stylesheet/home_styles.css" />
        <link rel="stylesheet" href="/Stylesheet/user_style.css" />
        <link rel="stylesheet" href="/Stylesheet/search_style.css" />
        <link rel="stylesheet" href="/Stylesheet/login_style.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
