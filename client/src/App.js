import React from 'react';
import {G_API} from './Utils'

function App() {

  G_API.searchBooks('harry potter')

  return (
    <div className="App">
      <h1>Get searchin'</h1>
    </div>
  );
}

export default App;
