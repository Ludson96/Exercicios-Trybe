import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

  // src/App.test.js
// ...
describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});

// src/App.test.js
// ...
// Utilizaremos o seletor `getByText` para retornar o nó correspondente a uma consulta de texto
test('a click in a button should increment the value of clicks', () => {
  renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

});
  expect(screen.getByText('5')).toBeInTheDocument();