import { createFileRoute } from '@tanstack/react-router';
import PricingView from '../../components/pricing-view';

export const Route = createFileRoute('/_layout/pricing')({
  component: () => <PricingView />,
});
