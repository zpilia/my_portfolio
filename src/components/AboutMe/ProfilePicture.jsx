import React from 'react';
import profilePhoto from '../../assets/img/photo.jpg';

const ProfilePicture = () => {
    return (
        <div className="rounded-full overflow-hidden w-40 h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 mx-auto">
            <img
                src={profilePhoto}
                alt="Profile"
                className="object-cover w-full h-full"
            />
        </div>
    );
};

export default ProfilePicture;