import { Box, Button, Container, Stack, Typography } from '@mui/material';
import BannerVideo from '../assets/banner-video.mp4';
import { IoIosArrowRoundForward } from 'react-icons/io';

export function IndexSectionNo1() {
  return (
    <Box bgcolor={'black'} display={'flex'} alignItems={'center'} height={'100vh'} position={'relative'} minWidth={'1000px'}>
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack>
          <Typography color={'white'} fontSize={'24px'} lineHeight={'normal'} fontWeight={100} sx={{ opacity: 0.6 }}>
            Artificial Intelligence VOIce Detector
          </Typography>
          <Typography color={'white'} fontSize={'24px'} lineHeight={'normal'} fontWeight={100} sx={{ opacity: 0.6 }}>
            지금, 당신의 목소리는 안전한가요?
          </Typography>
        </Stack>
        <Stack mt={5}>
          <Typography fontSize={'64px'} fontWeight={700} color={'white'} lineHeight={1.2}>
            AI VOID.
          </Typography>
          <Typography fontSize={'64px'} fontWeight={700} color={'white'} lineHeight={1.2}>
            가장 신뢰할 수 있는 선택
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={8} mt={10}>
          <Button variant="contained" size="large" sx={{ borderRadius: '40px', bgcolor: '#a07bec', color: 'white', ':hover': { bgcolor: '#a076ec' }, px: 2.5 }}>
            <Stack direction="row" alignItems="center" justifyContent={'space-between'} width={'100%'} spacing={1}>
              <Typography>More</Typography>
              <IoIosArrowRoundForward size={24} />
            </Stack>
          </Button>
        </Stack>
      </Container>
      <Box
        position={'absolute'}
        top={0}
        left={0}
        right={0}
        bottom={0}
        height={'100%'}
        sx={{
          ':before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.6)',
          },
        }}
      >
        <Box component={'video'} autoPlay loop muted playsInline data-keepplaying sx={{ objectFit: 'cover' }} height={'100%'} width={'100%'}>
          <Box component={'source'} src={BannerVideo} />
        </Box>
      </Box>
    </Box>
  );
}
