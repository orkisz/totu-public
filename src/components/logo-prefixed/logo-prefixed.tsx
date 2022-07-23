import React from 'react';
import logo from './logo_icon.png';

export interface LogoPrefixedProps {
  children: React.ReactNode;
}

function LogoPrefixed({ children }: LogoPrefixedProps) {
  return <div className="flex align-baseline">
    <img className="mr-3 flex-shrink-0" src={logo} alt="Logo" />
    <div>{children}</div>
  </div>;
}

export default LogoPrefixed;
