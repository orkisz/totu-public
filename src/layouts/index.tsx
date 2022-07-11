import { Link } from 'gatsby';
import React from 'react';
import * as styles from './index.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
