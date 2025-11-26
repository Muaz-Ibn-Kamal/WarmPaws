import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AouthContex/AouthContex";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const { singUpUser, googleLogin } = useContext(AuthContext);
  const [pass, setPass] = useState(false);
  const navigate = useNavigate();

  const handalRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const image = event.target.image.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain uppercase, lowercase & be at least 6 chars"
      );
      return;
    }

    singUpUser(email, password)
      .then((result) => {
        const profile = { displayName: name, photoURL: image };
        return updateProfile(result.user, profile);
      })
      .then(() => {
        toast.success("Register successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  };

  const passTogle = (event) => {
    event.preventDefault();
    setPass(!pass);
  };

  const glogin = () => {
    googleLogin()
      .then((result) => {
        toast.success(`Welcome ${result.user.displayName}! 👏`);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-white px-4">
      <div className="card w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
          Register Now!
        </h1>
        <form onSubmit={handalRegister} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered focus:ring-2 focus:ring-purple-400 transition-all rounded-xl"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              className="input input-bordered focus:ring-2 focus:ring-purple-400 transition-all rounded-xl"
              placeholder="Enter image URL"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered focus:ring-2 focus:ring-purple-400 transition-all rounded-xl"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-gray-700 font-semibold mb-2">Password</label>
            <input
              type={pass ? "text" : "password"}
              name="password"
              className="input input-bordered focus:ring-2 focus:ring-purple-400 transition-all rounded-xl pr-12"
              placeholder="Enter password"
              required
            />
            <button
              onClick={passTogle}
              className="absolute top-9 right-3 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {pass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
            Register
          </button>
        </form>

        <button
          onClick={glogin}
          className="mt-4 w-full flex items-center justify-center gap-2 py-3 border rounded-xl text-gray-800 font-semibold hover:bg-gray-50 transition-colors"
        >
          <FaGoogle /> Register with Google
        </button>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500 font-semibold hover:underline">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
