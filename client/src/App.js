import './App.css';

import React from "react";
import { Router } from '@reach/router';

// Component imports
import NavBar from './components/NavBar';

// View imports
import Dashboard from './views/Dashboard';
import Recipes from './views/Recipes';
import CreateRecipe from './views/CreateRecipe';
import ViewRecipe from './views/ViewRecipe';
import EditRecipe from './views/EditRecipe';
import DetailsRecipe from './views/DetailsRecipe';


function App() {
  return (
    <div className="App container-fluid min-vh-100">
      <NavBar />
      <Router>
        <Dashboard path="/" />
        <Recipes path="recipes" />
        <CreateRecipe path="createrecipe" />
        <ViewRecipe path="viewrecipe" />
        <EditRecipe path="editrecipe" />
        <DetailsRecipe path="detailsrecipe/:id" />
      </Router>
    </div>
  );
}

export default App;
