import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AouthContex/AouthContex";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPass } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const preEmail = location.state?.email || "";
  const [email, setEmail] = useState(preEmail);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preEmail) setEmail(preEmail);
  }, [preEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email", { position: "top-center" });
      return;
    }
    setLoading(true);
    resetPass(email)
      .then(() => {
        toast.success("Reset email sent. Redirecting to Gmail...", { position: "top-center" });
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.message || "Failed to send reset email", { position: "top-center" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-white px-4">
      <div className="card w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="input input-bordered focus:ring-2 focus:ring-purple-400 transition-all rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
            <button
              type="button"
              className="flex-1 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
