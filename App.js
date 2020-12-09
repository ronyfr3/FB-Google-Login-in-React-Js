import React, { useState } from 'react';
import Context from './Context';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';
import './App.css';

export const contextValue = React.createContext()

function App() {
  const [names,setNames] = useState('')
  const [picture,setPicture] = useState('')
  return (
    <Context>
      <contextValue.Provider value={{names,setNames,picture,setPicture}}>
    <div className="App">
      <Header/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
    </contextValue.Provider>
    </Context>
  );
}

export default App;
