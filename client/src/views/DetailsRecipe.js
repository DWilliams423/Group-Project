import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import '../App.css';

const DetailsRecipe = (props) => {
    const {id} = props;
    const [recipe, setRecipe] = useState([]);
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeImg, setRecipeImg] = useState("");
    const [recipeBriefDescrip, setRecipeBriefDescrip] = useState("");
    const [recipeIngredients, setRecipeIngredients] = useState("");
    const [recipeInstructions, setRecipeInstructions] = useState("");
    const [errors,setErrors] = useState([]);

    useEffect(() => { 
        axios.get(`http://localhost:8000/api/recipe/${id}`)
            .then(res => {
                setRecipeTitle(res.data.recipeTitle)
                setRecipeImg(res.data.recipeImg)
                setRecipeBriefDescrip(res.data.recipeBriefDescrip)
                setRecipeIngredients(res.data.recipeIngredients)
                setRecipeInstructions(res.data.recipeInstructions)
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
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
        <>
        <div style={{border: "1px solid black"}}>
            Hello
        </div>
        <button style={{backgroundColor: "red", color:"white"}} onClick={(e) => { deleteRecipe(recipe._id) }}><b><u>Delete</u> {`${recipeTitle}`}</b> </button>
        </>
    )
}

export default DetailsRecipe;