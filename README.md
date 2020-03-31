# @foursk/eh-react-hooks - React Hooks extension for eh
This package is a React Hooks based extension for [@foursk/eh](https://www.npmjs.com/package/@foursk/eh).

It provides an easy way to access Eh, EhEvent and EhState using React Hooks

For any questions, comments, feedback and so feel free to hit me up at:
orangilboa@gmail.com

## Installation
    npm i -s @foursk/eh @foursk/eh-react-hooks

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

## EhState
@foursk/eh v1.0.0 introduced EhState, a simple class for state management. For instructions on how to use EhState, look at the [@foursk/eh](https://www.npmjs.com/package/@foursk/eh) package page.

We'll start by creating a simple state
```javascript
const sAppLoaded = EhState.fromInitialState({ isLoaded: false });
```

Then in our component we can use 'useEhState'. useEhState will always return the latest state from sAppLoaded, and rerender the component whenever the state changes.
```javascript
//intellisense ↓
const { isLoaded } = useEhState(sAppLoaded);
```

Finally to change our state
```javascript
sAppLoaded.fire({ isLoaded: true });

// we can also mutate the state
sAppLoaded.fire({ isLoaded: false, error: 'Failed to connect to internet });
```