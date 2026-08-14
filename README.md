# react-state-kit

A production-ready React component library for common UI states (Loading, Empty, Error, Success, Offline).

## Installation

```bash
npm install @roshan__gowda/react-status-kit
```

## Usage

```jsx
import { LoadingState, EmptyState } from '@roshan__gowda/react-status-kit';
import '@roshan__gowda/react-status-kit/style.css'; // Important!

function App() {
  return (
    <>
      <LoadingState message="Loading data..." />
      <EmptyState message="No products found" />
    </>
  );
}
```

## Components
All components accept a `message` prop.
* `<LoadingState />`
* `<EmptyState />`
* `<ErrorState />`
* `<SuccessState />`
* `<OfflineState />`
