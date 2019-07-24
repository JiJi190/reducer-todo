import React from 'react';
import './App.css';
import { reducer, initialState } from "./reducers/reducer";
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList initialState={initialState} />
    </div>
  );
}

export default App;
