import { useContext, useState } from "react";

import { AuthContext } from "./FireBaseAuth/FirebaseAuth";
import { Outlet } from "react-router";

import Footer from "./Components/Footer/Footer";
import Navbar from "./NavBar/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  const { hello } = useContext(AuthContext);

  return (
    <>
      <section>
        <nav>
          <Navbar />
        </nav>
      </section>
      <section className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </section>
      <section className="bg-gradient-to-r from-yellow-600 to-red-500 text-white">
        <footer>
          <Footer />
        </footer>
        <Toaster />
      </section>
    </>
  );
}

export default App;
