import React from 'react';
import profileImage from '../assets/img/profile.jpg'; // Update the path to your profile image
import '../assets/css/ProfileSection.css';

function ProfileSection() {
  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200">
        <div className="flex flex-col items-center space-y-6">
            <img src={profileImage} alt="Luca Matei" className="rounded-full h-40 w-40 shadow-lg" />
            <h2 className="text-2xl text-blue-700">Luca Matei</h2>
            <p className="text-center text-lg">Full Stack Developer specializing in Web Technologies and Artificial Intelligence</p>
            <ul className="flex justify-center space-x-4">
                <li>
                    <a href="/cdn-cgi/l/email-protection#..." className="hover:text-blue-400">
                        <i className="fas fa-envelope fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lucamatei" className="hover:text-blue-400">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/luca-matei" className="hover:text-blue-400">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://gitlab.com/lucamatei" className="hover:text-blue-400">
                        <i className="fab fa-gitlab fa-2x"></i>
                    </a>
                </li>
            </ul>
            <div className="flex items-center space-x-4">
                <a href="../assets/files/cv-luca-matei-en.pdf" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">Download CV</a>
                <span className="text-sm">€25 per hour</span>
            </div>
            <p className="text-xs text-gray-500 mt-4">Information is being updated and will be finalized in several days.</p>
        </div>
    </div>
  );
}

export default ProfileSection;
