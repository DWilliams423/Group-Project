import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import '../App.css';

const DetailsRecipe = (props) => {
        const {id} = props;
        const [recipe, setRecipe] = useState("");
        const [recipeTitle, setRecipeTitle] = useState("");
        const [recipeImg, setRecipeImg] = useState("");
        const [recipeBriefDescrip, setRecipeBriefDescrip] = useState("");
        const [recipeIngredients, setRecipeIngredients] = useState("");
        const [recipeInstructions, setRecipeInstructions] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/${id}`)
            .then(res => {
                setRecipeTitle(res.data.recipeTitle)
                setRecipeImg(res.data.recipeImg)
                setRecipeBriefDescrip(res.data.recipeBriefDescrip)
                setRecipeIngredients(res.data.recipeIngredients)
                setRecipeInstructions(res.data.recipeInstructions)
            })
            .catch((err) => console.log(err))
    }, [id])
    const deleteRecipe = (recipeId) => {
        axios.delete(`http://localhost:8000/api/recipe/${id}`)
            .then((res) => {
                setRecipe(recipe.filter((recipe) => recipe._id !== recipeId));
                navigate("/");
            })
            .catch ((err) => console.log(err));
    }
    return (
        <div className="Recipe-Details">
            <div className='Rec-Score-Content'>
                <div className='Rec-Content'>
                    <p><b>{recipeTitle}</b></p>
                    <img src={recipeImg} alt='Recipe' />
                    <p><b>{recipeBriefDescrip}</b></p>
                    <p><u>Ingredients</u>: <b>{recipeIngredients}</b></p>
                    <p><u>Directions</u>: <b>{recipeInstructions}</b></p>
                </div>
            </div>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/")}}>Return Home</button>
            <button style={{backgroundColor: "red", color:"white"}} onClick={(e) => { deleteRecipe(recipe._id) }}><b><u>Delete</u> {`${recipeTitle}`}</b> </button>
        </div>
    )
}

export default DetailsRecipe;