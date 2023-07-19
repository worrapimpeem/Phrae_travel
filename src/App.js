import AppHeader from './components/AppHeader';
import './App.css';

import {
  Routes,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav.js';

import Home from "./pages/Home/HomePage";
import Nature from "./pages/Nature/NaturePage";
import Restaurant from "./pages/Restaurant/RestaurantPage";
import Temple from "./pages/Temple/TemplePage";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Nav />
      <div className="container">
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/Nature' element={< Nature />}></Route>
          <Route exact path='/Restaurant' element={< Restaurant />}></Route>
          <Route exact path='/Temple' element={< Temple />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
