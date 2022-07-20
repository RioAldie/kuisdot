import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './login';
import AnswerProvider from './service/context/answer';
import ScoreProvider from './service/context/ScoreContext';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <AnswerProvider>
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </AnswerProvider>
  </React.StrictMode>
);


