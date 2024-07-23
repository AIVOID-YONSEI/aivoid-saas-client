import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { PropsWithChildren } from 'react';
import Logo from '../assets/logo.png';

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <Stack minHeight={'100vh'} flexDirection={'column'} alignItems={'stretch'} minWidth={'1000px'}>
      <AppBar position="fixed" color="default" sx={{ backdropFilter: 'blur(50px)', backgroundColor: 'rgba(0, 0, 0 , 0.3)', height: '64px', width: '100%', minWidth: '1000px', left: 0 }} elevation={0}>
        <Toolbar sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" alignItems={'center'} spacing={2}>
            <Link to={'/'}>
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <img src={Logo} alt="logo" width={40} />
                <Typography color={'white'} fontSize={'20px'} fontWeight={700}>
                  AI VOID
                </Typography>
              </Stack>
            </Link>
            {['기업용 서비스', '개인용 서비스', '요금제 안내', '고객 리뷰'].map((text, index) => (
              <Link key={index} href={'#'}>
                <Typography color={'white'} fontSize={'16px'} fontWeight={400} px={2} py={1}>
                  {text}
                </Typography>
              </Link>
            ))}
          </Stack>
          <Stack direction={'row'}>
            <Link href={'/login'}>
              <Typography color={'white'} fontSize={'16px'} px={2} py={1}>
                로그인
              </Typography>
            </Link>
            <Link href={'/signup'}>
              <Button sx={{ borderRadius: '40px', bgcolor: '#a07bec', color: 'white', ':hover': { bgcolor: '#a076ec' }, px: 2 }}>도입 문의</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box flexGrow={1} display={'flex'} flexDirection={'column'} alignItems={'stretch'}>
        {children}
      </Box>
    </Stack>
  );
}
