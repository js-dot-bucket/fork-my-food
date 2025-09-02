import {
  Outlet,
  Scripts,
} from "react-router";
import "./root.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/favicon.jpg"/>
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
