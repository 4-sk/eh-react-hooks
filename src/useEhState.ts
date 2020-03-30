import eh, { EventHub, EhState } from '@foursk/eh';
import { EventToProps } from './common';
import { useEh } from './useEh';

const dataToProps = <T>(data:T) => data;

export function useEhState<T_EVENTDATA extends object>(
  ehState: EhState<T_EVENTDATA>,
  eventHub: EventHub = eh,
) {
  return useEh<T_EVENTDATA, T_EVENTDATA>(ehState.name, ehState.state, dataToProps, eventHub);
}
