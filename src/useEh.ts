import eh, { EventHub } from '@foursk/eh';
import { useEffect, useState } from 'react';
import { EventToProps, T_PROPS_WITH_CANNON } from './common';



export function useEh<T_EVENTDATA, T_PROPS>(
  eventName: string,
  defaultProps: T_PROPS,
  eventToProps: EventToProps<T_EVENTDATA, T_PROPS>,
  eventHub: EventHub = eh,
) {
  const [props, setProps] = useState(defaultProps);

  useEffect(() => {
    const cannon = eventHub.cannon<T_PROPS>(eventName);

    const handler = (data: T_EVENTDATA) => {
      const newProps = eventToProps(data, eventName) as T_PROPS_WITH_CANNON<T_PROPS>;
      newProps.cannon = cannon;
      setProps(newProps);
    };
    eventHub.register<T_EVENTDATA>(eventName, handler);

    return () => {
      eventHub.unregister(eventName, handler);
    };
  }, []);

  return props;
}
