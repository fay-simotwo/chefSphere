import React from "react";
import { useParams } from "react-router-dom";
import ChefProfile from "./ChefProfile";
import chefsData from "../data/chefsData.json";
import NotFoundImage from "../assets/404-error-pana.png";

const ChefProfiles = () => {
  const { chefName } = useParams();
  const chef = chefsData.find(
    (chef) =>
      `${chef.email}` ===
      chefName
  );

  return (
    <div className="container mx-auto p-4">
      {!chef && (
       <div className="container mx-auto p-4 flex justify-center items-center h-screen ">
       <div className="flex justify-center items-center">
       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
           <img
             src={NotFoundImage}
             alt="404 Not Found"
             className="w-32 h-32 mb-4 mx-auto"
           />
           <h1 className="text-red-500 text-2xl mb-2 text-center">Something went wrong</h1>
           <p className="text-gray-600 text-base text-center">The page you are looking for was moved, removed, renamed<br/> or might never existed!</p>
         </div>
       </div>
     </div>
      )}

      {chef && <ChefProfile chef={chef} />}
    </div>
  );
};

export default ChefProfiles;
