# `useMemo` Hook in React

The `useMemo` hook is a React feature that allows you to memoize the result of a computation, preventing unnecessary recalculations on every render. It is useful for optimizing performance, especially when dealing with expensive calculations or rendering large lists.

## Syntax

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- The first argument is a function that returns the computed value.
- The second argument is an array of dependencies. The computation runs only when one of the dependencies changes.

## When to Use `useMemo`

- **Expensive Calculations:** When you have a function that performs heavy computation and its result does not need to be recalculated on every render.
- **Referential Equality:** When you want to prevent unnecessary re-renders of child components by ensuring that objects or arrays passed as props only change when necessary.
- **Optimizing Performance:** In large lists or complex UI trees, `useMemo` can help avoid unnecessary work.

## Example

```js
import React, { useMemo } from "react";

function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.value - b.value);
  }, [items]);

  return (
    <ul>
      {sortedItems.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
}
```

**Note:** Only use `useMemo` for performance optimization when necessary. Premature optimization can make code harder to maintain.
