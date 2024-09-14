import React from 'react';

type Props = {
  condition: boolean;
  elseRender?: JSX.Element;
} & React.PropsWithChildren;

export function If({ condition, elseRender, children }: Props) {
  if (condition) {
    return children;
  }
  if (!condition && !!elseRender) {
    return elseRender;
  }
  return null;
}
