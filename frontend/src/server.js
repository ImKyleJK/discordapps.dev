import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import App from './components/App';


module.exports = function render(initialState, url) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState);

  const context = {};

  // render the App store static markup ins content variable
  const content = renderToString(
    <Provider store={store} >
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState();

  return { content, preloadedState, context };
};
