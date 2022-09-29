# Component Interaction

### There can be many relationships between components below are examples:
- Parent Child Interaction
- Child Parent Interaction
- Sibling Interaction

### Parent to Child: Sharing Data via Input ( @Input)
This is probably the most common and straightforward method of sharing data. It works by using the @Input() decorator to allow data to be passed via the template. I will also show the way it is written in angular application to make it work

Proof @Input is that we can share the data from parent to child but cons is that we can't add interactive ness from it

### Child to Parent: Sharing Data via ViewChild ( @ViewChild )
ViewChild allows a one component to be injected into another, giving the parent access to its attributes and functions. ViewChild can be used for DOM manipulation.

### Child to Parent: Sharing Data via Output() and EventEmitter
You can use this when you want any event to occur for example on button Click etc. This allows us to send information from child component to parent component we can share the information from child, trigger event using EventEmitter etc.

### Sibling Interaction
We can use shared service when we want to pass info between two components which are not related to one another.We can use RxJS BehaviorSubject. In this all parent, child and sibling gets the same treatment and is the most reliable medium of communication.You can also use a regular RxJS Subject for sharing data via the service, but here’s why I prefer a BehaviorSubject.

- It will always return the current value on subscription — there is no need to call onnext
- It has a getValue() function to extract the last value as raw data.
- It ensures that the component always receives the most recent data.
