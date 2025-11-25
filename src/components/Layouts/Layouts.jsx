import Navbar from "../Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

import { Toaster } from "react-hot-toast";



const Layouts = () => {
 
  return (
    <div className="bg-blue-50 w-11/12 flex-col mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <header className=" mx-auto bg-blue-50 flex-1">
        <Navbar></Navbar>
      </header>
      <main className="bg-blue-50 flex-1">
        <Outlet></Outlet>
      </main>
      <footer className="bg-blue-50 flex-1">
        <Footer></Footer>
      </footer>
      <Toaster />
    </div>
  );
};

export default Layouts;
