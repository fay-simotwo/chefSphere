// Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { CiClock2, CiFaceSmile } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import StarRating from "./StarRating";
import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { IoIosSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

function RecipeCard({ recipe }) {
  const { id, name, time_allocations, servings, ratings, image, chef } = recipe;

  return (
    <div className="flex-shrink-0 max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="relative">
        <Link
          to={`/recipes/${id}`}
          className="absolute bottom-4 left-4 bg-slate-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Recipe
        </Link>
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute top-4 right-4 text-yellow-500">
          <FaBookmark />
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex gap-20">
          <div className="flex">
            <CiClock2 className="mt-1" />: {time_allocations.total.duration}{" "}
            {time_allocations.total.duration_description}{" "}
          </div>
          <div className="flex">
            <CiFaceSmile className="mt-1" /> : {servings}
          </div>
        </div>
        <div className="flex gap-20 mt-2 mb-2">
          <p className="text-gray-700 text-base">
            <StarRating rating={ratings.average_rating} />
          </p>
          <FaBookmark className="mt-0.5 flex-end" />
        </div>

        {chef && (
          <div className="flex items-center">
            <img
              src={chef.avatar}
              alt={chef.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span>{chef.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/Recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const handleSignOut = () => {
    // Add your sign-out logic here
    console.log("Signing out...");
  };
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  // Filter only bookmarked recipes
  const bookmarkedRecipes = recipes.filter((recipe) => recipe.isBookmarked);

  return (
    <>
      <div
        className={`flex justify-between p-2 ${
          darkTheme ? "bg-black text-white" : "bg-white text-gray-800"
        }`}
      >
        <div>
          <Logo className="mt-20" />
        </div>

        <div className="flex justify-between gap-3">
          <div className="flex space-x-4">
            <button
              onClick={toggleTheme}
              className={`hover:text-gray-400 ${
                darkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              {darkTheme ? (
                <IoIosSunny size={24} mb-4 />
              ) : (
                <MdDarkMode size={24} mb-4 />
              )}
            </button>
          </div>
          <div className="flex space-x-6">
            <button
              className="hover:text-black relative"
              onClick={handleSignOut}
            >
              <FaSignOutAlt className="size-6" />
              <span className="hidden absolute top-0 left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-black">
                Sign Out
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`flex items-center relative ${
          darkTheme ? "bg-gray-900" : ""
        }`}
      >
        <img
          src="https://i.pinimg.com/564x/88/f5/8e/88f58e38dd6bdd7c4c31523a58043733.jpg"
          alt="Delicious Recipes"
          className="w-full h-96 object-cover"
        />
        {/* <h1 className="font-serif text-5xl text-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Delicious Recipes
        </h1> */}
      </div>

      <div
        className={`container my-10 overflow-auto ${
          darkTheme ? " bg-black text-white" : "text-gray-800"
        }`}
        style={{ background: darkTheme ? "black" : "initial" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Most Popular</h2>
          <div className="flex space-x-4">
            <button className="text-gray-500">
              <BiSolidLeftArrowSquare className="size-10" />
            </button>
            <button className="text-gray-500">
              <BiSolidRightArrowSquare className="size-10" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bookmarkedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
