
import Topbar from './components/topbar/Topbar'

import Intro from './components/intro/Intro';

import Work from './components/Work/Work'

import Menu from './components/menu/Menu';
import './app.scss';
import {useState} from 'react'
function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className='app' >
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
<div className="sections">
  
<Intro/>
<Work/>


</div>
    </div>
  );
}

export default App;
