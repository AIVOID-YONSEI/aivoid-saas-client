import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router';
import { css, Global } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material';

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html,
  body {
    height: 100%;
    font-family: Pretendard, sans-serif;
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

const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard, sans-serif',
  },
});

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <ScrollRestoration />
      <Outlet />
    </ThemeProvider>
  ),
});
