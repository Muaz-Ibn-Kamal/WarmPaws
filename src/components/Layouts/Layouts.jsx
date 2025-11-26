import Navbar from "../Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layouts = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Global Toast Notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layouts;
