import classNames from 'classnames';
import React from 'react';
import LogoPrefixed from '../logo-prefixed/logo-prefixed';

export interface HomepageFeatureProps {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  button: React.ReactElement;
  reverse?: boolean;
}

function HomepageFeature({ title, description, image, button: srcButton, reverse }: HomepageFeatureProps) {
  const button = React.cloneElement(srcButton, { className: 'button-secondary mt-6' });
  const direction = !!reverse ? 'flex-row-reverse' : 'flex-row';

  return <div className={classNames('pb-12 md:flex', direction)}>
    <img className="md:w-1/2" src={image} />
    <div className="md:w-1/2">
      <LogoPrefixed className="mt-6 mb-4 font-semibold">{title}</LogoPrefixed>
      <p className="font-secondary">{description}</p>
      {button}
    </div>
  </div>
}

export default HomepageFeature;
