
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/LayoutComponent';
import Teams from './components/Teams';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LayoutComponent />} >
        <Route path="/" element={<Home />} /> 
        <Route path="/teams" element={<Teams />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
