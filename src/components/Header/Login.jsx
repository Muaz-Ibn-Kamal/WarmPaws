import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../AouthContex/AouthContex";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const { singInuser, googleLogin } = useContext(AuthContext);
  const [pass, setPass] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();

  const handallogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    singInuser(email, password)
      .then((result) => console.log(result))
      .then(() => {
        toast.success("Login successful!", { position: "top-center", autoClose: 3000 });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, { position: "top-center", autoClose: 3000 });
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
        toast.success(`Welcome ${result.user.displayName}!`, { position: "top-center" });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, { position: "top-center", autoClose: 3000 });
        console.log(error.message);
      });
  };

  const goToForgot = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    navigate("/forgot-password", { state: { email } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-white px-4">
      <div className="card w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
          Login Now!
        </h1>
        <form onSubmit={handallogin} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered focus:ring-2 focus:ring-purple-400 transition-all rounded-xl"
              placeholder="Enter your email"
              ref={emailRef}
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

          <div className="text-right">
            <button
              onClick={goToForgot}
              className="text-purple-500 font-semibold hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
            Login
          </button>
        </form>

        <button
          onClick={glogin}
          className="mt-4 w-full flex items-center justify-center gap-2 py-3 border rounded-xl text-gray-800 font-semibold hover:bg-gray-50 transition-colors"
        >
          <FaGoogle /> Login with Google
        </button>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-500 font-semibold hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
