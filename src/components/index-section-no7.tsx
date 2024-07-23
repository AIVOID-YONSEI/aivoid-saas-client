import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { IoMdCheckmark } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

export function IndexSectionNo7() {
  const plans: {
    id: 'FREE' | 'STANDARD' | 'PREMIUM';
    title: string;
    price: number;
    features: string[];
  }[] = [
    {
      id: 'FREE',
      title: 'FREE',
      price: 0,
      features: ['한달 이용 횟수 : 30회', '최대 음성 길이 : 1분', '광고 표시'],
    },
    {
      id: 'STANDARD',
      title: 'STANDARD',
      price: 9900,
      features: ['한달 이용 횟수 : 100회', '최대 음성 길이 : 10분', '광고 없음', '더 빠른 반응속도'],
    },
    {
      id: 'PREMIUM',
      title: 'PREMIUM',
      price: 99000,
      features: ['한달 이용 횟수 : 무제한', '최대 음성 길이 : 무제한', '광고 없음', '더 빠른 반응속도'],
    },
  ];

  return (
    <Box height={'100vh'} display={'flex'} bgcolor={'#121212'} minWidth={'1000px'}>
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', gap: 10, flexDirection: 'column', alignItems: 'stretch' }}>
        <Box>
          <Typography fontWeight={700} fontSize={'56px'} color="white" textAlign={'center'}>
            이 모든 것을 월 9,900원으로
          </Typography>
          <Typography fontSize={'20px'} color={'#808080'} textAlign={'center'} mt={2}>
            합리적인 요금제로 안전하고 혁신적인
            <br />
            인터넷 환경을 경험하세요.
          </Typography>
          <Stack justifyContent={'center'} mt={3}>
            <Button sx={{ color: 'white', fontSize: '20px' }}>
              요금제 자세히 보기
              <IoIosArrowForward />
            </Button>
          </Stack>
        </Box>
        <Stack direction="row" spacing={4} justifyContent={'center'}>
          {plans.map((plan, index) => (
            <Box key={index} borderRadius={'20px'} p={'36px 30px'} bgcolor={plan.id === 'FREE' ? 'white' : plan.id === 'STANDARD' ? '#4c93ff' : '#a07bec'} width={'33.3%'} display={'flex'}>
              <Stack justifyContent={'space-between'} width={'100%'}>
                <Typography fontWeight={700} fontSize={'24px'} color={plan.id === 'FREE' ? 'black' : 'white'}>
                  {plan.title}
                </Typography>
                <Stack alignItems={'flex-end'} direction={'row'} mt={3}>
                  <Typography component={'strong'} fontWeight={700} fontSize={'34px'} color={plan.id === 'FREE' ? 'black' : 'white'} lineHeight={'normal'}>
                    &#8361;{plan.price.toLocaleString()}
                  </Typography>
                  {plan.id !== 'FREE' && (
                    <Typography fontSize={'14px'} fontWeight={700} color={'white'} lineHeight={'normal'} component={'span'} pb={0.5}>
                      /월
                    </Typography>
                  )}
                </Stack>
                <Stack mt={3}>
                  {plan.features.map((feature, idx) => (
                    <Stack direction={'row'} gap={1} key={idx}>
                      <IoMdCheckmark color={plan.id === 'FREE' ? 'black' : 'white'} />
                      <Typography key={idx} color={plan.id === 'FREE' ? 'black' : 'white'} fontSize={'14px'}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    mt: 8,
                    py: 1,
                    borderRadius: '10px',
                    boxShadow: 'none',
                    fontSize: '14px',
                    fontWeight: 700,
                    bgcolor: plan.id === 'FREE' ? 'black' : 'white',
                    color: plan.id === 'FREE' ? 'white' : plan.id === 'STANDARD' ? '#4c93ff' : '#a07bec',
                    ':hover': {
                      bgcolor: plan.id === 'FREE' ? 'black' : 'white',
                    },
                  }}
                >
                  시작하기
                </Button>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
