import React from 'react';
import { Provider } from 'react-redux';
import Page from './page';
import 'normalize.css'
import 'animate.css'
import '@/styles/base.less'
import '@/styles/App.less'

const createApp = (store) => (
  <Provider store={store}>
    <Page />
  </Provider>
);

export default createApp;
