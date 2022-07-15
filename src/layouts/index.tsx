import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
