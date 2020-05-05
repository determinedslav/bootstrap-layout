import React from 'react';
import Home from './pages/Home';
import Header from './components/Header'

import './App.css';

const Layout = props => {
  return (
    <>
      <Header></Header>
      <div className="container pt-5">
        {props.children}
      </div>
    </>
  )
}

function App() {
  return (
    <Layout>
      <Home/>
    </Layout>
  );
}

export default App;
