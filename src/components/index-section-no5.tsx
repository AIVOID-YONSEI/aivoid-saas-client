import { Box, Container, FormControl, FormLabel, TextField, Link, Stack, Typography, Button, MenuItem, FormControlLabel, Checkbox } from '@mui/material';

export function IndexSectionNo5() {
  return (
    <Box height={'100vh'} display={'flex'} alignItems={'center'}>
      <Container>
        <Stack direction={'row'} spacing={4} alignItems={'center'}>
          <Stack width={'100%'}>
            <Typography fontWeight={700} fontSize={'64px'}>
              도입 문의
            </Typography>
            <Typography fontSize={'24px'} mt={1}>
              기업별 최적화된 AI VOID 서비스를 추천해드립니다.
            </Typography>
            <Typography mt={8}>
              평균 2일 내에 유선상으로 연락드리며,
              <br />
              수집된 정보는 상담 이외의 목적으로 사용되지 않습니다.
            </Typography>
            <Typography mt={2}>
              기업이 아닌 개인은 <Link href="#">개인용 요금제</Link>를 확인바립니다.
            </Typography>
          </Stack>
          <Stack width={'100%'} spacing={2}>
            <FormControl>
              <FormLabel sx={{ color: 'black' }}>회사명</FormLabel>
              <TextField sx={{ bgcolor: 'grey.100' }} />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ color: 'black' }}>업종</FormLabel>
              <TextField select value={'IT'} sx={{ bgcolor: 'grey.100' }}>
                <MenuItem value="IT">IT</MenuItem>
              </TextField>
            </FormControl>
            <FormControl>
              <FormLabel sx={{ color: 'black' }}>전화번호</FormLabel>
              <TextField sx={{ bgcolor: 'grey.100' }} />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ color: 'black' }}>이메일</FormLabel>
              <TextField sx={{ bgcolor: 'grey.100' }} />
            </FormControl>
            <FormControl>
              <FormControlLabel control={<Checkbox defaultChecked />} label="[필수] 개인(신용)정보 수집・이용에 동의합니다." />
            </FormControl>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#510bec',
                ':hover': {
                  bgcolor: '#510bec',
                },
              }}
              size="large"
            >
              도입 문의하기
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
