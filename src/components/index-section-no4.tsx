import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { FULLPAGE_SECTION_CLASS } from '../lib/constants';
import { Link } from '@tanstack/react-router';

export function IndexSectionNo4() {
  return (
    <Box className={FULLPAGE_SECTION_CLASS} bgcolor={'#0e2226'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Container>
        <Stack spacing={6}>
          <Typography color={'white'} fontSize={'62px'} fontWeight={700} textAlign={'center'} lineHeight={'normal'}>
            당신의 목소리를
            <br />
            안전하게 지켜드립니다.
          </Typography>
          <Link to="/pricing">
            <Button variant="contained" size="large" sx={{ borderRadius: '20px', fontSize: '24px', width: '100%' }} color="success">
              요금제 보러가기
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
