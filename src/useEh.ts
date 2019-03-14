import { useEffect, useState } from 'react';
import eh, { EventHub } from '@foursk/eh';
import { EventToProps } from './common';

export function useEh<T_EVENTDATA, T_PROPS>(eventName: string, defaultProps: T_PROPS, eventToProps: EventToProps<T_EVENTDATA, T_PROPS>, eventHub: EventHub = eh) {

    const [props, setProps] = useState(defaultProps);

    useEffect(() => {
        const handler = (data: T_EVENTDATA) => {
            setProps(eventToProps(data, eventName));
        };
        eventHub.register<T_EVENTDATA>(eventName, handler);

        return () => {
            eventHub.unregister(eventName, handler);
        };
    }, []);

    return props;
}