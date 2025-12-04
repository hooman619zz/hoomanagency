'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), {
  ssr: false,
  loading: () => <div className="h-16 w-full bg-white" />,
});

export default function HeaderWrapper() {
  return <Header />;
}
