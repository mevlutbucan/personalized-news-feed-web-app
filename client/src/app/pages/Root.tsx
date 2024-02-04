import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <Suspense fallback="loading...">
      <Outlet />
    </Suspense>
  );
}
