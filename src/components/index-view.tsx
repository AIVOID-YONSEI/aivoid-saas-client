import ReactFullpage from '@fullpage/react-fullpage';
import { IndexSectionNo1 } from './index-section-no1';
import { IndexSectionNo2 } from './index-section-no2';
import { IndexSectionNo3 } from './index-section-no3';
import { IndexSectionNo4 } from './index-section-no4';

export function IndexView() {
  return (
    <ReactFullpage
      credits={{ enabled: false }}
      scrollingSpeed={1000}
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <IndexSectionNo1 onClickGoDown={() => fullpageApi.moveSectionDown()} />
          <IndexSectionNo2 />
          <IndexSectionNo3 />
          <IndexSectionNo4 />
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
