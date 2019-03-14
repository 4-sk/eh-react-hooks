import eh, { EhEvent, EventHub } from '@foursk/eh';
import { useEh } from "./useEh";
import { EventToProps } from './common';

export function useEhEvent<T_EVENTDATA, T_PROPS>(ehEvent: EhEvent<T_EVENTDATA>, defaultProps: T_PROPS, eventToProps: EventToProps<T_EVENTDATA, T_PROPS>, eventHub: EventHub = eh) {
    return useEh(ehEvent.name, defaultProps, eventToProps, eventHub);
}

export function useDefaultEhEvent<T_EVENTDATA>(ehEvent: EhEvent<T_EVENTDATA>, defaultProps: T_EVENTDATA, eventHub: EventHub = eh) {
    return useEhEvent<T_EVENTDATA, T_EVENTDATA>(ehEvent, defaultProps, (data) => data, eventHub);
}