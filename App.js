import React from 'react';
import ReactDOM from 'react-dom/client';

const Child = () => <h1>this is child component 🚀</h1>

const Heading = () => {
  return ( <div>
    {Child()}
    <Child/>
    <h1>hello mydear beautiful people</h1>
  </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading />);