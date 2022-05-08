
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/LayoutComponent';
import Teams from './components/Teams';
import Home from './components/Home';
import Players from './components/Players';
import Games from './components/Games';
import PlayerStats from './components/PlayerStats';
import GamesStats from './components/GamesStats';




function App() {



  return (
    <div className="App">
      <Routes>
        <Route element={<LayoutComponent />} >
        <Route path="/" element={<Home />} /> 
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:abbreviation" element={<Players/>} />
        <Route path="/teams/:abbreviation/players/:id" element={<PlayerStats />} />
        <Route path="/teams/games/:abbreviation" element={<Games />} />
        <Route path="/games/:id" element={<GamesStats />} />
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
