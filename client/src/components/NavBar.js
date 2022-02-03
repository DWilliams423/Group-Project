import React from "react";
import { Link } from "@reach/router";
import '../App.css';

const NavBar = () => {
    return (
        <div className="Nav-Bar">
            <div>
                <Link to="/"><header>Website Logo</header></Link>
            </div>
            <div>
                <ul className="Navigation">
                    <Link to="/recipes"><li className="Nav-Item">All Recipes</li></Link>
                    <Link to="createrecipe"><li className="Nav-Item">Create Recipe</li></Link>
                    <li className="Nav-Item">Profile</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;