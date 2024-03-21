    import React from "react";
    import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

    const ChefProfile = ({ chef }) => {
    return (
        <div className="container mx-auto p-4 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
            {/* Avatar */}
            <div className="w-full md:w-1/3 ">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center mt-12 ">
                <img
                className="w-32 h-32 object-cover"
                src={chef.avatar}
                alt="Chef Avatar"
                />
            </div>
            <h1 className="text-5xl text-start font-bold mt-8">{`${chef.first_name} ${chef.last_name}`}</h1>
            <div className="flex mt-2 justify-start gap-5 mt-8 ">
                {chef.social_handles.facebook && (
                <a
                    href={chef.social_handles.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <FaFacebook className="text-slate-950 " size={20}/>
                </a>
                )}
                {chef.social_handles.instagram && (
                <a
                    href={chef.social_handles.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <FaInstagram className="text-slate-950" size={20}/>
                </a>
                )}
                {chef.social_handles.twitter && (
                <a
                    href={chef.social_handles.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter className="text-slate-950" size={20} />
                </a>
                )}
            </div>
            </div>
            {/* Biography */}
            <div className="w-full md:w-2/3 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-xl font-semibold mb-4">Biography</h1>
            <p>{chef.bio}</p>
            <hr className="border-t-2 border-neutral-950 my-4" />
            {/* Other Details */}
            <h1 className="text-xl font-semibold mb-4">Details</h1>
            <div className="mt-4 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Email:</p>
            <p className="text-gray-600 text-right">{chef.email}</p>
            <p className="text-gray-600">Years of Experience:</p>
            <p className="text-gray-600 text-right">{chef.years_of_experience}</p>
            <p className="text-gray-600">Work:</p>
            <p className="text-gray-600 text-right">{chef.work.position} at {chef.work.restaurant}</p>
          </div>
            </div>
        </div>
        </div>
    );
    };

    export default ChefProfile;
