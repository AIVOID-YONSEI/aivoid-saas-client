import { Box, Container, Stack, Typography } from '@mui/material';

export function IndexSectionNo4() {
  return (
    <Box height={'100vh'} pt={12}>
      <Container>
        <Stack spacing={8}>
          <Typography fontWeight={700} fontSize={'52px'} lineHeight={'normal'}>
            범죄 예방의 파트너.
            <br />
            안전한 통화 환경
          </Typography>
          <Typography fontWeight={300} color={'grey.800'}>
            AI VOID는 워터마크와 딥러닝 기술을 활용하여 인공지능이 생성한 음성과 실제 인간의 음성을 정확하게 구분하는 혁신적인 서비스입니다. 이를 통해 미디어 플랫폼은 이용자에게 해당 미디어 콘텐츠에 AI 음성이 사용되었는지 여부를 명확하게 표시할 수
            있습니다. AI 음성 사용 수준을 필터링하는 기능을 제공함으로써, 미디어 업로더와 시청자 모두 안심할 수 있는 안전한 플랫폼을 구현할 수 있습니다.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
