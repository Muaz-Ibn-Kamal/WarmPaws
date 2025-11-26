import React, { useContext, useState } from "react";
import { AuthContext } from "../AouthContex/AouthContex";
import { getAuth, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const auth = getAuth();
      if (!auth.currentUser) throw new Error("No authenticated user");
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      toast.error(err?.message || "Profile update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <img
          src={photoURL || user?.photoURL || "/default-avatar.png"}
          alt={name || user?.displayName || "User"}
          className="w-32 h-32 rounded-full object-cover border-2 border-purple-500"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">{name || user?.displayName || "No Name"}</h3>
          <p className="text-gray-500">{user?.email || "No Email"}</p>
        </div>
      </div>

      <div className="mb-6 text-center">
        <button
          className={`btn ${editing ? "btn-outline" : "btn-primary"}`}
          onClick={() => {
            setName(user?.displayName || "");
            setPhotoURL(user?.photoURL || "");
            setEditing((v) => !v);
          }}
        >
          {editing ? "Cancel" : "Update Profile"}
        </button>
      </div>

      {editing && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Image URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter image URL"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MyProfile;
