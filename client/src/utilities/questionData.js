export const questionData = [
  {
    id: 1,
    question: "What is React, and what are its main features?",
    answer:
      "React is a JavaScript library developed by Facebook for creating user interfaces, particularly in single-page applications. It enables the use of reusable components that manage their own state. Key advantages include a component-driven architecture, optimized updates through the virtual DOM, a declarative approach for better readability, and robust community backing.",
    queType: "React",
  },
  {
    id: 2,
    question: "What is JSX and how does it work?",
    answer:
      "JSX, short for JavaScript XML, is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes building React components easier. JSX gets converted into JavaScript function calls, often by Babel.",
    example: `<div>Hello, world!</div>\n// becomes React.createElement('div', null, 'Hello, world!')`,
    queType: "React",
  },
  {
    id: 3,
    question: "Explain the concept of the Virtual DOM in React.",
    answer:
      "The virtual DOM is a simplified version of the actual DOM used by React. It allows for efficient UI updates by comparing the virtual DOM to the real DOM and making only the necessary changes through a process known as reconciliation.",
    queType: "React",
  },
  {
    id: 4,
    question:
      "How does virtual DOM in React work? What are its benefits and downsides?",
    answer:
      "The virtual DOM in React is an in-memory representation of the real DOM. When state or props change, React creates a new virtual DOM tree, compares it to the previous one using a diffing algorithm, and efficiently updates only the parts of the real DOM that changed.\n\nBenefits: Improves performance by reducing costly direct DOM manipulations and makes UI updates declarative and predictable.\nDownsides: Some overhead from diffing and extra memory usage; in very dynamic UIs, it may not always outperform manual optimizations.",
    queType: "React",
  },
  {
    id: 5,
    question:
      "What is the difference Between React Node, React Element, and React Component?",
    answer:
      "A React Node refers to any unit that can be rendered in React, such as an element, string, number, or null. A React Element is an immutable object that defines what should be rendered, typically created using JSX or React.createElement. A React Component is either a function or class that returns React Elements, enabling the creation of reusable UI components.",
    queType: "React",
  },
  {
    id: 6,
    question: "What are React Fragments used for?",
    answer:
      "React Fragments allow you to group multiple elements without adding extra nodes to the DOM. They are useful when you need to return multiple elements from a component but don't want to wrap them in a container element.",
    queType: "React",
    example: `return (
    <>
      <ChildComponent1 />
      <ChildComponent2 />
    </>
  );`,
  },
  {
    id: 7,
    question: "What is the purpose of the key prop in React?",
    answer:
      "In React, the key prop is used to uniquely identify elements in a list, allowing React to optimize rendering by updating and reordering items more efficiently. Without unique keys, React might re-render elements unnecessarily, causing performance problems and potential bugs.",
    queType: "React",
    example: `items.map((item) => <ListItem key={item.id} value={item.value} />)`,
  },
  {
    id: 8,
    question:
      "What is the consequence of using array indices as keys in React?",
    answer:
      "Using array indices as keys can lead to performance issues and unexpected behavior, especially when reordering or deleting items. React relies on keys to identify elements uniquely, and using indices can cause components to be re-rendered unnecessarily or display incorrect data.",
    queType: "React",
  },
  {
    id: 9,
    question: "What are props in React? How are they different from state?",
    answer:
      "Props (short for properties) are inputs to React components that allow you to pass data from a parent component to a child component. They are immutable and used to configure a component. In contrast, state is internal to a component and can change over time, typically due to user interactions or other events.",
    queType: "React",
  },
  {
    id: 10,
    question:
      "What is the difference between React's class components and functional components?",
    answer:
      "Class components are ES6 classes that extend React.Component and can hold state, lifecycle methods, and other features. Functional components are simpler functions that take props as input and return JSX. With hooks, functional components can also manage state and lifecycle methods, making them versatile.",
    queType: "React",
  },
  // 👉 Continue adding objects in the same format for 11–59
  {
    id: 11,
    question:
      "When should you use a class component over a function component?",
    answer:
      "Class components are useful when you need to manage state, use lifecycle methods, or optimize performance through shouldComponentUpdate. However, with the introduction of hooks, functional components can now handle state and lifecycle methods, making them a preferred choice for most use cases due to their simplicity and readability.",
    queType: "React",
  },
  {
    id: 12,
    question: "What is React Fiber?",
    answer:
      "React Fiber is a complete rewrite of the React core algorithm, designed to improve performance and enable new features like async rendering, error boundaries, and incremental rendering. It breaks down the rendering process into smaller chunks, allowing React to pause, abort, or prioritize updates as needed.",
    queType: "React",
  },
  {
    id: 13,
    question: "What is reconciliation?",
    answer:
      "Reconciliation is the process by which React updates the DOM to match the virtual DOM efficiently. It involves comparing the new virtual DOM tree with the previous one and determining the minimum number of changes required to update the actual DOM. This process ensures optimal performance by avoiding unnecessary re-renders.",
    queType: "React",
  },
  {
    id: 14,
    question: "What is the difference between Shadow DOM and Virtual DOM?",
    answer:
      "The Shadow DOM is a web standard that encapsulates a part of the DOM, isolating it from the rest of the document. It's used for creating reusable, self-contained components without affecting the global styles or scripts.\n\nThe Virtual DOM is an in-memory representation of the actual DOM used to optimize rendering. It compares the current and previous states of the UI, updating only the necessary parts of the DOM, which improves performance.",
    queType: "React",
  },
  {
    id: 15,
    question:
      "What is the difference between Controlled and Uncontrolled React components?",
    answer:
      "In controlled components, form data is managed through the component's state, making it the definitive source of truth. Input value changes are handled by event handlers. In uncontrolled components, the form state is managed internally and accessed via refs. Controlled components provide more control and are easier to test, while uncontrolled components are simpler for basic use cases.",
    example: `// Controlled component
function ControlledInput() {
  const [value, setValue] = React.useState('');
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// Uncontrolled component
function UncontrolledInput() {
  const inputRef = React.useRef();
  return <input type="text" ref={inputRef} />;
}`,
    queType: "React",
  },
  {
    id: 16,
    question:
      "How would you lift the state up in a React application, and why is it necessary?",
    answer:
      "Lifting state up in React involves moving the state from child components to their nearest common ancestor. This pattern is used to share state between components that don't have a direct parent-child relationship. By lifting state up, you can avoid prop drilling and simplify the management of shared data.",
    example: `// Lifting state up
const Parent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Child1 counter={counter} />
      <Child2 setCounter={setCounter} />
    </div>
  );
};

const Child1 = ({ counter }) => <h1>{counter}</h1>;
const Child2 = ({ setCounter }) => (
  <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
);`,
    queType: "React",
  },
  {
    id: 17,
    question: "What are Pure Components?",
    answer:
      "Pure Components in React are components that only re-render when their props or state change. They use shallow comparison to check if the props or state have changed, preventing unnecessary re-renders and improving performance.\n\nClass components can extend React.PureComponent to become pure.\nFunctional components can use React.memo for the same effect.",
    example: `const PureFunctionalexample = React.memo(function ({ value }) {
  return <div>{value}</div>;
});`,
    queType: "React",
  },
  {
    id: 18,
    question: "What is the difference between createElement and cloneElement?",
    answer:
      "createElement:\n- Used to create a new React element.\n- Takes the type of element, props, and children, and returns a new element.\n- Commonly used internally by JSX or for dynamic creation.\n\ncloneElement:\n- Used to clone an existing React element and optionally modify its props.\n- Keeps original children and state while overriding props.\n- Useful when manipulating an existing element.",
    example: `// createElement
React.createElement('div', { className: 'container' }, 'Hello World');

// cloneElement
const element = <button className="btn">Click Me</button>;
const clonedElement = React.cloneElement(element, { className: 'btn-primary' });`,
    queType: "React",
  },
  {
    id: 19,
    question: "What is the role of PropTypes in React?",
    answer:
      "PropTypes in React is used for type-checking props passed to components, ensuring the correct data types are used and warning developers during development. It helps catch errors early and improves code quality. However, modern React apps often use TypeScript instead for compile-time checking.",
    example: `import PropTypes from 'prop-types';

function MyComponent({ name, age }) {
  return (
    <div>
      {name} is {age} years old
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};`,
    queType: "React",
  },
  {
    id: 20,
    question: "What are stateless components?",
    answer:
      "Stateless components in React are components that do not manage or hold any internal state. They simply receive data via props and render UI based on that data. These are often functional components used for presentational purposes.\n\nKey points:\n- No use of this.state\n- Render UI based only on props\n- Easy to test and reusable.",
    example: `function StatelessComponent({ message }) {
  return <div>{message}</div>;
}`,
    queType: "React",
  },
  {
    id: 21,
    question: "What are stateful components?",
    answer:
      "Stateful components in React are components that manage and hold their own internal state. They can modify their state in response to user interactions or other events and re-render themselves when the state changes.\n\nKey points:\n- Use this.state (in class components) or useState (in functional components)\n- Can update state using event handlers or lifecycle methods\n- Handle logic and data management\n\nStateful components are essential for handling dynamic and interactive UIs.",
    example: `function StatefulComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
    queType: "React",
  },
  {
    id: 22,
    question:
      "What are the recommended ways for type checking of React component props?",
    answer:
      "The recommended ways for static type checking in React are:\n\n1. TypeScript: A superset of JavaScript that adds optional static typing, providing strong type checking and tooling.\n2. PropTypes: A runtime type-checking tool for React props, useful for smaller projects or runtime validation.\n\nTypeScript is the preferred choice for larger apps due to integration with the build process, while PropTypes can be useful in lightweight projects.",
    example: `// TypeScript
interface MyComponentProps {
  name: string;
  age: number;
}
function MyComponent({ name, age }: MyComponentProps) {
  return <div>{name} is {age} years old</div>;
}

// PropTypes
import PropTypes from 'prop-types';
function MyComponent({ name, age }) {
  return <div>{name} is {age} years old</div>;
}
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};`,
    queType: "React",
  },
  {
    id: 23,
    question: "Why does React recommend against mutating state?",
    answer:
      "React advises against mutating state as it can lead to unexpected behaviors and bugs. State immutability helps React efficiently determine when components need re-rendering. Direct mutations may prevent React from detecting changes, breaking the UI update cycle.",
    queType: "React",
  },
  {
    id: 24,
    question: "What are the benefits of using hooks in React?",
    answer:
      "Hooks enable the use of state and other React features in functional components, removing the need for class components. They simplify code, enhance readability, and allow reuse of stateful logic across components. Popular hooks like useState and useEffect help manage state and side effects.",
    queType: "React",
  },
  {
    id: 25,
    question: "What are the rules of React hooks?",
    answer:
      "Rules of hooks:\n1. Only call hooks at the top level (not inside loops, conditions, or nested functions).\n2. Only call hooks from React function components or custom hooks.\n\nFollowing these ensures proper state management and lifecycle behavior.",
    queType: "React",
  },
  {
    id: 26,
    question:
      "What is the difference between useEffect and useLayoutEffect in React?",
    answer:
      "Both useEffect and useLayoutEffect handle side effects but differ in timing:\n- useEffect runs asynchronously after the DOM has been painted, suitable for data fetching or subscriptions.\n- useLayoutEffect runs synchronously after DOM updates but before the browser paints, useful for measuring DOM elements or adjusting layout.",
    example: `import React, { useEffect, useLayoutEffect, useRef } from 'react';

function example() {
  const ref = useRef();

  useEffect(() => {
    console.log('useEffect: Runs after DOM paint');
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect: Runs before DOM paint');
    console.log('Element width:', ref.current.offsetWidth);
  });

  return <div ref={ref}>Hello</div>;
}`,
    queType: "React",
  },
  {
    id: 27,
    question: "What does the dependency array of useEffect affect?",
    answer:
      "The dependency array controls when a useEffect runs:\n- Empty array [] → runs only once after initial render.\n- With variables → runs whenever those variables change.\n- No array → runs after every render.",
    queType: "React",
  },
  {
    id: 28,
    question: "What is the useRef hook in React and when should it be used?",
    answer:
      "The useRef hook creates a mutable object that persists through renders. It allows direct access to DOM elements, stores mutable values without triggering re-renders, and keeps stable references across renders.",
    example: `import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  return <input ref={inputEl} type="text" />;
}`,
    queType: "React",
  },
  {
    id: 29,
    question:
      "What is the purpose of callback function argument format of setState() in React class components and when should it be used?",
    answer:
      "The callback format of setState ensures updates are based on the most current state and props. This is crucial when new state depends on previous state, preventing issues caused by asynchronous updates.",
    example: `this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment,
}));`,
    queType: "React",
  },
  {
    id: 30,
    question:
      "What is the useCallback hook in React and when should it be used?",
    answer:
      "The useCallback hook memoizes functions to prevent recreation on every render. It's useful when passing callbacks to optimized child components that rely on reference equality to avoid unnecessary renders.",
    example: `const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`,
    queType: "React",
  },
  {
    id: 31,
    question: "What is the useMemo hook in React and when should it be used?",
    answer: `The useMemo hook memoizes costly calculations, recomputing them only when dependencies change. This enhances performance by avoiding unnecessary recalculations. It should be used for computationally intensive functions that don't need to run on every render.`,

    example: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`,
  },
  {
    id: 32,
    question:
      "What is the useReducer hook in React and when should it be used?",
    answer: `The useReducer hook manages complex state logic in functional components, serving as an alternative to useState. It's ideal when state has multiple fields, or when the next state relies on the previous one.`,

    example: `
const [state, dispatch] = useReducer(reducer, initialState);`,
  },
  {
    id: 33,
    question: "What is the useId hook in React and when should it be used?",
    answer: `The useId hook generates unique IDs for elements within a component, which is crucial for accessibility by linking form inputs and labels. It guarantees unique IDs across the application even if the component renders multiple times.
`,
    example: `
import { useId } from 'react';
function MyComponent() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" />
    </div>
  );
}`,
  },
  {
    id: 34,
    question: "Can you explain how to create and use custom hooks in React?",
    answer: `Custom hooks are functions that start with 'use' and allow you to reuse stateful logic across components.`,

    example: `
function useForm(initialState) {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return [formData, handleChange];
}`,

    Usage: `
function MyForm() {
  const [formData, handleChange] = useForm({ name: '', email: '' });
  return <input name="name" value={formData.name} onChange={handleChange} />;
}`,
  },
  {
    id: 35,
    question: "What does re-rendering mean in React?",
    answer: `Re-rendering in React is the process of updating the UI in response to changes in a component's state or props. React recalculates JSX, compares it with the previous version using the Virtual DOM, and updates only the changed parts of the real DOM.`,
  },
  {
    id: 36,
    question: "What is forwardRef() in React used for?",
    answer: `forwardRef() allows passing a ref through a component to one of its children. Useful for accessing a DOM element or a child component's instance directly from a parent.
`,
    example: `
import React, { forwardRef } from 'react';
const MyComponent = forwardRef((props, ref) => <input ref={ref} {...props} />);`,
  },
  {
    id: 37,
    question: "What are error boundaries in React for?",
    answer: `Error boundaries catch JavaScript errors in child components, log them, and display a fallback UI instead of crashing the app. They use componentDidCatch and getDerivedStateFromError.`,
  },
  {
    id: 38,
    question: "What is React Suspense?",
    answer: `React Suspense allows handling asynchronous operations with fallback content while resources load. Often used with React.lazy() for code splitting.
`,
    example: `
const LazyComponent = React.lazy(() => import('./LazyComponent'));
function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}`,
  },
  {
    id: 39,
    question: "Explain what React hydration is?",
    answer: `Hydration is the process of attaching event listeners and making server-rendered HTML interactive on the client side. After SSR, React hydrates the static HTML into a fully interactive app.`,
  },
  {
    id: 40,
    question: "What are React Portals used for?",
    answer: `React Portals let you render children into a DOM node outside the parent component’s hierarchy. Useful for modals, tooltips, and popups that must escape CSS constraints.`,
  },
  {
    id: 41,
    question: "What is React strict mode and what are its benefits?",
    answer: `React Strict Mode is a development feature that activates extra checks and warnings without affecting production builds.

Benefits:
- Detects unsafe/deprecated lifecycle methods
- Identifies side effects inside render
- Warns about unexpected state changes
- Enforces best practices
`,
    example: `
<React.StrictMode>
  <App />
</React.StrictMode>`,
  },
  {
    id: 42,
    question: "What is code splitting in a React application?",
    answer: `Code splitting divides code into smaller chunks loaded on demand, improving performance by reducing initial bundle size. Achieved via dynamic import() or React.lazy + Suspense.
`,
    example: `
const LazyComponent = React.lazy(() => import('./LazyComponent'));
function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}`,
  },
  {
    id: 43,
    question:
      "How would one optimize the performance of React contexts to reduce rerenders?",
    answer: `Ways to optimize context performance:
- Memoize context values using useMemo
- Split contexts so only related state updates re-render consumers
- Use selectors to limit updates to necessary components
`,
    example: `
const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);`,
  },
  {
    id: 44,
    question: "What is the Flux pattern?",
    answer: `Flux is an architecture for managing application state with unidirectional data flow. It includes:
- Dispatcher: Central hub for actions
- Actions: Objects describing events
- Stores: Hold application state and logic
- Views: React components listening to stores`,
  },
  {
    id: 45,
    question: "Explain one-way data flow of React",
    answer: `In React, data flows in a single direction: from parent → child via props. To update parent data, children call callback functions passed down as props.
`,
    example: `
function Parent() {
  const [count, setCount] = React.useState(0);
  return <Child count={count} increment={() => setCount(count + 1)} />;
}
function Child({ count, increment }) {
  return <button onClick={increment}>Count: {count}</button>;
}`,
  },
  {
    id: 46,
    question: "What are some pitfalls of using context in React?",
    answer: `Pitfalls:
- Can cause unnecessary re-renders of all consuming components
- Overuse can make code harder to maintain
- Not ideal for frequently updated or complex state
Best for lightweight global data (e.g., theme, user auth).`,
  },
  {
    id: 47,
    question: "What are some React anti-patterns?",
    answer: `Common anti-patterns:
- Directly mutating state
- Using componentWillMount for data fetching
- Overusing componentWillReceiveProps
- Missing keys or using array index as keys in lists
- Excessive inline functions in render
- Deeply nested state structures`,
  },
  {
    id: 48,
    question:
      "How do you decide between using React state, context, and external state managers?",
    answer: `Choice depends on app complexity:
- Local component state → use React useState
- Shared lightweight global state → use Context
- Complex/global state with advanced features (e.g., middleware, time travel) → use external managers like Redux, MobX, Zustand`,
  },
  {
    id: 49,
    question: "Explain what happens when setState is called in React?",
    answer: `When setState (or useState's setter) is called:
1. React schedules a state update (may batch multiple updates)
2. Component re-renders with updated state
3. Virtual DOM diffing determines necessary DOM changes
Note: Updates may be asynchronous for performance.
`,
    example: `
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`,
  },
  {
    id: 50,
    question: "Explain prop drilling",
    answer: `Prop drilling happens when data is passed through many layers of components that don’t use it, just to reach a deeply nested child.
`,
    example: `
function Grandparent() {
  const data = 'Hello';
  return <Parent data={data} />;
}
function Parent({ data }) {
  return <Child data={data} />;
}
function Child({ data }) {
  return <p>{data}</p>;
}

//This works for small apps, but Context or external state managers are better for deeply nested/shared state.`,
  },
  {
    id: 51,
    question: "Describe lazy loading in React",
    answer: `Lazy loading is a technique where components are loaded only when they are needed, reducing initial load time and improving performance.
`,
    example: `
import React, { Suspense, lazy } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`,
  },
  {
    id: 52,
    question: "Discuss synthetic events in React",
    answer: `Synthetic events are React's cross-browser wrapper around native DOM events. They normalize event handling and provide consistent APIs (e.g., preventDefault, stopPropagation). React uses event pooling for performance.
`,
    example: `
function MyComponent() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('Button clicked');
  };
  return <button onClick={handleClick}>Click me</button>;
}`,
  },
  {
    id: 53,
    question:
      "Explain the React component lifecycle methods in class components.",
    answer: `Class components lifecycle phases:

Mounting:
- constructor: initialize state, bind methods
- componentDidMount: runs after first render (API calls, subscriptions)

Updating:
- shouldComponentUpdate: decide if re-render is needed
- componentDidUpdate: runs after updates (side effects)

Unmounting:
- componentWillUnmount: cleanup (event listeners, timers)`,
  },
  {
    id: 54,
    question:
      "What is Concurrent Mode in React, and how does it improve rendering performance?",
    answer: `Concurrent Mode lets React interrupt and prioritize work, handling multiple tasks without blocking the UI. It improves responsiveness by breaking rendering into smaller units and prioritizing urgent updates.`,
  },
  {
    id: 55,
    question:
      "How does React handle concurrent rendering with multiple updates and prioritize them?",
    answer: `React uses a priority system in Concurrent Mode. It schedules updates, breaking large ones into smaller chunks, prioritizing urgent user interactions (e.g., typing, clicks) over less urgent updates (e.g., rendering a list).`,
  },
  {
    id: 56,
    question:
      "How would you handle long-running tasks or expensive computations in React applications without blocking the UI?",
    answer: `Approaches:
- Offload work to Web Workers
- Use setTimeout/requestIdleCallback to defer tasks
- Break tasks into smaller chunks
- Use useMemo to memoize heavy computations
`,
    example: `
useEffect(() => {
  setTimeout(() => {
    const result = computeExpensiveData();
    setData(result);
  }, 0);
}, []);`,
  },
  {
    id: 57,
    question:
      "Explain server-side rendering of React applications and its benefits",
    answer: `Server-side rendering (SSR) renders React components on the server, sending fully formed HTML to the client. Benefits:
- Faster initial load (HTML is ready to display)
- Better SEO (search engines crawl HTML)
- Efficient hydration process on client`,
  },
  {
    id: 58,
    question: "Explain static generation of React applications",
    answer: `Static generation pre-renders pages into HTML at build time instead of runtime. Benefits:
- Very fast performance (static files served by CDN)
- SEO friendly
- Ideal for content-driven sites (blogs, docs)`,
  },
  {
    id: 59,
    question: "What are higher-order components in React?",
    answer: `HOCs are functions that take a component and return a new one with enhanced behavior/props. Useful for reusing logic across multiple components.
`,
    example: `
const withExtraProps = (Wrapped) => {
  return (props) => <Wrapped {...props} extraProp="value" />;
};
const EnhancedComponent = withExtraProps(MyComponent);`,
  },
  {
    id: 60,
    question:
      "Explain the presentational vs container component pattern in React",
    answer: `Pattern divides components by responsibility:

- Presentational components: Focus on UI (HTML, CSS), receive data via props, stateless.
- Container components: Manage state, data fetching, business logic, pass props to presentational components.

This separation improves maintainability and reusability.`,
  },
  {
    id: 61,
    question: "What are render props in React?",
    answer: `Render props allow code sharing between components via a prop that is a function returning React elements. This enables data or logic to be reused.
`,
    example: `
class DataFetcher extends React.Component {
  state = { data: null };
  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return this.props.render(this.state.data);
  }
}
// Usage:
<DataFetcher url="/api/data" render={(data) => <div>{data ? data.name : 'Loading...'}</div>} />`,
  },
  {
    id: 62,
    question: "Explain the composition pattern in React.",
    answer: `Composition builds UIs by combining smaller components instead of inheritance. Components are passed as children or props.
`,
    example: `
function Dialog(props) {
  return <div className="dialog">{props.children}</div>;
}
function WelcomeDialog() {
  return (
    <Dialog>
      <h1>Welcome</h1>
      <p>Thanks for visiting our spacecraft!</p>
    </Dialog>
  );
}`,
  },
  {
    id: 63,
    question: "How do you re-render the view when the browser is resized?",
    answer: `Listen for the resize event, store dimensions in state, and re-render.
`,
    example: `
function ResizeComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return <div>Window width: {width}px</div>;
}`,
  },
  {
    id: 64,
    question:
      "How do you handle asynchronous data loading in React applications?",
    answer: `Use useEffect for fetching and useState for tracking results.
`,
    example: `
const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.example.com/data');
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>;
};`,
  },
  {
    id: 65,
    question:
      "What are some common pitfalls when doing data fetching in React?",
    answer: `Pitfalls include:
- Not handling loading & error states
- Forgetting cleanup of subscriptions → memory leaks
- Fetching inside wrong lifecycle (causes multiple requests)
- Not canceling stale requests when component unmounts`,
  },
  {
    id: 66,
    question: "What is a React Router?",
    answer: `React Router is a library for client-side routing in React apps. It maps URL paths to components, enabling navigation without reloading the page.`,
  },
  {
    id: 67,
    question:
      "How does React Router work, and how do you implement dynamic routing?",
    answer: `It matches URLs to components. Dynamic routing uses parameters.
`,
    example: `
function UserPage() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
<Routes>
  <Route path="/user/:id" element={<UserPage />} />
</Routes>`,
  },
  {
    id: 68,
    question:
      "How do you handle nested routes and route parameters in React Router?",
    answer: `Use <Outlet> for nested UI and useParams for dynamic params.
`,
    example: `
<Routes>
  <Route path="user/:userId" element={<Outlet />}>
    <Route path="profile" element={<UserProfile />} />
  </Route>
</Routes>
function UserProfile() {
  const { userId } = useParams();
  return <h2>User: {userId}</h2>;
}`,
  },
  {
    id: 69,
    question: "What is the difference between BrowserRouter and HashRouter?",
    answer: `- BrowserRouter: Uses HTML5 history API, clean URLs (requires server setup for deep links).
- HashRouter: Uses URL hash (#) for routes, no server setup needed, works well for static hosting.`,
  },
  {
    id: 70,
    question: "How React Router is different from the history library?",
    answer: `- React Router: Full routing solution → maps routes to components, manages navigation, nested routes, etc.
- history: Low-level library that just manages browser history stack (push, replace, go). React Router uses history internally.`,
  },
  {
    id: 71,
    question: "What are the <Router> components of React Router v6?",
    answer: `<BrowserRouter>: Uses HTML5 history API, common for web apps.
<HashRouter>: Uses URL hash fragments (#), good for static hosting or old browsers.
<MemoryRouter>: Keeps history in memory (no URL change), used in tests or non-browser envs.
<StaticRouter>: Used for server-side rendering (SSR) in Node.js.
All provide the same routing functionality but suit different environments.`,
  },
  {
    id: 72,
    question: "What is the purpose of the push and replace methods of history?",
    answer: `push(): Adds a new entry to the history stack → user can go back.
Example: history.push('/new-page')

replace(): Replaces current entry → user cannot go back.
Example: history.replace('/new-page')`,
  },
  {
    id: 73,
    question: "How do you navigate programmatically in React Router?",
    answer: `In React Router v6: useNavigate hook.`,
    example: `
const navigate = useNavigate();
<button onClick={() => navigate('/new-page')}>Go</button>

In React Router v5: useHistory hook.
Example:
const history = useHistory();
<button onClick={() => history.push('/new-page')}>Go</button>`,
  },
  {
    id: 74,
    question:
      "How would you implement route guards or private routes in React?",
    answer: `Wrap routes in a PrivateRoute component that checks authentication.
`,
    example: `
function PrivateRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}`,
  },
  {
    id: 75,
    question:
      "How do you manage the active route state in a multi-page React application?",
    answer: `Use useLocation to get current path and apply active styles.
`,
    example: `
const location = useLocation();
<li className={location.pathname === '/home' ? 'active' : ''}>Home</li>`,
  },
  {
    id: 76,
    question: "How do you handle 404 errors or page not found in React Router?",
    answer: `Add a catch-all route at the end.
`,
    example: `
<Route path="*" element={<NotFound />} />
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}`,
  },
  {
    id: 77,
    question: "How to get query parameters in React Router?",
    answer: `Use useSearchParams in v6.
`,
    example: `
const [searchParams] = useSearchParams();
const param = searchParams.get('id');`,
  },
  {
    id: 78,
    question:
      "How do you perform an automatic redirect after login in React Router?",
    answer: `Use useNavigate after successful login.
`,
    example: `
const navigate = useNavigate();
function handleLogin() {
  // auth logic
  navigate('/dashboard');
}`,
  },
  {
    id: 79,
    question: "How do you pass props to a route component in React Router?",
    answer: `In v6, pass props via the element prop.
`,
    example: `
<Route path="/my-route" element={<MyComponent propValue="Hello" />} />`,
  },
  {
    id: 80,
    question: "How do you localize React applications?",
    answer: `Use libraries like react-i18next or react-intl.
Define translation files and use hooks/components to translate.
`,
    example: `// Example using react-i18next
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <p>{t('welcome_message')}</p>;
};`,
  },
];
