// pages/docs.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Docs = () => {
  const codeString = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  function App() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  `;

  return (
    <div>
      <h1>Documentation</h1>
      <h2>Example Code Snippet:</h2>
      <SyntaxHighlighter language="javascript" style={tomorrow}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Docs;
