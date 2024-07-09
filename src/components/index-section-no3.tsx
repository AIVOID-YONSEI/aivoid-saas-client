import { Box, Container, Stack, Typography } from '@mui/material';
import { FULLPAGE_SECTION_CLASS } from '../lib/constants';
import AudiioSeal from '../assets/audio-seal.png';

export function IndexSectionNo3() {
  return (
    <Box className={FULLPAGE_SECTION_CLASS} bgcolor={'grey.800'}>
      <Container>
        <Typography fontWeight={700} fontSize={'64px'} lineHeight={'normal'} color={'white'}>
          <Typography color="grey.A400" component={'strong'} fontSize={'64px'} lineHeight={'normal'}>
            Solution.
          </Typography>
          <br />
          딥보이스 피해 방지 기술
          <br /> AI VOID
        </Typography>
        <Stack direction={'row'} spacing={8} mt={4}>
          <Box overflow={'hidden'} borderRadius={'20px'} maxWidth={'600px'} width={'50%'} display={'flex'}>
            <Box component={'img'} src={AudiioSeal} />
          </Box>
          <Stack spacing={2} width={'50%'}>
            <Typography fontSize={'24px'} color={'white'}>
              PatchCraft 기술을 통한 딥보이스 탐지 AI
            </Typography>
            <Typography fontSize={'24px'} color={'white'}>
              워터마크 기술을 활용한 딥보이스 구분 기술
            </Typography>
            <Typography fontSize={'24px'} color={'white'}>
              B2B/B2C 맞춤형 솔루션 제공
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
