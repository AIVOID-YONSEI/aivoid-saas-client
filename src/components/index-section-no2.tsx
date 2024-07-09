import { FULLPAGE_SECTION_CLASS } from '../lib/constants';
import { Box, Container, Stack, Typography } from '@mui/material';
import FakeNews1 from '../assets/fake-news-1.jpg';

export function IndexSectionNo2() {
  return (
    <Box className={FULLPAGE_SECTION_CLASS} bgcolor={'rgb(23, 23, 23)'}>
      <Container>
        <Typography fontWeight={700} fontSize={'64px'} lineHeight={'normal'} color={'white'}>
          <Typography color="grey.A400" component={'strong'} fontSize={'64px'} lineHeight={'normal'}>
            Problem.
          </Typography>
          <br />
          해마다 늘어나는 딥보이스 범죄
        </Typography>
        <Stack direction={'row'} pt={4} spacing={8}>
          <Box overflow={'hidden'} borderRadius={'20px'} maxWidth={'600px'} width={'50%'}>
            <Box component={'img'} src={FakeNews1} />
          </Box>
          <Stack spacing={2} width={'50%'}>
            <Typography fontSize={'24px'} color={'white'}>
              텍스트가 들어갑니다.
            </Typography>
            <Typography fontSize={'24px'} color={'white'}>
              텍스트가 들어갑니다.
            </Typography>
            <Typography fontSize={'24px'} color={'white'}>
              텍스트가 들어갑니다.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
