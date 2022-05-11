
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/LayoutComponent';
import Teams from './components/Teams';
import Home from './components/Home';
import Players from './components/Players';
import Games from './components/Games';
import PlayerStats from './components/PlayerStats';
import GamesStats from './components/GamesStats';
import NotFound from './Error Pages/NotFound';
import Error from './Error Pages/Error';




function App() {



  return (
    <div className="App">
      <Routes>
        <Route element={<LayoutComponent />} >
        <Route path="/" element={<Home />} /> 
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id/players" element={<Players/>} />
        <Route path="/teams/:id/players/:id/stats" element={<PlayerStats />} />
        <Route path="/teams/games/:id" element={<Games />} />
        <Route path="/games/:id" element={<GamesStats />} />
        <Route path="/*" element={ <NotFound /> }/>
        <Route path="/error" element={ <Error />}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
