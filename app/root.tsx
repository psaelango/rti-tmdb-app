import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ErrorHanlder } from "./components/ErrorHandler";

import stylesheet from "./tailwind.css";
import NavBar from "./components/NavBar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function ErrorBoundary() {
  return <ErrorHanlder />;
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
      </head>
      <body>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-16">
          <NavBar />
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
