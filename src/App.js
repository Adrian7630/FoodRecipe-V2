import React, { useState, useEffect } from 'react';
import './App.css';
import chef from './img/chef.jpg';

import Recipe from './Recipe.js';

const App = () => {

  const APP_ID = 'ead8baec';
  const APP_KEY = "f2fb816ef91943295f62bbcc84c98f46";

  const [recipes, setRecipes] = useState ([]);
  const [search, setSearch] = useState ("");
  const [query, setQuery] = useState ('');
  const [box, setBox] = useState ('Show-box');

  const Req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect (() => { getRecipes(); }, [query]);

  const getRecipes = async () => {

    const response = await fetch(Req)    // wait and get the data !  
    const data = await response.json();       // format it so we can work with it 
    setRecipes(data.hits);

  }

  const updateSearch = (e) => {

    setSearch(e.target.value)

  }

  const getSearch = e => {

    e.preventDefault();
    setBox( ( search === '') ? 'Show-box' : "sand");

    setQuery(search)

  }

  return (
    <div className="App">

      <form onSubmit = { getSearch } className = "search-form">

        <input className = "search-bar" type = "text" value = { search } onChange = { updateSearch } />

        <button className = "search-button" type = "submit">Search</button>

      </form>

      <div className = { box }>

        <div className = "box-data">

          <h1>Find your food snack with just a click of a button !</h1>
          <img src = { chef } />
          <p>Just search the main ingridient you want , and find a quick recipe .</p>

        </div>

      </div>

      <div className = "recipes">

        {recipes.map(item => (

          <Recipe 
            key = { item.recipe.label }
            title = { item.recipe.label } 
            calories = { item.recipe.calories } 
            image = { item.recipe.image} 
            ingredients = { item.recipe.ingredients }
          />

        ))}

      </div>

    </div>
  );
}

export default App;
