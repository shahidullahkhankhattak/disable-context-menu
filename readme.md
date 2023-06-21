# Disable Context Menu
This package is used to disable context menu / inspect element / right click in your web applications.

# Usage
1. First import the package in your application's root.
```js
import { disableContextMenu } from 'disable-context-menu';
```
2. Now call disableContextMenu in your applications.
e.x
```js
if (process.env.NODE_ENV === 'production') {
  disableContextMenu();
}
```

This can be used in react / vue / ember / venilla js applications.

## Examples
1. **React**
index.js (main entry of your react application) you can use like this
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { disableContextMenu } from 'disable-context-menu';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('react-app'));

if (process.env.NODE_ENV !== 'development') {
  disableContextMenu();
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

```

2. **Vue**
app.js (In your vue applications you can call this function in your root entrypoint file)
```js
import { createApp } from 'vue'
import { disableContextMenu } from 'disable-context-menu';

if (process.env.NODE_ENV !== 'development') {
  disableContextMenu();
}

const app = createApp({
  el: '#app'
})
```

3. **Angular**
app.component.ts (main bootstrap component in your application)
```ts
import { Component, OnInit } from '@angular/core';
import { disableContextMenu } from 'disable-context-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App implements OnInit {
  constructor() {}
  
  ngOnInit() {
    disableContextMenu();
  }
}

```