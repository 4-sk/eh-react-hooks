export type EventToProps<T_EVENTDATA, T_PROPS> = (data: T_EVENTDATA, eventName: string) => T_PROPS;
export type T_PROPS_WITH_CANNON<T_PROPS> = T_PROPS & {
    cannon: (data: T_PROPS) => Promise<T_PROPS>;
}