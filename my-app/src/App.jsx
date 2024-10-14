import React, { useState } from 'react';
import EntryPage from './components/EntryPage';
import MainPage from './components/MainPage';

const App = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleEnter = () => {
    setShowMainPage(true);
  };

  return (
    <div className="App">
      {showMainPage ? <MainPage /> : <EntryPage onEnter={handleEnter} />}
    </div>
  );
};

export default App;