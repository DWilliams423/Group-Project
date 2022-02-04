import React from "react";
import { Link } from "@reach/router";
//import '../App.css';

const NavBar = () => {
    return (
        <div className="container-fluid max-vh-10">
            <div className=" row text-center">
                <h1 >A food blog</h1>
                <h4>by people who eat food</h4>
            </div>

            <header className="row flex-nowrap">
                {/* Navbar start */}
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/"><li className="Nav-Item">Home</li></Link>
                            <Link to="/recipes"><li className="Nav-Item">All Recipes</li></Link>
                            <Link to="/createrecipe"><li className="Nav-Item">Create Recipe</li></Link>
                            <Link to="about"><li className="Nav-Item">About</li></Link>
                        </ul>
                    </div>
                </nav>
                {/* Navbar end */}
            </header>

            <hr />
        </div>
    )
}

export default NavBar;