import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditRecipeForm = (props) => {
    const {id} = props;
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
    const editRecipe = (e) => {
        e.preventDefault();
        const putEditData = {
            recipeTitle,
            recipeImg,
            recipeBriefDescrip,
            recipeIngredients,
            recipeInstructions,
        }
        axios.put(`http://localhost:8000/api/recipe/${id}`, putEditData)
            .then((res) => {
                console.log(res.data)
                // navigate("/");
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }
    return (
        <>
        <div style={{margin: "50px", padding:"10px", border:"1px solid black"}}>
            <form onSubmit={editRecipe}>
                <header><b><u>Edit {`${recipeTitle}`} Recipe</u></b></header>
                <p>
                    <label style={{margin: "5px"}}><b>Recipe Title:</b></label>
                    <input type="text" onChange={(e) => setRecipeTitle(e.target.value)} />
                    {errors.recipeTitle ?
                        <p style={{color: "red"}}><em>{errors.recipeTitle.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Recipe Image:</b></label>
                    <input type="text" onChange={(e) => setRecipeImg(e.target.value)} />
                    {errors.recipeImg ?
                        <p style={{color: "red"}}><em>{errors.recipeImg.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Brief Description:</b></label>
                    <input type="text" onChange={(e) => setRecipeBriefDescrip(e.target.value)} />
                    {errors.recipeBriefDescrip ?
                        <p style={{color: "red"}}><em>{errors.recipeBriefDescrip.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Ingredients:</b></label>
                    <textarea onChange={(e) => setRecipeIngredients(e.target.value)} />
                    {errors.recipeIngredients ?
                        <p style={{color: "red"}}><em>{errors.recipeIngredients.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Instructions:</b></label>
                    <textarea onChange={(e) => setRecipeInstructions(e.target.value)} />
                    {errors.recipeInstructions ?
                        <p style={{color: "red"}}><em>{errors.recipeInstructions.message}</em></p>
                        : null
                    }
                </p>
                <input type="submit" style={{backgroundColor: "red", color: "white"}} />
            </form>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/")}}>Return Home</button>
        </div>
        </>
    )
}

export default EditRecipeForm;