import React from 'react';
import { colorEvent, freeTextEvent, resizeEvent } from './events';
import { useDefaultEhEvent, useEh, useEhEvent } from '@foursk/eh-react-hooks'

export function Receiver() {
    const { color } = useDefaultEhEvent(colorEvent, { color: 'red' });
    const { width, height, value } = useEhEvent(resizeEvent, { width: 200, height: 100, value }, ({ value }) => ({ width: value * 2, height: value, value }));
    const { text } = useEh(freeTextEvent, { text: '' }, (data, name) => ({ text: data }));


    return (
        <div className="column receiver">
            <div className="box" style={{ backgroundColor: color }}>
                Type a color name in the box to the left
        </div>
            <div className="box" style={{ width: width.toString() + 'px', height: height.toString() + 'px' }}>
                Change my size using the box to the left.
                Value: {value}
            </div>
            <div className="box" style={{ backgroundColor: color }}>
                Put some text in the box to the left
                <span className="nice-text">{text}</span>
            </div>
        </div>
    );
}