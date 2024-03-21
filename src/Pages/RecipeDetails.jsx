// // RecipeDetails.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const RecipeDetails = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:3000/Recipes/${id}`)
//       .then((response) => response.json())
//       .then((data) => setRecipe(data))
//       .catch((error) => console.error("Error fetching recipe:", error));
//   }, [id]);

//   if (!recipe) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{recipe.title}</h2>
//       <p>{recipe.description}</p>
//       <p>Preparation Time: {recipe.prepTime}</p>
//       <p>Cooking Time: {recipe.cookTime}</p>
//       <p>Servings: {recipe.servings}</p>
//       <h3>Ingredients:</h3>
//       <ul>
//         {recipe.ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient.quantity} {ingredient.unit} {ingredient.ingredient}</li>
//         ))}
//       </ul>
//       <h3>Instructions:</h3>
//       <ol>
//         {recipe.instructions.map((instruction, index) => (
//           <li key={index}>{instruction}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default RecipeDetails;
