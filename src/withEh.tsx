import *  as React from 'react';
import { EhState } from '@foursk/eh';
import { useEhState } from './useEhState';

function WithEhStateComponent<T extends object>(ehState: EhState<T>, Comp: React.ComponentType, { ...props }) {
  const state = useEhState(ehState);
  return <Comp {...props} {...state} />;
}

export function withEhState<T extends Object>(ehState: EhState<T>, Comp: React.ComponentType) {
  return (props: Object) => WithEhStateComponent(ehState, Comp, props);
}
