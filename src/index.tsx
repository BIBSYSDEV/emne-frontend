import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore, Reducer, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import schema from './schema.json';
import uischema from './uischema.json';
import { Actions, jsonformsReducer, JsonFormsState } from '@jsonforms/core';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';
import RatingControl from './RatingControl';
import ratingControlTester from './ratingControlTester'

const data = {
    "@context": "something",
    identifier: "12345",
    preferredLabel: [
        {
            value: "prefLabel",
            lang: "EN",
        }
    ],
    alternativeLabel: [
        {
            value: "altLabel",
            lang: "EN",
        }
    ],
    related: ["related"],
    definition: "definition",
    seeAlso: ["seeAlso"],
};

const initState: JsonFormsState = {
    jsonforms: {
      cells: materialCells,
      renderers: materialRenderers
    }
  }

const rootReducer: Reducer<JsonFormsState, AnyAction> = combineReducers({ jsonforms: jsonformsReducer() });
const store = createStore(rootReducer, initState);

store.dispatch(Actions.init(data, schema, uischema));


// Uncomment this line (and respective import) to register our custom renderer
store.dispatch(Actions.registerRenderer(ratingControlTester, RatingControl));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
