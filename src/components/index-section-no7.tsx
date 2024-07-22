import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { FaCheck } from 'react-icons/fa';

export function IndexSectionNo7() {
  const plans: {
    title: string;
    price: number;
    features: string[];
    color: string;
  }[] = [
    {
      title: 'FREE',
      price: 0,
      features: ['한달 이용 횟수 : 30회', '최대 음성 길이 : 1분', '광고 표시'],
      color: '#616161',
    },
    {
      title: 'STANDARD',
      price: 9900,
      features: ['한달 이용 횟수 : 100회', '최대 음성 길이 : 10분', '광고 없음', '더 빠른 반응속도'],
      color: '#5900eb',
    },
    {
      title: 'PREMIUM',
      price: 99000,
      features: ['한달 이용 횟수 : 무제한', '최대 음성 길이 : 무제한', '광고 없음', '더 빠른 반응속도'],
      color: '#5900eb',
    },
  ];

  return (
    <Box height={'100vh'} display={'flex'} alignItems={'center'}>
      <Container>
        <Typography fontWeight={700} fontSize={'52px'} lineHeight={'normal'} color="#a07bec">
          개인용 요금제 안내
        </Typography>
        <Stack direction="row" spacing={2} justifyContent={'center'} mt={3}>
          {plans.map((plan, index) => (
            <Box key={index} borderRadius={'16px'} boxShadow={'0 8px 16px rgba(53,72,76,.08)'} p={'32px 20px 40px'} bgcolor={'white'} width={'33.3%'} display={'flex'}>
              <Stack justifyContent={'space-between'} width={'100%'}>
                <Typography fontWeight={700} fontSize={'36px'} textAlign={'center'} color={plan.color}>
                  {plan.title}
                </Typography>
                <Typography fontSize={'16px'} textAlign={'center'} color={'gray'} fontWeight={'light'}>
                  {plan.price.toLocaleString()}
                  원/월
                </Typography>
                <Stack mt={2}>
                  {plan.features.map((feature, idx) => (
                    <Stack direction={'row'} gap={1}>
                      <FaCheck color="#30cf8d" />
                      <Typography key={idx}>{feature}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button variant="contained" sx={{ width: '100%', mt: 3, borderRadius: '20px', fontSize: '24px', bgcolor: plan.color, color: 'white', ':hover': { bgcolor: plan.color } }}>
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
