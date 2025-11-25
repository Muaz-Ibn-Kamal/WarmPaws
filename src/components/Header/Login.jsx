import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../AouthContex/AouthContex";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
      .then((result) => {
        console.log(result);
      })
      .then(() => {
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 3000,
          theme: "light",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          theme: "light",
        });
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
        toast.success(`Welcome ${result.user.displayName}!`, {
          position: "top-center",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          theme: "light",
        });
        console.log(error.message);
      });
  };


  const goToForgot = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    navigate("/forgot-password", { state: { email } });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto m-20">
      <h1 className="text-xl mx-auto font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handallogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              placeholder="Enter your email"
              ref={emailRef}
              required
            />
            <div className=" relative">
              <label className="label">Password</label>
              <input
                type={pass ? "text" : "password"}
                name="password"
                className="input input-bordered"
                placeholder="Enter password"
                required
              />
              <button
                onClick={passTogle}
                className="absolute top-6 right-5 btn btn-xs"
              >
                {pass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div>
              <button
                onClick={goToForgot}
                className="link link-hover btn btn-ghost p-0"
              >
                Forgot password?
              </button>
            </div>

            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </fieldset>
        </form>

        <div>
          <button
            onClick={glogin}
            className="btn bg-white text-black border-[#e5e5e5] w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

       
        </div>

        <div>
          <p>
            You have No account? <Link to="/register">Plz Register </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
