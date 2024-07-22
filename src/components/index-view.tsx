import { IndexSectionNo1 } from './index-section-no1';
import { IndexSectionNo2 } from './index-section-no2';
import { IndexSectionNo3 } from './index-section-no3';
import { IndexSectionNo4 } from './index-section-no4';
import { IndexSectionNo5 } from './index-section-no5';
// @ts-expect-error no @types
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';

export function IndexView() {
  return (
    <Fullpage>
      <FullPageSections>
        {[<IndexSectionNo1 />, <IndexSectionNo2 />, <IndexSectionNo3 />, <IndexSectionNo4 />, <IndexSectionNo5 />].map((section, index) => (
          <FullpageSection key={index}>{section}</FullpageSection>
        ))}
      </FullPageSections>
    </Fullpage>
  );
}
