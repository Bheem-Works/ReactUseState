import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [saveOnChange, setSaveOnChange] = useState('');
  const [savePassword, setSavePassword] = useState('');
  const [saveBio, setSaveBio] = useState('');

  function userOnChange(e) {
    setUser(e.target.value);
  }

  function passwordOnChange(e) {
    setPassword(e.target.value);
  }

  function bioOnChange(e) {
    setBio(e.target.value);
  }

  function saveButton(e) {
    e.preventDefault(); // ✅ Important: Prevent page refresh
    if (!user || !password || !bio) {
    alert("Please fill in all the fields before saving!");
    return;
  }
    setSaveOnChange(user);
    setSavePassword(password);
    setSaveBio(bio);
    alert('Profile saved successfully!');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      <form className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
        {/* ✅ User Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/75.jpg"
            alt="User Avatar"
            className="w-24 h-24 rounded-full"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            onChange={userOnChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            onChange={bioOnChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Your Password</label>
          <input
            type="password"
            onChange={passwordOnChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Terms */}
        <div className="flex items-center mb-4">
          <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" required />
          <label className="ml-2 text-sm text-gray-600">
            I agree to the <a href="#" className="text-blue-600 underline">terms</a>
          </label>
        </div>

        {/* Save Button */}
        <button
          onClick={saveButton}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>

      {/* Saved Output Display */}
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold">Saved Name: {saveOnChange}</p>
        <p className="text-lg font-semibold">Saved Password: {savePassword}</p>
        <p className="text-lg font-semibold">Saved Bio: {saveBio}</p>
      </div>
    </div>
  );
}

export default UserProfile;
