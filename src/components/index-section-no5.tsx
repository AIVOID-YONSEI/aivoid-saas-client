import { Box, Container, FormControl, FormLabel, TextField, Link, Stack, Typography, Button } from '@mui/material';

export function IndexSectionNo5() {
  return (
    <Box height={'100vh'} pt={12}>
      <Container>
        <Stack direction={'row'} spacing={4}>
          <Stack spacing={8} width={'100%'}>
            <Typography fontWeight={700} lineHeight={'normal'}>
              도입 문의
            </Typography>
            <Typography fontWeight={700} lineHeight={'normal'}>
              기업별 최적화된 AI VOID 서비스를 추천해드립니다.
            </Typography>
            <Typography fontWeight={300} color={'grey.800'}>
              평균 2일 내에 유선상으로 연락드리며,
              <br />
              수집된 정보는 상담 이외의 목적으로 사용되지 않습니다.
            </Typography>
            <Typography fontWeight={700} lineHeight={'normal'}>
              기업이 아닌 개인은 <Link href="#">개인용 요금제</Link>를 확인바립니다.
            </Typography>
          </Stack>
          <Stack width={'100%'}>
            <FormControl>
              <FormLabel>회사명</FormLabel>
              <TextField variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>업종</FormLabel>
              <TextField variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>전화번호</FormLabel>
              <TextField variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>이메일</FormLabel>
              <TextField variant="filled" />
            </FormControl>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#510bec',
                ':hover': {
                  bgcolor: '#510bec',
                },
              }}
            >
              도입 문의하기
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
