import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import '../App.css';

const AllRecipes = () => {
    const [recipeList, setRecipeList] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipe')
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
            <div>
                <table>
                    <tbody>
                        {
                            recipeList ?
                                recipeList.map((recipe, index) => (
                                    <tr key={index}>
                                        <td className='Recipe-Table'>
                                            <div>
                                                <div className='Recipe-Card'>
                                                    <header>{recipe.recipeTitle}</header>
                                                    <img src={recipe.recipeImg} alt='Recipe'/>
                                                    <p>{recipe.recipeBriefDescrip}</p>
                                                </div>
                                            </div>
                                            
                                        </td>
                                    </tr>
                                ))
                                : null
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AllRecipes;