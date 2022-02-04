import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import '../App.css';

const AllRecipes = () => {
    const [recipeList, setRecipeList] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes')
            .then(res => {
                setRecipeList(res.data);
            })
            .catch(err => {
                console.log(err.res)
            })
    })

    return (
        <>
            {/* With server, should map new recipe from form to individual card */}
            <div className='Recipe-Table'>
                {
                    recipeList ?
                        recipeList.map((recipe, index) => (
                            <div key={index} >
                                <Link to={`/detailsrecipe/${recipe._id}`}>
                                    <div className='Recipe-Card'>
                                        <header>{recipe.recipeTitle}</header>
                                        <img className='Recipe-Img' src={recipe.recipeImg} alt='Recipe' />
                                        <p>{recipe.recipeBriefDescrip}</p>
                                    </div>
                                </Link>
                                <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate(`/editrecipe/${recipe._id}`)}}><b><u>Edit</u> {`${recipe.recipeTitle}`}</b> </button>
                            </div>
                        ))
                        : null
                }
            </div>
        </>
    )
}

export default AllRecipes;