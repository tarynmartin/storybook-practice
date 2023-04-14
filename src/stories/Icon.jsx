import React from 'react';
import BootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg';

const Icon = ({
  name = '',
  width = '32px',
  height = '32px',
  fill = 'black',
  className = '',
}) => {
  return (
    <svg
      role="img"
      focusable="false"
      aria-label={name}
      width={width}
      height={height}
      fill={fill}
      className={className}
    >
      <use xlinkHref={`${BootstrapIcons}#${name}`} />
    </svg>
  );
};

export default React.memo(Icon);