import { Box, Container, Stack, Typography } from '@mui/material';
import PlatformImage from '../assets/platform-image.png';

export function IndexSectionNo3() {
  return (
    <Box height={'100vh'} display={'flex'} alignItems={'center'} minWidth={'1000px'}>
      <Container>
        <Stack direction={'row'} spacing={4}>
          <Stack spacing={4} width={'50%'} justifyContent={'center'}>
            <Typography fontWeight={700} fontSize={'52px'} lineHeight={'normal'}>
              믿을 수 있는{' '}
              <Typography component={'span'} color={'#4c93ff'} fontSize={'inherit'} fontWeight={'inherit'}>
                플랫폼.
              </Typography>
              <br />
              AI VOID로부터
            </Typography>
            <Typography sx={{ wordBreak: 'keep-all' }} fontSize={'20px'}>
              AI VOID는 워터마크와 딥러닝 기술을 활용하여,
              <br />
              인공지능이 생성한 음성과 실제 인간의 음성을 정확하게 구분하는 혁신적인 서비스입니다.
              <br />
              <Typography component={'span'} color={'#4c93ff'} fontWeight={700} fontSize={'inherit'}>
                이를 통해 미디어 플랫폼은 이용자에게 해당 미디어 콘텐츠에 AI 음성이 사용되었는지 여부를 명확하게 표시할 수 있습니다.
              </Typography>
              <br />
              AI 음성 사용 수준을 필터링하는 기능을 제공함으로써,
              <br />
              미디어 업로더와 시청자 모두 안심할 수 있는 안전한 플랫폼을 구현할 수 있습니다.
            </Typography>
          </Stack>
          <img src={PlatformImage} alt="Calling People" style={{ width: '50%' }} />
        </Stack>
      </Container>
    </Box>
  );
}
