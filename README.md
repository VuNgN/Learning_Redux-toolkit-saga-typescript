# React-redux-toolkit-saga-typescript

## Create project

### Using YARN:

```tsx
yarn create react-app <*project-name*> --template redux-typescript
```

### Using NPM:

```tsx
npx create-react-app <*project-name*> --template redux-typescript
```

![Untitled](React-redux-toolkit-saga-typescript%206c20ca60030646dfa5f1940051811884/Untitled.png)

## Start project

### Yarn:

```tsx
yarn start
```

### Npm:

```tsx
npm start
```

![Untitled](React-redux-toolkit-saga-typescript%206c20ca60030646dfa5f1940051811884/Untitled%201.png)

![Untitled](React-redux-toolkit-saga-typescript%206c20ca60030646dfa5f1940051811884/Untitled%202.png)

## Configuration project

### BaseUrl

Add the `"baseUrl": "./src"` in the *tsconfig.json* file

![Untitled](React-redux-toolkit-saga-typescript%206c20ca60030646dfa5f1940051811884/Untitled%203.png)

### Prettier config (option)

Create the Prettier config file in root folder project `/.prettierrc`

Go to [https://prettier.io/playground/](https://prettier.io/playground/) to render a config json online and paste to `.prettierrc` file

![Untitled](React-redux-toolkit-saga-typescript%206c20ca60030646dfa5f1940051811884/Untitled%204.png)

![Untitled](React-redux-toolkit-saga-typescript%206c20ca60030646dfa5f1940051811884/Untitled%205.png)

## Add Redux Saga

### Installation

```tsx
yarn add redux-saga
```

or

```tsx
npm install redux-saga
```

### Create a Saga middleware

Create a Saga Middleware and then, add this to default Redux's middleware 

```tsx
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
```

![Untitled](React-redux-toolkit-saga-typescript%206c20ca60030646dfa5f194005181188
