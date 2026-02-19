import React from 'react' //suitable for one page apps
import {Routes, Route} from 'react-router-dom'
import './App.scss'; //stylesheet

import Layout from './pages/layout/layout.component.jsx';
import Desktop from './pages/desktop/desktop.page.jsx';
import TerminalPage from './pages/terminal/terminal.page.jsx';
import Home from './pages/home/home.page.jsx';
import About from './pages/about/about.page';
import Projects from './pages/projects/projects.page';
import Contact from './pages/contact/contact.page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Desktop/>}/>
        <Route path='/terminal' element={<TerminalPage/>}/>
        <Route path='/' element={<Layout/>}> //parent-child relationship
          <Route path='legacy' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='contact' element={<Contact/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
