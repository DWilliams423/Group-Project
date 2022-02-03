import './App.css';

import React from "react";
import { Router } from '@reach/router';

// Component imports
import NavBar from './components/NavBar';

// View imports
import Dashboard from './views/Dashboard';
import Recipes from './views/Recipes';
import EditRecipe from './views/EditRecipe';
import DetailsRecipe from './views/DetailsRecipe';
import CreateRecipe from './views/CreateRecipe';

function App() {
  return (
    <div className="App container-fluid min-vh-100">
      <NavBar />
      <Router>
        <Dashboard path="/" />
        <CreateRecipe path="createrecipe" />
        <Recipes path="recipes" />
        <EditRecipe path="editrecipe" />
        <DetailsRecipe path="detailsrecipe" />
      </Router>
    </div>
  );
}

export default App;
