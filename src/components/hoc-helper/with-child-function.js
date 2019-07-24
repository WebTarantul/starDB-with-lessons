import React from 'react';

export default (WrappedComponent, func) => {
  const hocComponent = ({ ...props }) => {
    return (<WrappedComponent {...props}>
      {func}
    </WrappedComponent>)
  }

  return hocComponent
}

