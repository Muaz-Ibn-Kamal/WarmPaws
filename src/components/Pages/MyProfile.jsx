import React, { useContext, useState } from "react";
import { AuthContext } from "../AouthContex/AouthContex";
import { getAuth, updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user } = useContext(AuthContext);


  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const auth = getAuth();
      if (!auth.currentUser) throw new Error("No authenticated user");
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      setMessage("Profile updated successfully");
      setEditing(false);
    
    } catch (err) {
      setMessage(err?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>

      <div className="flex items-center gap-4 mb-4">
        <img
          src={user?.photoURL || ""}
          alt={user?.displayName || "User"}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <div className="font-medium">{user?.displayName || "No name"}</div>
          <div className="text-sm text-gray-600">
            {user?.email || "No email"}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            setName(user?.displayName || "");
            setPhotoURL(user?.photoURL || "");
            setEditing((v) => !v);
            setMessage("");
          }}
        >
          {editing ? "Cancel" : "Update Profile"}
        </button>
      </div>

      {editing && (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm">Image URL</label>
            <input
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? "Updating..." : "Save"}
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
    </div>
  );
};

export default MyProfile;
