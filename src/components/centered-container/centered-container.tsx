import classNames from 'classnames';
import React from 'react';

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
}

function CenteredContainer({ children, className }: SectionProps) {
  return <div className={classNames('max-w-6xl md:mx-auto px-4 sm:px-6', className)}>
    {children}
  </div>;
}

export default CenteredContainer;
