import classNames from 'classnames';
import React from 'react';
import logo from './logo_icon.png';

export interface LogoPrefixedProps {
  children?: React.ReactNode;
  className?: string;
}

function LogoPrefixed({ children, className }: LogoPrefixedProps) {
  return <div className={classNames('flex align-baseline', className)}>
    <img className="mr-3 flex-shrink-0" src={logo} alt="Logo" />
    <div>{children}</div>
  </div>;
}

export default LogoPrefixed;
