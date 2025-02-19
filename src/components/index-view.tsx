import { Box, IconButton } from '@mui/material';
import { IndexSectionNo1 } from './index-section-no1';
import { IndexSectionNo2 } from './index-section-no2';
import { IndexSectionNo3 } from './index-section-no3';
import { IndexSectionNo4 } from './index-section-no4';
import { IndexSectionNo5 } from './index-section-no5';
import { IndexSectionNo6 } from './index-section-no6';
import { IndexSectionNo7 } from './index-section-no7';
// @ts-expect-error no @types
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { IoChatbubblesOutline } from 'react-icons/io5';

export function IndexView() {
  return (
    <Fullpage>
      <FullPageSections>
        {[<IndexSectionNo1 />, <IndexSectionNo2 />, <IndexSectionNo3 />, <IndexSectionNo4 />, <IndexSectionNo5 />, <IndexSectionNo6 />, <IndexSectionNo7 />].map((section, index) => (
          <FullpageSection key={index}>{section}</FullpageSection>
        ))}
      </FullPageSections>
      <Box position={'fixed'} bottom={'20px'} right={'20px'}>
        <IconButton size="large" sx={{ bgcolor: '#a07bec', color: '#fff', ':hover': { bgcolor: '#a07bec' } }}>
          <IoChatbubblesOutline />
        </IconButton>
      </Box>
    </Fullpage>
  );
}
