import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router';
import { css, Global } from '@emotion/react';

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export const Route = createRootRoute({
  component: () => (
    <>
      <Global styles={globalStyle} />
      <ScrollRestoration />
      <Outlet />
    </>
  ),
});
