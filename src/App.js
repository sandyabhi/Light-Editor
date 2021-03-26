import React, { useState } from 'react';
import './App.css';
import TextEditor from './TextEditor'

function App() {
  return (
    <>
      <div className="App">
        <header className="header"><h1>Light Editor</h1></header>
        <div className="Main">
          <TextEditor />
        </div>
      </div>

    </>
  )
}

export default App
