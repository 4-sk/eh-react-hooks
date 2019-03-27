export type EventToProps<T_EVENTDATA, T_PROPS> = (data: T_EVENTDATA, eventName: string) => T_PROPS;
