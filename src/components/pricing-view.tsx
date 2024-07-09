import { Container, Typography, Button, Stack, Box } from '@mui/material';
import { FaCheck } from 'react-icons/fa';

export default function PricingView() {
  const plans: {
    title: string;
    price: number;
    description: string;
    features: string[];
    color: string;
  }[] = [
    {
      title: 'FREE',
      price: 0,
      description: '협업툴을 처음으로 사용해보는 소규모 팀에 추천합니다.',
      features: ['3 Emails', '1 Database', 'Unlimited Domains', '10 GB Storage'],
      color: '#616161',
    },
    {
      title: 'PREMIUM',
      price: 9900,
      description: '협업을 잘 하고 싶은 20명 이상의 스타트업과 중소기업에 추천합니다.',
      features: ['6 Emails', '2 Database', 'Unlimited Domains', '25 GB Storage'],
      color: '#3f51b5',
    },
    {
      title: 'ENTERPRISE',
      price: 99000,
      description: '소통을 잘 하고 싶은 성장하는 중견·대기업에 추천합니다.',
      features: ['9 Emails', '3 Database', 'Unlimited Domains', '50 GB Storage'],
      color: '#388e3c',
    },
  ];

  return (
    <Box pt={'128px'} bgcolor={'grey.100'} flexGrow={1}>
      <Container>
        <Typography fontWeight={700} fontSize={'32px'}>
          요금안내
        </Typography>
        <Stack direction="row" spacing={2} justifyContent={'center'} mt={3}>
          {plans.map((plan, index) => (
            <Box key={index} borderRadius={'16px'} boxShadow={'0 8px 16px rgba(53,72,76,.08)'} p={'32px 20px 40px'} bgcolor={'white'} width={'33.3%'}>
              <Typography fontWeight={600} fontSize={'24px'} textAlign={'center'} color={plan.color}>
                {plan.title}
              </Typography>
              <Typography fontSize={'16px'} textAlign={'center'} color={plan.color}>
                <Typography fontSize={'40px'} fontWeight={700} component={'strong'} mr={1}>
                  {plan.price.toLocaleString()}
                </Typography>
                원/월
              </Typography>
              <Button variant="contained" sx={{ width: '100%', mt: 3, borderRadius: '20px', fontSize: '24px', bgcolor: plan.color, color: 'white', ':hover': { bgcolor: plan.color } }}>
                구매하기
              </Button>
              <Typography fontSize={'16px'} fontWeight={700} mt={4}>
                {plan.description}
              </Typography>
              <Stack mt={2}>
                {plan.features.map((feature, idx) => (
                  <Stack direction={'row'} gap={1}>
                    <FaCheck color="#30cf8d" />
                    <Typography key={idx}>{feature}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
