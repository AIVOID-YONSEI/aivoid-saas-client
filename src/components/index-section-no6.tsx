import { Box, Container, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import People1 from '../assets/people-1.png';
import People2 from '../assets/people-2.png';
import People3 from '../assets/people-3.png';
import People4 from '../assets/people-4.png';
import People5 from '../assets/people-5.png';

import 'swiper/css';
import 'swiper/css/autoplay';

export function IndexSectionNo6() {
  const slides: { text: string; author: string; authorInfo: string; profileImage: string }[] = [
    {
      author: '박0영',
      authorInfo: '28세, 대학생',
      text: 'AI VOID 덕분에 AI 음성을 구분할 수 있어 인터넷 사용이 훨씬 안전해​졌어요.\n브라우저에서 바로 확인할 수 있어서 편리하고, 중요한 정보를 ​안심하고 받아들일 수 있게 되었어요.',
      profileImage: People1,
    },
    {
      author: '김0수',
      authorInfo: '34세, IT 엔지니어',
      text: 'AI VOID 크롬 익스텐션은 정말 혁신적이에요.\n인터넷에서 많은 자료​를 찾는 저에게 있어, AI 음성을 실시간으로 판별해주니 자료의 신뢰도​를 높일 수 있어 매우 유용합니다.',
      profileImage: People2,
    },
    {
      author: '한0민',
      authorInfo: '26세, 그래픽 디자이너',
      text: 'AI VOID를 사용한 후로, 음성 콘텐츠를 더 신뢰할 수 있게 되었습니다.\n​특히, 다양한 정보를 접하는 제 직업 특성상, AI 음성을 구분해주는 기​능이 매우 유용해요.',
      profileImage: People3,
    },
    {
      author: '최0빈',
      authorInfo: '29세, 팟캐스트 진행자',
      text: 'AI VOID 덕분에 팟캐스트 에피소드에서 AI 음성을 구분할 수 있어요.\n청취자들에게 더욱 신뢰할 수 있는 콘텐츠를 제공할 수 있게 되었습니다.',
      profileImage: People4,
    },
    {
      author: '윤0혁',
      authorInfo: '35세, 온라인 강사',
      text: 'AI VOID는 온라인 강의에서 AI 음성을 구분하는 데 큰 도움이 됩니다.\n학생들에게 믿을 수 있는 정보를 전달할 수 있어 강의의 질을 높일 수 있어요.',
      profileImage: People5,
    },
  ];

  return (
    <Box height={'100vh'} display={'flex'} alignItems={'center'} bgcolor={'#000'}>
      <Container>
        <Typography fontWeight={700} fontSize={'52px'} lineHeight={'normal'} color="#a07bec">
          B2C.
        </Typography>
        <Typography fontWeight={700} fontSize={'40px'} lineHeight={'normal'} color={'white'}>
          익스텐션을 통한 편리한 인터넷 경험
        </Typography>
        <Typography fontSize={'20px'} lineHeight={'normal'} color={'white'} mt={4} mb={8}>
          AI VOID는 개인 사용자들을 위해 맞춤형 플랜을 제공하며, 크롬 익스텐션을 통해 인공지능이 생성한 음성 여부를 분석하여 브라우저에서 시각적으로 표시합니다.
          <br />
          간편하게 설치하여 실시간으로 AI 음성 검출 결과를 제공하며, 사용자의 인터넷 경험을 안전하고 신뢰성 있게 만들어줍니다.
          <br />
          AI VOID를 통해 웹에서의 모든 음성 콘텐츠에 대해 놀라운 경험을 해보세요.
        </Typography>
        <Swiper modules={[Autoplay]} spaceBetween={50} slidesPerView={3} autoplay={{ delay: 2500 }} loop speed={1200}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box bgcolor={'grey.A100'} p={3} borderRadius={2} height={'260px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Typography fontSize={'16px'} whiteSpace={'pre-line'}>
                  {slide.text}
                </Typography>
                <Stack direction={'row'} spacing={2} mt={3} alignItems={'center'}>
                  <img src={slide.profileImage} alt="" width={50} height={50} style={{ borderRadius: '50%' }} />
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <Typography fontSize={'14px'} fontWeight={700}>
                      {slide.author}
                    </Typography>
                    <Typography fontSize={'14px'} color={'gray'}>
                      {slide.authorInfo}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
