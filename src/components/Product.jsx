import React, { useEffect, useState } from "react";

const Product = () => {
 const [meals,setMeals] = useState([]);

 useEffect(()=>{
  fetchItems();
 },[])

 const fetchItems= async()=>{
  const data = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
  const {meals} = await data.json();
  console.log(meals);
  setMeals(meals);
 }

  return <div>
    {
        meals?.map(meal=>
          <h1 key={meal.idMeal} >{meal.strMeal}</h1>
          )
    }
  </div>;
};

export default Product;
