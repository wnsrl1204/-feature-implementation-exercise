# Feature Implementation Exercise with React

## Purpose

Let's implement the necessary functions in most applications.

## Default Setup

Node version `v16.13.2`

### Create Practice Directory

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
npx create-react-app <name> --template typescript
```

### Clean-up Directorys

```
cd .\<name>\
rmdir -r .\public\
mkdir public

rmdir -r .\src\
mkdir src
```

### Create tsx files

`src/App.tsx`

```typescript
import React from "react";

const App = () => {
  return <div>App</div>;
};

export default App;
```

`src/index.tsx`

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`src/setupTests.ts`

jest-dom adds custom jest matchers for asserting on DOM nodes.

allows you to do things like:

expect(element).toHaveTextContent(/react/i)

learn more: [testing-library](https://github.com/testing-library/jest-dom)

```typescript
import "@testing-library/jest-dom";
```
