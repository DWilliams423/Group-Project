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
import About from './components/About';


function App() {
  return (
    <div className="App container-fluid min-vh-100">
      <NavBar />
      <Router>
        <Dashboard path="/" />
        <Recipes path="recipes" />
        <CreateRecipe path="createrecipe" />
        <ViewRecipe path="/recipe/:id" />
        <EditRecipe path="/recipe/:id/edit" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
