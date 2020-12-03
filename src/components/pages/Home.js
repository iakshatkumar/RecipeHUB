import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";


// importing Styles
import "../../App.css";


// importing other components
import Recipe from "../Recipe";
import Alert from "../Alert";


const Home = () => {
  // hooks
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "fd037b65";
  const APP_KEY = "565f99f59497bc3ff704e755eb7096ec";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  
  const getData = async () => {
    if (query != "") {
      const result = await Axios.get(url);

      if (!result.data.more) {
        return setAlert("No food with such name");
      }

      setRecipes(result.data.hits);
      console.log(result);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please Fill the field");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">

      <h1 onClick={getData}>Recipe HUB</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alertmessage={alert} />}
        <input
          type="text"
          placeholder="Enter Food Recipes . . ."
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default Home;
