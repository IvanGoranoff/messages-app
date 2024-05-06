import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import ThreadsList from './components/ThreadsList';
import FooterComponent from './components/FooterComponent';
import './styles/main.scss';

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <main>
        <ThreadsList />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
