import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="flex flex-col min-h-screen overflow-hidden">
        {children}
      </main>
    </>
  );
}

export default Layout;
