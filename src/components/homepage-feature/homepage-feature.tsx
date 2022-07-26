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

function HomepageFeature({
  title,
  description,
  image,
  button: srcButton,
  reverse,
}: HomepageFeatureProps) {
  const button = React.cloneElement(srcButton, {
    className: 'button-secondary mt-6 md:mt-11',
  });
  const direction = !!reverse ? 'flex-row-reverse' : 'flex-row';
  const imageJustify = !!reverse ? 'justify-end' : 'justify-start';

  return (
    <div className={classNames('pb-12 md:pb-36 md:flex', direction)}>
      <figure className={classNames('md:w-1/2 md:flex', imageJustify)}>
        <img className="object-contain object-top md:w-[90%]" src={image} />
      </figure>
      <div className="md:w-1/2 flex-shrink-0">
        <LogoPrefixed className="mt-6 md:mt-9 mb-4 md:mb-7 font-semibold">{title}</LogoPrefixed>
        <p className="font-secondary">{description}</p>
        {button}
      </div>
    </div>
  );
}

export default HomepageFeature;
