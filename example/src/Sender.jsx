import React, { useState, useRef } from 'react';
import { colorEvent, freeTextEvent, resizeEvent, ResizeEvent } from './events';
import eh from '@foursk/eh';

export function Sender() {

    return (
        <div className="column sender">
            <div className="box">
                Default Eh Event
            <input
                    type="text"
                    onChange={e => {
                        //alert(e.target.value);
                        colorEvent.fire({ color: e.target.value });
                    }}
                    placeholder="color i.e. 'red'" />
            </div>
            <div className="box">
                Eh Event with EventToProps
            <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="100"
                    onChange={e => resizeEvent.fire(new ResizeEvent(e.target.value))}
                    placeholder="color i.e. 'red'" />
            </div>
            <div className="box">
                Simple Eh Usage
            <input
                    type="text"
                    onChange={e => eh.fire(freeTextEvent, e.target.value)}
                    placeholder="free text i.e. 'hello'" />
            </div>
        </div>
    );
}