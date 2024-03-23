import React, { useState } from "react";
import Modal from "./Modal";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const EditProfile = ({ chef, onClose, showModal }) => {
  const [editedChef, setEditedChef] = useState(chef);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedChef({
      ...editedChef,
      [name]: value,
    });
  };

  const saveProfileToFirebase = async () => {
    try {
      // Update the document in Firebase with the editedChef data
      const docRef = doc(db, "chefs", chef.id);
      await updateDoc(docRef, editedChef);
      console.log("Profile updated successfully in Firebase!");
  
      // After successful update, update the state with the editedChef
      setEditedChef((prevChef) => ({ ...prevChef, ...editedChef }));
      console.log("State updated with edited chef data:", editedChef);

    } catch (error) {
      console.error("Error updating profile in Firebase:", error);
    }
  };
  
  const handleSave = () => {
    saveProfileToFirebase();
    onClose();
  };

  return (
    <>
      {showModal && (
        <Modal onClose={onClose}>
          <div className="max-w-lg mx-auto">
            <div className="mb-4">
              <label
                htmlFor="first_name"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={editedChef.first_name}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="first_name"
                className="block text-gray-700 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={editedChef.last_name}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bio"
                className="block text-gray-700 font-bold mb-2"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={editedChef.bio}
                onChange={handleInputChange}
                className="appearance-none border rounded h-32 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="years_of_experience"
                className="block text-gray-700 font-bold mb-2"
              >
                Years of Experience
              </label>
              <input
                type="number"
                id="years_of_experience"
                name="years_of_experience"
                value={editedChef.years_of_experience}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="position"
                className="block text-gray-700 font-bold mb-2"
              >
                Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={editedChef.work.position}
                onChange={(e) =>
                  setEditedChef({
                    ...editedChef,
                    work: { ...editedChef.work, position: e.target.value },
                  })
                }
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="restaurant"
                className="block text-gray-700 font-bold mb-2"
              >
                Restaurant
              </label>
              <input
                type="text"
                id="restaurant"
                name="restaurant"
                value={editedChef.work.restaurant}
                onChange={(e) =>
                  setEditedChef({
                    ...editedChef,
                    work: { ...editedChef.work, restaurant: e.target.value },
                  })
                }
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-slate-950 text-white px-4 py-2 rounded mt-4 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full"
                >
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default EditProfile;
