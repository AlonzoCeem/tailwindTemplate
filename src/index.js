import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter} from 'react-router-dom';

const App = ()=> {
  return (
    <>
      <h1 className='text-green-600'>Hello World!!</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
