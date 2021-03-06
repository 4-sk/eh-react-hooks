import eh, { EhState, EventHub } from '@foursk/eh';
import { useEh } from './useEh';

const dataToProps = <T>(data: T) => Object.assign({}, data);

export function useEhState<T_EVENTDATA extends object>(ehState: EhState<T_EVENTDATA>, eventHub: EventHub = eh) {
  return useEh<T_EVENTDATA, T_EVENTDATA>(ehState.name, Object.assign({}, ehState.state), dataToProps, eventHub);
}
