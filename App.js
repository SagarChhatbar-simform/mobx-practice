import Post from './components/Post'
import './App.css';
import React from 'react';
import storeInstance from './store/Store'

export const StoreContext = React.createContext();

function App() {
  return (
    <StoreContext.Provider value={storeInstance}>
        <Post />
    </StoreContext.Provider >
  );
}

export default App;
