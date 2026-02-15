import React, { useContext, useState, useRef } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

const ProfileInfoCard = () => {
  const { user, clearUser, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editName, setEditName] = useState(user?.name || "");
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEditProfile = () => {
    setEditName(user?.name || "");
    setPreviewImage(null);
    setIsEditModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    try {
      // Call your API to update user profile
      // Example: await axiosInstance.put(API_PATHS.USER.UPDATE, { name: editName, profileImage: previewImage });

      // Update local context (adjust based on your updateUser implementation)
      if (updateUser) {
        updateUser({
          ...user,
          name: editName,
          profileImageUrl: previewImage || user?.profileImageUrl,
        });
      }

      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setPreviewImage(null);
  };

  return (
    user && (
      <div className="relative">
        {/* Profile Card - Clickable */}
        <div
          onClick={handleProfileClick}
          className="group flex items-center gap-3 p-2 pr-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border border-purple-100 hover:border-purple-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
        >
          {/* Avatar with gradient ring */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-r from-purple-500 to-pink-500">
              <img
                src={user.profileImageUrl || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name || "User")}
                alt="Profile"
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></div>
          </div>

          {/* User info */}
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-800 leading-tight">
              {user.name || "User"}
            </span>
            <span className="text-xs text-purple-600 font-medium">
              View Profile
            </span>
          </div>

          {/* Dropdown arrow */}
          <svg
            className={`w-4 h-4 text-gray-400 ml-1 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsDropdownOpen(false)}
            />

            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-64 z-50 animate-fadeIn">
              <div className="bg-white rounded-2xl shadow-2xl shadow-purple-500/20 border border-purple-100 overflow-hidden">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full p-0.5 bg-white/20">
                      <img
                        src={user.profileImageUrl || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name || "User")}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold">{user.name || "User"}</p>
                      <p className="text-white/80 text-sm">{user.email || "user@email.com"}</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  <button
                    onClick={handleEditProfile}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">Edit Profile</p>
                      <p className="text-xs text-gray-500">Update name & photo</p>
                    </div>
                  </button>

                  <button
                    onClick={() => { navigate("/settings"); setIsDropdownOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">Settings</p>
                      <p className="text-xs text-gray-500">Preferences & more</p>
                    </div>
                  </button>

                  {/* Divider */}
                  <div className="my-2 border-t border-purple-100"></div>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-200 transition-colors">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-red-600">Logout</p>
                      <p className="text-xs text-gray-500">Sign out of account</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Edit Profile Modal */}
        {isEditModalOpen && ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={handleCloseModal}
            />

            {/* Modal */}
            <div className="relative z-50 w-full max-w-md max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-auto animate-scaleIn p-6">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-6 pb-16">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h2 className="text-xl font-bold text-white">Edit Profile</h2>
                <p className="text-white/80 text-sm mt-1">Update your personal information</p>
              </div>

              {/* Avatar Upload */}
              <div className="relative -mt-12 flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-50"></div>
                  <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-r from-purple-500 to-pink-500">
                    <img
                      src={previewImage || user.profileImageUrl || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name || "User")}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>

                  {/* Upload overlay */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>

              {/* Form */}
              <div className="p-6 pt-4">
                <p className="text-center text-sm text-gray-500 mb-6">
                  Click on the photo to change it
                </p>

                {/* Name Input */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Display Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-200 text-gray-800 font-medium"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleCloseModal}
                    className="flex-1 py-3 px-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveProfile}
                    disabled={isLoading}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

        {/* Animation Styles */}
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fadeIn {
              animation: fadeIn 0.2s ease-out forwards;
            }
            .animate-scaleIn {
              animation: scaleIn 0.2s ease-out forwards;
            }
          `}
        </style>
      </div>
    )
  );
};

export default ProfileInfoCard;
