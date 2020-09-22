import React from 'react';
import style from "./recipe.module.css";

const Recipe = ( { title, calories, image, ingredients } ) => {

    return (

        <div className = {style.recipe} >

            <h1>{title}</h1>
            <p> 
                { calories >= 2000 ? 
                    <span style = {{ color: "red"}}>{ Math.floor( calories ) }</span> : 
                    <span style = {{ color: "green"}}>{ Math.floor( calories ) }</span> 
                }
                - Kcal
            </p>
            <img className = {style.image} src = { image } alt = "food" ></img>
            <ol >
                {ingredients.map(ingredient => (

                <li key = { Math.floor(Math.random() * 10000) }>{ingredient.text}</li>

                ))}
            </ol>

        </div>

    );

};

export default Recipe;