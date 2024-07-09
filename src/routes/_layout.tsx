import { createFileRoute, Outlet } from '@tanstack/react-router';
import { RootLayout } from '../components/root-layout';

export const Route = createFileRoute('/_layout')({
  component: () => (
    <RootLayout>
      <Outlet />
    </RootLayout>
  ),
});
