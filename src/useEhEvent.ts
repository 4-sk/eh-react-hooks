import eh, { EhEvent, EventHub } from '@foursk/eh';
import { EventToProps } from './common';
import { useEh } from './useEh';

export function useEhEvent<T_EVENTDATA extends object, T_PROPS = T_EVENTDATA>(
  ehEvent: EhEvent<T_EVENTDATA>,
  defaultProps: T_PROPS,
  eventToProps: EventToProps<T_EVENTDATA, T_PROPS> = data => (data as unknown) as T_PROPS,
  eventHub: EventHub = eh,
) {
  return useEh(ehEvent.name, defaultProps, eventToProps, eventHub);
}
