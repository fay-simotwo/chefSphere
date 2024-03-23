import React, { useState } from "react";
import Modal from "./Modal";

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

  

  return (
    <>
      {showModal && (
        <Modal onClose={onClose}>
          <div className="max-w-lg mx-auto">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={editedChef.firstName}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={editedChef.lastName}
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
                htmlFor="yearsOfExperience"
                className="block text-gray-700 font-bold mb-2"
              >
                Years of Experience
              </label>
              <input
                type="number"
                id="yearsOfExperience"
                name="yearsOfExperience"
                value={editedChef.yearsOfExperience}
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
          </div>
        </Modal>
      )}
    </>
  );
};

export default EditProfile;
