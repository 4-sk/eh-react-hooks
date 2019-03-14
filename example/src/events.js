import { EhEvent } from '@foursk/eh';

export const colorEvent = EhEvent.fromInstance({ color: 'red' });

export class ResizeEvent {
    constructor(value) {
        this.value = value;
    }
}
export const resizeEvent = EhEvent.fromClass(ResizeEvent);

export const freeTextEvent = '#freeText';