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
        toast.success("Reset email sent. Redirecting to Gmail...", {
          position: "top-center",
        });
       
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.message || "Failed to send reset email", {
          position: "top-center",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20">
      <div className="card-body">
        <h2 className="text-xl font-semibold mx-auto">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
            <button type="button" className="btn" onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
