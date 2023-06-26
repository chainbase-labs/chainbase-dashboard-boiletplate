import QueryTaskProvider from '@/components/QueryTaskProvider/context';
import React from 'react';


export const metadata = {
  title: 'Chainbase',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryTaskProvider>
      {children}
    </QueryTaskProvider>
  );
}
