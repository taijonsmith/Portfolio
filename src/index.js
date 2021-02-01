import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom_components/css/custom_styles.css';
import ErrorBoundary from './custom_components/error_boundary';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers'


const store = createStore(allReducers, {
  left_menu_opened: false,
  current_prototype: 1,
  mobile_mode: window.matchMedia("(max-width: 600px)").matches,
  dialog: {opened: false, type: 'info', title: null, content: null}
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();