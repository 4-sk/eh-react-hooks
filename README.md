# eh-react-hooks - react hooks extension for eh

For any questions, comments, feedback and so feel free to hit me up:
mcr@foursk.com

## Installation
    npm i -s @foursk/eh-react-hooks

## General API Explanation
The idea is to register to events (using an event name or event instance), and extract props for rendering.

Let's take a simple event:
```javascript
export const colorEvent = EhEvent.fromInstance({ color: 'red' });
```

And a simple component that cares about this color:
```javascript
//      prop            eh event instance    default value
const { color } = useEhEvent(colorEvent, { color: 'red' });
```

We get the color from the hook, using the event instance. The second argument is the default value.

For some events we'll want to convert the event to props.
```javascript
export class ResizeEvent {
    constructor(value) {
        this.value = value;
    }
}
export const resizeEvent = EhEvent.fromClass(ResizeEvent);
```

We can do this by passing a conversion function
```javascript
                                                                                                        // convert value to dimensions
const { width, height, value } = useEhEvent(resizeEvent, { width: 200, height: 100, value: 100 }, ({ value }) => ({ width: value * 2, height: value, value }));
```

There's also the "basic usage" option of registering with a string
```javascript
const { text } = useEh("#freeText", { text: '' }, (data, name) => ({ text: data }));
```