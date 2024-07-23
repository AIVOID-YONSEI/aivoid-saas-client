import { Box, Container, Stack, Typography } from '@mui/material';
import CallImage from '../assets/call-image.png';

export function IndexSectionNo4() {
  return (
    <Box height={'100vh'} display={'flex'} alignItems={'center'} minWidth={'1000px'}>
      <Container>
        <Stack direction={'row'} spacing={4}>
          <img src={CallImage} alt="Calling People" style={{ width: '40%' }} />
          <Stack spacing={4} width={'60%'} justifyContent={'center'}>
            <Typography fontWeight={700} fontSize={'52px'} lineHeight={'normal'}>
              범죄 예방의{' '}
              <Typography component={'span'} color={'#69db7c'} fontSize={'inherit'} fontWeight={'inherit'}>
                파트너.
              </Typography>
              <br />
              안전한 통화 환경
            </Typography>
            <Typography sx={{ wordBreak: 'keep-all' }} fontSize={'20px'}>
              AI VOID는 통신사에게도 강력한 도구가 됩니다.
              <br />
              통신사는 AI VOID를 통해 보이스피싱과 같은 음성 관련 범죄를 효과적으로 예방할 수 있습니다.
              <br />
              <Typography component={'span'} color={'#69db7c'} fontWeight={700} fontSize={'inherit'}>
                전화 수신자는 상대방의 음성에 대한 유효성 검사를 받아, 딥보이스 생성 여부를 판단할 수 있습니다.
              </Typography>
              <br />
              이러한 기능은 전화 수신자에게 실시간으로 알림을 제공하여 잠재적인 범죄를 사전에 방지하고,
              <br />
              사용자에게 안전한 통화 환경을 제공합니다.
              <br />
              이를 통해 브랜드 신뢰도를 높이고 최상의 사용자 경험을 제공하는 서비스입니다.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
