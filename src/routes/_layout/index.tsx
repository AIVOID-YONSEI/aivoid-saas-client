import { createFileRoute } from '@tanstack/react-router';
import { IndexView } from '../../components/index-view';

export const Route = createFileRoute('/_layout/')({
  component: () => {
    return <IndexView />;
  },
});
