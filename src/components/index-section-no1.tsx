import { Box, Button, Stack, Typography } from '@mui/material';
import { FULLPAGE_SECTION_CLASS } from '../lib/constants';
import BannerVideo from '../assets/banner-video.mp4';

export function IndexSectionNo1({ onClickGoDown }: { onClickGoDown: () => void }) {
  return (
    <Box className={FULLPAGE_SECTION_CLASS} bgcolor={'black'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Stack position={'relative'} zIndex={1} spacing={8}>
        <Stack>
          <Typography color={'white'} fontSize={'160px'} fontWeight={700} textAlign={'center'} lineHeight={'normal'}>
            AI VOID
          </Typography>
          <Typography color={'grey.A400'} fontSize={'40px'}>
            <Typography component={'strong'} fontSize={'48px'} fontWeight={600} color={'white'}>
              A
            </Typography>
            ritificial{' '}
            <Typography component={'strong'} fontSize={'48px'} fontWeight={600} color={'white'}>
              I
            </Typography>
            ntelligence{' '}
            <Typography component={'strong'} fontSize={'48px'} fontWeight={600} color={'white'}>
              VOI
            </Typography>
            ce{' '}
            <Typography component={'strong'} fontSize={'48px'} fontWeight={600} color={'white'}>
              D
            </Typography>
            etector
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography fontSize={'36px'} fontWeight={700} color={'white'} textAlign={'center'}>
            지금, 당신의 목소리는 안전하신가요?
          </Typography>
          <Button variant="contained" size="large" sx={{ borderRadius: '20px', fontSize: '24px', bgcolor: 'white', ':hover': { bgcolor: 'white' }, color: 'black', fontWeight: 700 }} onClick={onClickGoDown}>
            내 목소리 지키러가기
          </Button>
        </Stack>
      </Stack>
      <Box position={'absolute'} top={0} left={0} right={0} bottom={0} height={'100%'}>
        <Box component={'video'} autoPlay loop muted playsInline data-keepplaying sx={{ objectFit: 'cover' }} height={'100%'} width={'100%'}>
          <Box component={'source'} src={BannerVideo} />
        </Box>
      </Box>
    </Box>
  );
}
