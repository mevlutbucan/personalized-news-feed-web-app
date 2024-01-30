import { Suspense } from 'react';

export default function Root() {
  return <Suspense fallback="loading...">Hello World!</Suspense>;
}
