import './App.css';
import { Router } from '@reach/router';
import Dashboard from './views/Dashboard';
import NavBar from './components/NavBar';
import CreateRecipe from './views/CreateRecipe';
import Recipes from './views/Recipes';
import EditRecipe from './views/EditRecipe';
import DetailsRecipe from './views/DetailsRecipe';

function App() {
  return (
    <div className="App">
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
