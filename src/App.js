import React, {useState} from 'react'
import './App.scss';
import Header from './components/Header'
import Drawer from './components/Drawer'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true)
  return (
    <div className="App">
      <Router>
        <Header setDrawerOpen={setDrawerOpen}/>
        <div className="main">
          {drawerOpen ? <Drawer/> : null}
          <Main/>
        </div>
      </Router>
    </div>
  );
}

export default App;
