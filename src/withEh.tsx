import { EhState } from '@foursk/eh';
import * as React from 'react';
import { useEhState } from './useEhState';

function WithEhStateComponent<T extends object>(ehState: EhState<T>, Comp: React.ComponentType, { ...props }) {
  const state = useEhState(ehState);
  return <Comp {...props} {...state} />;
}

export function withEhState<T extends object>(ehState: EhState<T>, Comp: React.ComponentType) {
  return (props: object) => WithEhStateComponent(ehState, Comp, props);
}
