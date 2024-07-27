import { Box, Container, FormControl, TextField, Link, Stack, Typography, Button, MenuItem, FormControlLabel, Checkbox, Card, CardContent } from '@mui/material';

export function IndexSectionNo5() {
  return (
    <Box height={'100vh'} display={'flex'} alignItems={'center'} bgcolor={'#e9e9e9'} minWidth={'1000px'}>
      <Container>
        <Stack direction={'row'} spacing={4} alignItems={'stretch'}>
          <Stack width={'100%'} justifyContent={'space-between'}>
            <Box>
              <Typography fontWeight={700} fontSize={'52px'}>
                Contact us.
              </Typography>
              <Typography fontSize={'24px'} mt={1}>
                기업별 최적화된 True Voice 서비스를 추천해드립니다.
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={'light'} fontSize={'14px'}>
                평균 2일 내에 유선상으로 연락드리며,
                <br />
                수집된 정보는 상담 이외의 목적으로 사용되지 않습니다.
              </Typography>
              <Typography mt={2} fontWeight={'light'} fontSize={'14px'}>
                기업이 아닌 개인은 <Link href="#">개인용 요금제</Link>를 확인바랍니다.
              </Typography>
            </Box>
          </Stack>
          <Card sx={{ width: '100%', borderRadius: '15px' }} elevation={0}>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2}>
                <FormControl>
                  <TextField variant="outlined" label="회사명" />
                </FormControl>
                <FormControl>
                  <TextField select value={'IT'} variant="outlined" label="업종">
                    <MenuItem value="IT">IT</MenuItem>
                  </TextField>
                </FormControl>
                <FormControl>
                  <TextField variant="outlined" label="전화번호" />
                </FormControl>
                <FormControl>
                  <TextField variant="outlined" label="이메일" />
                </FormControl>
                <FormControl>
                  <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography fontSize={'14px'}>[필수] 개인(신용)정보 수집・이용에 동의합니다.</Typography>} />
                </FormControl>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#510bec',
                    ':hover': {
                      bgcolor: '#510bec',
                    },
                    py: 2,
                    borderRadius: '15px',
                    boxShadow: 'none',
                  }}
                  size="large"
                >
                  도입 문의하기
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
