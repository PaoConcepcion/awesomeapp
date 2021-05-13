import React, { useState } from "react";
import './App.css';
import Home from './components/home/Home';
import Exercises from './components/exercises/Exercises';
import NavigationBar from './components/common/NavigationBar/NavigationBar';
import { viewsEnum } from './utils/constants';

function App() {

  const [view, setView] = useState(viewsEnum.HOME);

  const handleNavigation = (newView) => {
    setView(newView);
  }

  let content = null;

  switch (view) {
    case viewsEnum.HOME:
      content = <Home />;
      break;
    case viewsEnum.EXERCISES:
      content = <Exercises />;
      break;

    default:
      content = <Home />;
  }

  return (
    <div>
      <NavigationBar view={view} onNav={handleNavigation} />
      {content}
    </div>
  );
}

export default App;
