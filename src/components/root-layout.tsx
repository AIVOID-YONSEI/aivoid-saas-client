import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { PropsWithChildren } from 'react';
import { Logo } from './vectors/logo';

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <Stack minHeight={'100vh'} flexDirection={'column'} alignItems={'stretch'}>
      <AppBar position="fixed" color="default" sx={{ backdropFilter: 'blur(50px)', backgroundColor: 'rgba(0, 0, 0 , 0.1)', height: '64px' }} elevation={0}>
        <Toolbar>
          <Link to={'/'}>
            <Logo />
          </Link>
        </Toolbar>
      </AppBar>
      <Box flexGrow={1} display={'flex'} flexDirection={'column'} alignItems={'stretch'}>
        {children}
      </Box>
    </Stack>
  );
}
