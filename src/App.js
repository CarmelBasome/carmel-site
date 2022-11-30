import './index.css';
import {Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import About from './about';
import Job from './job';

function App() {
  return (
    <main className="App">
      <div className='App-width'>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/job' element={ <Job /> } />
        </Routes>
      </div>
    </main>
  );
}

export default App;
